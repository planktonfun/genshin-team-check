
if (typeof gdjs.evtsExt__OnlineMultiplayerFirebase__LoadGlobalFunction !== "undefined") {
  gdjs.evtsExt__OnlineMultiplayerFirebase__LoadGlobalFunction.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__OnlineMultiplayerFirebase__LoadGlobalFunction = {};


gdjs.evtsExt__OnlineMultiplayerFirebase__LoadGlobalFunction.userFunc0xdc7e80 = function(runtimeScene, eventsFunctionContext) {
"use strict";
var serverOffset = 0;
var customServerOffset = 0;

function getLast7Digits(input) {
  return input; //input.toString().slice(-7)*1;
}

function getTimeStamp() {
    return getLast7Digits(Date.now() - serverOffset - customServerOffset);
}

function reverseTime() {
	customServerOffset += 10000;
}

function displayTimeWithMilliseconds() {
    const now = new Date(getTimeStamp());
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const milliseconds = String(now.getMilliseconds()).padStart(3, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}.${milliseconds}`;
    return formattedTime;
}

// Predetermined interval relative to timestamp (will display intervals to all other devices at the same time even offline as long as their own date.now() is timestamp is the same)
class TimestampDisplay {
  constructor(startingTimestamp, everySpecificSecond=1, callback) {
    this.startingTimestamp = startingTimestamp;
    this.lastDisplay = 0;
    this.everySpecificSecond = everySpecificSecond; // limitation can only go to 500 milisecond accuracy
    this.callback = callback;
  }

  // use this as a seed
  random() {
    var x = Math.sin(this.timestamp) * 10000;
    return x - Math.floor(x);
  }

  randomInRange(min,max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);

    return Math.floor(this.random() * (max - min + 1) + min);
  }

  update() {
    const currentTimestamp = Math.floor(getTimeStamp() / 100);
    const diff = currentTimestamp - this.startingTimestamp;

    const currentDiff = diff % (this.everySpecificSecond * 10);

    if (this.lastDisplay != currentDiff) {
      this.lastDisplay = currentDiff;
      if (currentDiff === 0) {
        this.timestamp = currentTimestamp;
        this.callback();
      }
    }
  }
}

function chatOrganizer() {
    // Define an array to store the strings
    let stringArray = [];

    // Function to append a string to the array
    function append(str) {
        // Add the new string to the beginning of the array
        stringArray.push(str);

        // Check if the array exceeds the limit of 100 elements
        if (stringArray.length > 1000) {
            // If it does, remove the last element
            stringArray.shift();
        }

        return {
            text: stringArray.join("\n"),
            length: stringArray.length-1
        };
    }

    return append;
}

function chunkManager(pplayer) {
    var chunks = [];
    var delayTresholdMilisseconds = 50; // measure this by roundtrip ping (score: 104, errors:0, lower better)
    var sendRate = 0;
    var sum = 0;
    function appendChunk(event) {
        // pplayer.sendEvent([event]); // if you want to bring back old method; remove set interval too (score: 124, errors:0, lower better)
        // sendRate++;
        chunks.push(event);
        sendChunks();
    }

    function sendChunks() {
        if(chunks.length == 0) return;

        // var sendIt = root;
        var sendIt = false;

        chunks.sort((a,b)=>a.delayTimestamp - b.delayTimestamp);

        if((chunks[0].delayTimestamp-getTimeStamp()) < delayTresholdMilisseconds) {
            sendIt = true;
        }

        if(!sendIt) return;

        pplayer.sendEvent(chunks);
        sendRate++;
        chunks = [];
    }

    /*// measure reliability
    setInterval(()=>{
        if(sendRate == 0) return;
        sum += sendRate;
        console.log({sendRate, sum, errors});
        sendRate = 0;
    }, 1000);*/
    var timesw=Date.now();

    if(window.chunkInterval) clearInterval(chunkInterval);

    window.chunkInterval = setInterval(()=>{
        sendChunks();
    }, 10); // change this depending on the speed of the server

    return appendChunk;
}

// use this when default server slows down
const usePrivateServer = runtimeScene.getGame().getVariables().get('UsePeerJSPrivateServer').getAsBoolean();

class PeerPlayer {
    constructor(peerConnectedCallback, readyCallback, disconnectCallback) {
        if(usePrivateServer) {
            this.peer = new PeerSimulator();
            //  new Peer({
            //     host: "9000-live2d-cubismwebsamples-6gme91zthg1.ws-us110.gitpod.io",
            //     port: 443,
            //     path: "/myapp",
            //     secure: true
            // });
        } else {
            this.peer = new Peer();
        }
        
        this.connections = {};
        this.connectedPeers = {};
        this.history = [];
        this.cm = chunkManager(this);
        this.readyCallback = readyCallback;
        this.disconnectCallback = disconnectCallback;
        this.peerConnectedCallback = function(c) { 
            if(!Array.isArray(c)) {
                c = [c];
            }
            c.forEach(e=>peerConnectedCallback(e));
        };
        this.init();
    }

    sendDelayedEvent(type, data, durationMilliSecond = 0) {
        const event = {
            peerId: this.peer.id,
            type: type,
            data: data,
            delayTimestamp: getTimeStamp() + durationMilliSecond
        };

        // this.sendEvent(event);
        this.cm(event);
    }

    sendToOneClientEvent(clientPeerId, type, data, durationMilliSecond = 0) {
        const event = {
            peerId: this.peer.id,
            type: type,
            data: data,
            delayTimestamp: getTimeStamp() + durationMilliSecond
        };

        if(this.connections[clientPeerId]) {
            const conn = this.connections[clientPeerId];
            conn.send(event);
        }
    }

    sendPersistentEvent(type, data, durationMilliSecond = 0) {
        const event = {
            peerId: this.peer.id,
            type: type,
            data: data,
            delayTimestamp: getTimeStamp() + durationMilliSecond
        };

        this.history.push(event);
        // this.sendEvent(event);
        this.cm(event);
    }

    // Use this only when you want to replay events to newly connected players
    sendToOthers(type, data, durationMilliSecond = 0) {
        const event = {
            peerId: this.peer.id,
            type: type,
            data: data,
            delayTimestamp: getTimeStamp() + durationMilliSecond
        };

        this.history.push(event);
        this.send(event);
    }

    sendEvent(event) {
        this.peerConnectedCallback(event);
        this.send(event);
    }

    send(event) {
        for (var peerId in this.connectedPeers) {
            const conn = this.connectedPeers[peerId];
            conn.send(event);
        }
    }

    log(message) {
        // console.log(message)
    }

    init() {
        this.peer.on('open', (peerId) => {
            this.log('My Peer ID is: ' + peerId);
            this.readyCallback(peerId)
        });

        this.peer.on('close', (peerId) => {
            this.log('Peer disconnected: ' + peerId);
        });

        this.peer.on('connection', (conn) => {
            this.log('Peer connected: ' + conn.peer);
            // this.addPeer(conn.peer, conn);
            conn.on('data', (data) => this.peerConnectedCallback(data));

            // Event handler for when the peer connection is closed
            conn.on('close', () => {
                this.log('Peer disconnected: ' + conn.peer);

                // Move the disconnected peer from connectedPeers to disconnectedPeers
                delete this.connectedPeers[conn.peer];

                // Perform any necessary cleanup or handling for the disconnected player
                this.handleDisconnectedPlayer(conn.peer);
            });
        });
    }

    handleDisconnectedPlayer(peerId) {
        this.disconnectCallback(peerId);
    }

    addPeer(peerId, conn) {
        if (peerId !== this.peer.id && !this.connectedPeers[peerId]) {
            this.connectedPeers[peerId] = conn;
        }
    }

    connectToPeers(peerIds) {
        peerIds.forEach((peerId) => {
            if (peerId !== this.peer.id && !this.connectedPeers[peerId]) {
                const conn = this.peer.connect(peerId);
                this.connections[peerId] = conn;
                conn.on('open', () => {
                    this.log('Connected to ' + conn.peer);
                    this.addPeer(peerId, conn);

                    var nodelayHistory = this.history.map(e => e.delayTimestamp = Date.now());
                    // send persistent events
                    const event = {
                        peerId: this.peer.id,
                        type: 'history',
                        data: {
                            history: JSON.stringify(this.history) 
                        },
                        delayTimestamp: 0
                    };

                    conn.send(event);
                });

                if(typeof addConversation !== 'undefined')
                    addConversation(this.connections[peerId].peer);
            }
        });
    }
}

class FirebaseObject {
    constructor(path, signInCallback, extraData = "") {

        // // one instance only must exist (this won't work as an extend class because its shared)
        // if (FirebaseObject.instance) {
        //     return FirebaseObject.instance;
        // }
        // FirebaseObject.instance = this;

        this.path = path;
        this.signInCallback = signInCallback;
        this.uid = null;
        this.data = extraData;
        this.initApp();
    }

    signedIn() {
        return (this.uid != null);
    }

    log(message) {
        // console.log(message);
    }

    sendErrorMessage(root, messageContent) {
        // Generate a key based on the content using SHA-256 hash
        const messageKey = messageContent.replace(/[.$#[\]\s/]/g, '_');

        const updates = {};

        updates[`${root}/_errors/${messageKey}/count`] = firebase.database.ServerValue.increment(1);

        firebase.database().ref().update(updates);
    }

    removePath(root, pathName) {
        // this doesn't work for some reason fix it later
        // firebase.database().ref(root + '/_' + pathName).remove(() => {}).then(function() {
        //     console.log(root + '/_' + pathName + " Data removed successfully!");
        // })
        // .catch(function(error) {
        //     console.error("Error removing data:", error);
        // });
    }

    updatePathValue(root, pathName, objectValue) {
        const referencePath = firebase.database().ref(root + '/_' + pathName);

        /** since we have an acting server algorithm we don't need a lock */
        referencePath.update(objectValue);
    }

    async retrievePathValue(root, pathName) {
        const referencePath = firebase.database().ref(root + '/_' + pathName);
        const snapshot = await referencePath.once('value');

        return snapshot.val();
    }

    updateServerTimestamp() {
        const serverTimestampRef = firebase.database().ref(this.path + '/serverTimestamp');

        /** since we have an acting server algorithm we don't need a lock */
        serverTimestampRef.update({
          timestampField: firebase.database.ServerValue.TIMESTAMP
        });

    }
    /**
     * Handles the sign in button press.
     */
    toggleSignIn() {
        if (firebase.auth().currentUser) {
            firebase.auth().signOut();
        } else {
            firebase.auth().signInAnonymously().catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/operation-not-allowed') {
                    throw new Error('You must enable Anonymous auth in the Firebase Console.');
                } else {
                    this.log(error);
                }
            });
        }
    }

    disconnect(callback) {

        // unsubscribe listeners
        firebase.database().ref(this.path + "/serverTimestamp").off();
        firebase.database().ref(this.path + "/users").off();
        
        // firebase.database().ref(window.root + "/_chats").off();
        // firebase.database().ref(window.root + "/_announcements").off();
        // firebase.database().ref(window.root + "/_chats").remove();
        // firebase.database().ref(window.root + "/_announcements").remove();

        // window.chatListening = false;

        // remove data
        const Path = this.path;
        const uid = firebase.auth().currentUser.uid;
        const userStatusDatabaseRef = firebase.database().ref(Path + '/users/' + uid + '/' + this.data);
        userStatusDatabaseRef.remove(callback);
    }

    testing() {
        const Path = this.path;
        const uid = firebase.auth().currentUser.uid;
        const ExtraData = {
            uid,
            data: this.data
        };

        const userStatusDatabaseRef = firebase.database().ref(Path + '/users/' + uid + '/' + this.data); // remove '/' + this.data and some code changes to disable multiple players on the different browser tabs

        const isOnlineForDatabase = {
            state: 'online',
            last_changed: firebase.database.ServerValue.TIMESTAMP,
            extraData: ExtraData,
        };

        // Create a reference to the special '.info/connected' path in
        // Realtime Database. This path returns `true` when connected
        // and `false` when disconnected.
        firebase.database().ref('.info/connected').on('value', (snapshot) => {
            // If we're not currently connected, don't do anything.
            if (snapshot.val() == false) {
                return;
            };

            // create a premove to delete itself after disconnection (doesn't work for logging on/off)
            userStatusDatabaseRef.onDisconnect().remove(() => {}).then(() => {
                // do this user is connected
                userStatusDatabaseRef.update(isOnlineForDatabase);
                this.log('online')
            });
        });

        this.updateServerTimestamp();
    }

    monitorPresence() {
        firebase.database().ref(this.path + "/users").on("child_added", (snapshot) => {
            const connectedUserMessage = snapshot.val();

            this.signInCallback(connectedUserMessage, 'added');
        });

        firebase.database().ref(this.path + "/users").on("child_removed", (snapshot) => {
            const connectedUserMessage = snapshot.val();

            this.signInCallback(connectedUserMessage, 'removed');
        });

        firebase.database().ref(this.path + "/users").on("child_changed", (snapshot) => {
            const connectedUserMessage = snapshot.val();

            this.signInCallback(connectedUserMessage, 'changed');
        });

        firebase.database().ref(this.path + "/serverTimestamp").child('timestampField').on("value", (snapshot) => {
             // Get the data from the snapshot
              const data = snapshot.val();

              // The server timestamp field will be a number representing milliseconds since the Unix epoch
              const referenceTimestamp = data;

              // Convert the timestamp to a JavaScript Date object
              const localTimestamp = new Date();

              serverOffset = localTimestamp - referenceTimestamp;

              // console.log('Server timestamp:', new Date(getTimeStamp()));
        });
    }

    listenToChatMessages(root) {
        if(!window.retrieveFirstTime) {
            window.retrieveFirstTime = true;

            if(!window.chatData) {
                window.chatData = {
                    ChatMessages: [],
                    AnnouncementMessages: []
                };
            }

            firebase.database().ref(root + "/_chats").once("value", (snapshot) => {
                const message = snapshot.val();

                if(!message) return;
                message.forEach(e=>{ 
                    chatData.ChatMessages.push(e);
                    // console.log(chatData);
                });

            });

            firebase.database().ref(root + "/_announcements").once("value", (snapshot) => {
                const message = snapshot.val();

                if(!message) return;
                chatData.AnnouncementMessages.push(message.at(-1));
                // console.log(chatData);
            });
        }

        if(!window.chatListening) {
            window.chatListening = true;
            window.chatData = {
                ChatMessages: [],
                AnnouncementMessages: []
            };

            firebase.database().ref(root + "/_chats").on("value", (snapshot) => {
                const message = snapshot.val();

                if(!message) return;
                chatData.ChatMessages.push(message.at(-1));
                // console.log(chatData);
            });

            firebase.database().ref(root + "/_announcements").on("value", (snapshot) => {
                const message = snapshot.val();

                if(!message) return;
                chatData.AnnouncementMessages.push(message.at(-1));
                // console.log(chatData);
            });
        }
    }

    sendAnnouncementMessage(root, message) {
        const limit = 4;

        const circularBufferRef = firebase.database().ref(root + '/_announcements');

        // Push the new value to the circular buffer
        circularBufferRef.transaction(currentData => {
          const circularBuffer = currentData || [];
          circularBuffer.push({timestamp: getTimeStamp(), message});

          // Maintain the buffer size (remove elements from the beginning if it exceeds 100)
          while (circularBuffer.length > limit) {
            circularBuffer.shift();
          }

          return circularBuffer;
        });

    }

    sendChatMessage(root, message) {
        const limit = 500;

        const circularBufferRef = firebase.database().ref(root + '/_chats');

        // Push the new value to the circular buffer
        circularBufferRef.transaction(currentData => {
          const circularBuffer = currentData || [];
          circularBuffer.push(message);

          // Maintain the buffer size (remove elements from the beginning if it exceeds 500)
          while (circularBuffer.length > limit) {
            circularBuffer.shift();
          }

          return circularBuffer;
        });

    }

    /**
     * initApp handles setting up UI event listeners and registering Firebase auth listeners:
     *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
     *    out, and that is where we update the UI.
     */
    initApp() {
        // Listening for auth state changes.
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                this.uid = user.uid;
                this.log('Signed in ', this.uid);
                this.testing();
                this.monitorPresence();
            } else {
                // User is signed out.
                this.log('Signed out');
                this.toggleSignIn();
            }
        });
    }
}

class Lobby {
  constructor(path, handleRecievedData, handleReadyCallback, handleDisconnectCallback) {
    this.path = path;
    this.users = {};
    this.handleDisconnectCallback = handleDisconnectCallback;
    this.pplayer = new PeerPlayer(handleRecievedData, (id)=>{ this.onReadyPeerId(id); }, (id)=>{ this.handleDisconnectCallback(id); });
    this.handleReadyCallback = handleReadyCallback;
  }

  onReadyPeerId(readyPeerId) {
    this.fbobj = new FirebaseObject(this.path, (user,state)=>{ this.handleFirebaseUpdate(user,state) }, readyPeerId);
    // this.fbobj.initApp();
    this.handleReadyCallback(readyPeerId);
  }

  handleFirebaseUpdate(users, state) {

    var userArray = [];

    for(var i in users) {
        const user = users[i];
        const peerId = user.extraData.data;
        const uid = user.extraData.uid + "-" + peerId;

        userArray.push(uid);

        if (!this.users[uid]) {
          this.users[uid] = {
            name: uid,
            state: state,
            peerId: user.extraData.data,
            timestamp: user.last_changed
          };
        }

        // time difference
        this.pplayer.connectToPeers([peerId]);
        this.users[uid].state = state; // the state may not be always accurate, but it will capture all peerIds
    }
  }

  getSelfPeerId() {
    return this.pplayer.peer.id;
  }

  getConnectedCount() {
    return Object.keys(this.pplayer.connectedPeers).length;
  }

  getUsers() {
    return this.users;
  }

  disconnect() {
    this.fbobj.disconnect(()=>{
        // this.sendMessage('disconnected', {uid: this.pplayer.peer.id}, 0);
        this.pplayer.sendPersistentEvent('disconnected', {uid: this.pplayer.peer.id}, 0);
        setTimeout(()=>{
            this.pplayer.peer.disconnect();
        }, 1000)        
    });
  }

  removeUserCard(serverPath, subName) {
    this.fbobj.removePath(serverPath, subName);
  }
  
  setUserCards(serverPath, playerName, playerObject, subName) {
    var a = {};
    a[playerName] = playerObject;

    this.fbobj.updatePathValue(serverPath, subName, a);
  }

  setPlayerBaseStats(serverPath, playerName, playerObject, subName) {
    var a = {};
    a[playerName] = playerObject;

    this.fbobj.updatePathValue(serverPath, subName, a);
  }

  setServerRespawnVariable(serverPath, monsterName, seconds, subName) {
    var a = {};
    a[monsterName] = getTimeStamp() + (seconds*1000);

    this.fbobj.updatePathValue(serverPath, subName, a);
  }

  async getServerVariable(serverPath, subName) {
    return await this.fbobj.retrievePathValue(serverPath, subName);
  }
  
  sendErrorMessage(serverPath, messageContent) {
    this.fbobj.sendErrorMessage(serverPath, messageContent);
  }

  sendMessage(type, data, delay) {
      if(delay < 100) delay = 100;
    if(!this.pplayer) return
    this.pplayer.sendPersistentEvent(type, data, delay);
  }

  listenToChatMessages(serverPath) {
    this.fbobj.listenToChatMessages(serverPath);
  }
  
  sendAnnouncementMessage(serverPath, message) {
    this.fbobj.sendAnnouncementMessage(serverPath, message);
  }

  sendChatMessage(serverPath, message) {
    this.fbobj.sendChatMessage(serverPath, message);
  }

  sendMessageNoHistory(type, data, delay) {
    if(delay < 100) delay = 100;
    if(!this.pplayer) return
    this.pplayer.sendDelayedEvent(type, data, delay);
  }

  sendOneWay(type, data, delay) {
      if(delay < 100) delay = 100;
    if(!this.pplayer) return
    this.pplayer.sendToOthers(type, data, delay);
  }

  replyMessage(peerId, type, data, delay) {
      if(delay < 100) delay = 100;
    this.pplayer.sendToOneClientEvent(peerId,type, data, delay);
  }
}

function sanitizeFirebaseReference(reference) {
  // Remove invalid characters: '.', '#', '$', '/', '[', ']', ' ', and ASCII control characters
  const sanitizedReference = reference.replace(/[.#$/\[\]\x00-\x1F\x7F ]/g, '');

  // Enforce the maximum length of 768 bytes
  const maxLength = 768;
  return sanitizedReference.substring(0, maxLength);
}

window.sanitizeFirebaseReference = sanitizeFirebaseReference;
window.Lobby = Lobby;
window.getTimeStamp = getTimeStamp;
window.displayTimeWithMilliseconds = displayTimeWithMilliseconds;
window.TimestampDisplay = TimestampDisplay;
window.reverseTime = reverseTime;

};
gdjs.evtsExt__OnlineMultiplayerFirebase__LoadGlobalFunction.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__OnlineMultiplayerFirebase__LoadGlobalFunction.userFunc0xdc7e80(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__OnlineMultiplayerFirebase__LoadGlobalFunction.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__OnlineMultiplayerFirebase__LoadGlobalFunction.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__OnlineMultiplayerFirebase__LoadGlobalFunction.registeredGdjsCallbacks = [];