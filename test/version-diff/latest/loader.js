
		// Replace 'your_zip_file_url' with the actual URL of the zip file
		const zipFileUrl = './latest.zip';
		const versionUrl = './version.txt';

		var extractedProgress = {total:0,progress:0};
		var extractedFiles = {};
		var extractedAudioFiles = {};
		var extractedJSFiles = {};

		function getExtractedFile(filename) {
			if(!extractedFiles[filename.toLowerCase()]) return filename;

			if(filename.indexOf(".mp3") == filename.length - 4) {
    			if(!extractedAudioFiles[filename.toLowerCase()]) return filename;
    			return extractedAudioFiles[filename.toLowerCase()];
			}

			if(filename.indexOf(".ogg") == filename.length - 4) {
    			if(!extractedAudioFiles[filename.toLowerCase()]) return filename;
    			return extractedAudioFiles[filename.toLowerCase()];
			}

			return extractedFiles[filename.toLowerCase()];
		}


		function getVersion(url) {
		    return new Promise((resolve, reject)=>{
		        const myRequest = new Request(url);

		        fetch(myRequest)
		          .then((response) => {
		            if (!response.ok) {
		              reject(`HTTP error! Status: ${response.status}`);
		            }

		            resolve(response.text());
		          })
		    });
		}

		function getFileAsAsBlob(fileUrl) {
		    return new Promise((resolve, reject)=>{
		        const myRequest = new Request(fileUrl);

		        fetch(myRequest)
		          .then((response) => {
		            if (!response.ok) {
		              reject(`HTTP error! Status: ${response.status}`);
		            }

		            resolve(response.blob());
		          })
		    });
		}

		function getBlobAsArrayBuffer(blob) {
		    return new Promise((resolve, reject) => {
		        const reader = new FileReader();

		        reader.onload = function(event) {
		            resolve(event.target.result);
		        }

		        reader.onerror = function(err) {
		            reject(err);
		        }

		        reader.readAsArrayBuffer(blob);
		    });
		}

		async function getFileAsArrayBuffer(fileUrl) {
		    var blob = await getFileAsAsBlob(fileUrl);

		    // return await blobToDataURL(blob);
		    return await getBlobAsArrayBuffer(blob);
		}

		function getImageAsDataUrl(imageUrl) {
		    return new Promise((resolve, reject) => {
		        // Image is not cached; fetch and cache it
		        const image = new Image();
		        image.crossOrigin = "anonymous"; // Set cross-origin mode

		        image.onload = () => {
		            const canvas = document.createElement("canvas");
		            const context = canvas.getContext("2d");
		            canvas.width = image.width;
		            canvas.height = image.height;
		            context.drawImage(image, 0, 0);

		            // Convert the image to a data URL
		            const dataURL = canvas.toDataURL("image/png");

		            resolve(dataURL);
		        }

		        image.onerror = (err) => {
		            reject(err);
		        }

		        image.src = imageUrl;
		    });
		}

		function convertArrayBufferToURL(fileData) {
		    const blob = new Blob([fileData], { type: "application/octet-stream" });
		    return URL.createObjectURL(blob);
		}

		async function cachedProcess(zipFileUrl, versionUrl) {

		    const cacheKey = zipFileUrl;
		    const browserDB = new BrowserDatabase("gameCacheDB", "games");
		    const version = await getVersion(versionUrl);

		    console.log({version});

		    await browserDB.openConnection();

		    try {
		        var a = await browserDB.getDataById(cacheKey);
		        if(a && (version == a.data.version)) {
		            console.log('using cache')
		            loadTheZipFromUrl(convertArrayBufferToURL(a.data.file), true);
		        } else {
		            console.log('not using cache')
		            var arrayBuffer = await getFileAsArrayBuffer(zipFileUrl);
		            await browserDB.setDataById(cacheKey, {file: arrayBuffer, version: version});
		            loadTheZipFromUrl(convertArrayBufferToURL(arrayBuffer));
		        }
		    } catch(err) {
		        console.log(err);
		        // delete database if it doesn't work
		        console.log(await browserDB.deleteDatabase());
		    }
		}

		function startDownload() {
	        // loadTheZipFromUrl(zipFileUrl);
	        cachedProcess(zipFileUrl, versionUrl); // use this so user doesn't have to download large files upon browser refresh
	    }

	    function bytesToMB(bytes) {
		    return (bytes / (1024 * 1024)).toFixed(2);
		}

		function loadTheZipFromUrl(zipFileUrl, isCache=false) {
			const xhr = new XMLHttpRequest();

			xhr.onprogress = function (event) {
	            if (event.lengthComputable) {
	                const percentComplete = (event.loaded / event.total) * 100;
	                document.getElementById('progress-bar').style.width = percentComplete + '%';
	                if(isCache)
	                	document.getElementById('progress-size').innerText = `Latest version 0 MB / 0 MB`;
	                else
	                	document.getElementById('progress-size').innerText = `Updating version ${bytesToMB(event.loaded)} MB / ${bytesToMB(event.total)} MB`;
	            }
	        };

			// Set up event listeners
			xhr.addEventListener('load', function () {
			  if (xhr.status === 200) {
			    // The request was successful
			    const blob = xhr.response;
			    loadTheZipBlob(blob)

			  } else {
			    // Handle errors here, e.g., show an error message
			    console.error('Failed to download the zip file');
			  }
			});

			xhr.addEventListener('error', function () {
			  // Handle network errors here
			  console.error('Network error occurred');
			});

			xhr.open('GET', zipFileUrl);
			xhr.responseType = 'blob'; // Set the response type to Blob
			xhr.send();
		}

		async function convertJSBlobURLToDataUrl(blobURL, name) {
		  try {
		    // Fetch the Blob data
		    const response = await fetch(blobURL);
		    if (!response.ok) {
		      throw new Error('Failed to fetch Blob data');
		    }

		    // Read the Blob data as ArrayBuffer
		    const blobData = await response.blob();

		    // Convert the Blob data to a Data URL with 'audio/mpeg' MIME type
		    const dataURL = `data:text/javascript;base64,${await blobToBase64(blobData)}`;
		    return dataURL;
		  } catch (error) {
		    console.error('Error converting Blob URL to Data URL:', error);
		    throw error;
		  }
		}

		async function convertAudioBlobURLToDataUrl(blobURL, name) {
		  try {
		    // Fetch the Blob data
		    const response = await fetch(blobURL);
		    if (!response.ok) {
		      throw new Error('Failed to fetch Blob data');
		    }

		    // Read the Blob data as ArrayBuffer
		    const blobData = await response.blob();

		    // Convert the Blob data to a Data URL with 'audio/mpeg' MIME type
		    const dataURL = `data:audio/mpeg;base64,${await blobToBase64(blobData)}`;

		    return dataURL;
		  } catch (error) {
		    console.error('Error converting Blob URL to Data URL:', error);
		    throw error;
		  }
		}

		function checkComplete() {

			const percentComplete = (extractedProgress.progress / extractedProgress.total) * 100;
            document.getElementById('progress-bar2').style.width = percentComplete + '%';
            document.getElementById('progress-percent').innerText = `Extracting ${percentComplete.toFixed(2)} %`;

			if(extractedProgress.progress != extractedProgress.total) return;

			loadJSFiles();
		}

		async function blobToBase64(blob) {
		  return new Promise((resolve, reject) => {
		    const reader = new FileReader();
		    reader.onload = () => {
		      resolve(reader.result.split(',')[1]);
		    };
		    reader.onerror = (error) => {
		      reject(error);
		    };
		    reader.readAsDataURL(blob);
		  });
		}


		async function blobToText(blobUrl) {
		    try {
		        const response = await fetch(blobUrl);

		        if (!response.ok) {
		          throw new Error('Network response was not ok');
		        }

		        const text = await response.text();
		        return(text);
		      } catch (error) {
		        console.error('Error reading Blob URL:', error);
		        return "";
		      }
		}

		function dataUrlToBlobUrl(dataUrl) {
            const byteString = atob(dataUrl.split(',')[1]); // Decode base64
            const mimeString = dataUrl.split(',')[0].split(':')[1].split(';')[0]; // Extract MIME type

            // Create an ArrayBuffer and fill it with the byte data
            const arrayBuffer = new ArrayBuffer(byteString.length);
            const uintArray = new Uint8Array(arrayBuffer);

            for (let i = 0; i < byteString.length; i++) {
                uintArray[i] = byteString.charCodeAt(i);
            }

            // Return the Blob
            const fileBlob = new Blob([arrayBuffer], { type: mimeString });

            return URL.createObjectURL(fileBlob);
        }

		function loadFromCurrent(files) {
			extractedProgress.total = files.length*2;

			const batchSize = 400; // Adjust batch size as needed
			let currentIndex = 0;

			const processBatch = () => {
	            const batch = files.slice(currentIndex, currentIndex + batchSize);
	            batch.forEach(async function (f) {
		          extractedProgress.progress++;
		          var filename = f.filename.toLowerCase();
		          // const {base64Data, mimeType} = JSON.parse(f.b64);
		          const fileBlob = f.b64.base64Data; // convert this to raw blob so its faster
		          // console.log(base64Data)
		          // const blobUrl = dataUrlToBlobUrl(base64Data);
		          const blobUrl = URL.createObjectURL(fileBlob);
		          // console.log(filename);

		          if(filename.indexOf(".js") == filename.length - 3) {
		          	extractedJSFiles[filename] = blobUrl;
				  } else {
		          	extractedAudioFiles[filename] = await convertAudioBlobURLToDataUrl(blobUrl);
		          	extractedFiles[filename] = blobUrl;
		          }

		          extractedProgress.progress++;
	    		  checkComplete();
		        });

	            currentIndex += batchSize;

	            if (currentIndex < files.length) {
	                setTimeout(processBatch, 0); // Allow UI to update
	            }
	        };

	        processBatch();
		}

		function loadTheZipBlob(zipBlob) {
			// Create a new JSZip instance
			const zip = new JSZip();

			// Use FileReader to read the Blob as an array buffer
			const reader = new FileReader();

			reader.onload = function () {
			  const arrayBuffer = reader.result;

			  // Load the zip file into JSZip
			  zip.loadAsync(arrayBuffer)
			    .then(function (zipContents) {
			      extractedProgress.total = Object.keys(zipContents.files).length;
			      // Loop through each file in the zip
			      zipContents.forEach(function (relativePath, file) {
			        // Extract the file
			        file.async('blob').then(async function (content) {
			          var filename = relativePath.replace('compressed_png/', '').toLowerCase();

			          console.log(filename);

			          if(filename.indexOf(".js") == filename.length - 3) {
			          	extractedJSFiles[filename] = URL.createObjectURL(content); //await convertJSBlobURLToDataUrl(URL.createObjectURL(content));
					  } else {
			          	extractedAudioFiles[filename] = await convertAudioBlobURLToDataUrl(URL.createObjectURL(content));
			          	extractedFiles[filename] = URL.createObjectURL(content);
			          }

			          extractedProgress.progress++;
		    		  checkComplete();
			        });
			      });

			    })
			    .catch(function (error) {
			      console.error(error);
			    });
			};

			// Read the Blob as an array buffer
			reader.readAsArrayBuffer(zipBlob);
		}

		function hideProgressBar() {
		  var x = document.getElementById("progress-container");
		  if (x.style.display === "none") {
		    x.style.display = "block";
		  } else {
		    x.style.display = "none";
		  }
		  var x = document.getElementById("progress-container2");
		  if (x.style.display === "none") {
		    x.style.display = "block";
		  } else {
		    x.style.display = "none";
		  }

		}

		function loadJSFileFromBlob(blobUrl) {
			return new Promise((resolve, reject) => {
				// Create a script element
				const scriptElement = document.createElement('script');
				scriptElement.src = blobUrl;
				scriptElement.setAttribute('crossorigin', 'anonymous');

				// Append the script element to the HTML document
				document.head.appendChild(scriptElement);

				// Wait for the script to load and execute
			    scriptElement.onload = () => {
			      resolve(); // Resolve the promise when the script is loaded and executed
			    };

			    // Handle any script loading errors
			    scriptElement.onerror = (error) => {
			      reject(error); // Reject the promise if there's an error
			    };
			});
		}

		function loadExceptionFiles(scriptUrl) {
			return new Promise((resolve, reject) => {
				// Create a script element
				const scriptElement = document.createElement('script');
				scriptElement.src = scriptUrl;
				scriptElement.setAttribute('crossorigin', 'anonymous');

				// Append the script element to the HTML document
				document.head.appendChild(scriptElement);

				// Wait for the script to load and execute
			    scriptElement.onload = () => {
			      resolve(); // Resolve the promise when the script is loaded and executed
			    };

			    // Handle any script loading errors
			    scriptElement.onerror = (error) => {
			      reject(error); // Reject the promise if there's an error
			    };
			});
		}

		async function loadJSFiles() {

			var blobUrl = getExtractedFile("js-order-list.json");
			var temp1 = JSON.parse(await blobToText(blobUrl));

			var loadJSOrder = temp1.map(e=>{
			    if(e.split('/').includes('Physics2Behavior')) { return e; }
			    return e.split('/').at(-1);
			})

			for (const item of loadJSOrder) {
				var filename = item.toLowerCase();

		    	try {
					if(/\//.test(filename)) {
						await loadExceptionFiles(item);
					} else {
						await loadJSFileFromBlob(extractedJSFiles[filename]);
					}
					// You can now perform further actions after the script has loaded.
				} catch (error) {
					console.error('Script loading failed:', error);
				}
		  	}

			console.log('finish')
			hideProgressBar();
			loadTheGame();
		}
