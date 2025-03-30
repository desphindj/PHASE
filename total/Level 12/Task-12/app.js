const fs = require('fs');
const path = require('path');

// Recursive function to read a directory and its subdirectories
function readDirRecursive(directoryPath) {
  // Read the contents of the directory
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(`Error reading directory ${directoryPath}:`, err);
      return;
    }

    // Loop through each file/subdirectory
    files.forEach((file) => {
      const fullPath = path.join(directoryPath, file);

      // Get the stats of the file or directory
      fs.stat(fullPath, (err, stats) => {
        if (err) {
          console.error(`Error getting stats for ${fullPath}:`, err);
          return;
        }

        // Print the full path and type of the item
        if (stats.isDirectory()) {
          console.log(`[Directory] ${fullPath}`);
          // If it's a directory, call the function recursively
          readDirRecursive(fullPath);
        } else {
          console.log(`[File] ${fullPath}`);
        }
      });
    });
  });
}

// Path to the directory to start reading (change this as needed)
const startingDirectory = './testDir';

// Call the function to start reading from the starting directory
readDirRecursive(startingDirectory);
