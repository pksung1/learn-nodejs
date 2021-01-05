var http = require('http');
var url = require('url');
var fs = require('fs'); // fileSystem
var dt = require('./myfirstmodule');
var url = require('url');
var formidable = require('formidable');

http.createServer((req, res) => {
    
    let q = url.parse(req.url);
    let {pathname} = q
    if (pathname === '/') {
        fsTutorial(req, res);
    }  else if (pathname === '/fileUpload') {
        fileUploadExample(req, res);
    } else if (pathname === '/url') {
        urlTutorial(req, res);
    } else if (pathname === '/url/module') {
        urlModuleTutorial(req, res);
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write(`url not found => ${req.url}`)
        res.end()
    }
}).listen(8080);

function fsTutorial(req, res) {
    fs.readFile('demofile1.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end()
    })
}

function fileUploadExample(req, res) {
    let form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
        let oldPath = files.file.path;
        let newPath = `./upload/${files.file.name}`
        fs.rename(oldPath, newPath, (err) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            if (err) throw err;
            res.write('file Uploaded and moved');
            res.end();
        })
    })
}

function urlTutorial(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var text = `${q.year} ${q.month}`
    res.write(text);
    res.end();
}

function urlModuleTutorial(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let q = url.parse(req.url)

    let pContent = (text) => `<p>${text}</p>`
    res.write(pContent(q.hostname))
    res.write(pContent(q.pathname))
    res.write(pContent(q.search))
    res.write(pContent(JSON.stringify(q.query)))
    res.end();
}