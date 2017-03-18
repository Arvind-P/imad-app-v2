var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var updatecounter = 0;
var namearray = [];

var articletwocontent = {
    title: 'Article Two',
    date: 'Mar 5th, 2017',
    bodycontent: `
            <div>
                This is a page rendered using Javascript.
                <br />
                The page is mobile friendly too
            </div>`
};

function createTemplate(data)
{
    var htmlTemplate =
    `<!doctype html>
    <html>
        <head>
            <link href="/ui/style.css" rel="stylesheet" />
            <title>${data.title}</title>
        </head>
        <body>
            <div class="articlestyle">
                <div>
                    <h1>${data.title}</h1>
                </div>
                <hr />
                <div>
                    <p>${data.date}</p>
                </div>
                <div>
                    ${data.bodycontent}
                </div>
            </div>
        </body>
    </html>`
    ;
    
    return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/articleone.html', function(req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'articleone.html'));
});

app.get('/ui/main.js', function(req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/articletwo.html', function(req, res) {
  res.send(createTemplate(articletwocontent));
});

app.get('/ui/updatebuttonclickcounter', function(req, res) {
  updatecounter = updatecounter + 1;
  res.send(updatecounter.toString());
});

app.get('/addnewname/:name', function(req, res) {
    var name = req.params.name;
    alert('Name entered is : ' + name);
    namearray.push(name);
    
    //JSON Javascript Object to String
    res.send(JSON.stringify(namearray));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
