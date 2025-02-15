const fs = require('fs');
const archiver = require('archiver');

const folderToCompress = './latest';
const outputFileName = 'latest.zip';

// Create a writable stream to save the compressed data
const output = fs.createWriteStream(outputFileName);

// Create a new archive
const archive = archiver('zip', {
  zlib: { level: 3 }, // Set compression level (0-9)
});

// Pipe the archive to the output file
archive.pipe(output);

// Append the folder to the archive
archive.directory(folderToCompress, false);

// Finalize the archive and save it
archive.finalize();

console.log('Folder compressed successfully.');
