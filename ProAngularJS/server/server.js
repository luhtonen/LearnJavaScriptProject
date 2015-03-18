var chapter = process.argv[2];
if (chapter === undefined || chapter === '') {
  console.error('Usage: node server.js <chapter-number>');
  console.error('chapter number must be a valid integer in range between 1 and 25');
  process.exit(1);
}
if (isNaN(parseInt(chapter))) {
  console.error('incorrect argument: ' + chapter);
  console.error('chapter number must be a valid integer');
  process.exit(1);
}
if (chapter < 1 || chapter > 25) {
  console.error('incorrect chapter number: ' + chapter);
  console.error('chapter number must be in range between 1 and 25');
  process.exit(1);
}
if (chapter.length == 1) {
  chapter = '0' + chapter;
}

var connect = require('connect'),
  serveStatic = require('serve-static');

var app = connect();
app.use(serveStatic('../ch' + chapter));
app.listen(5000);