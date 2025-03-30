const fs = require('fs');
const filePath = 'dj.txt';
if (fs.existsSync(filePath)) {
  console.log('The file dj.txt exists!');
} else {
  console.log('The file dj.txt does not exist.');
}
