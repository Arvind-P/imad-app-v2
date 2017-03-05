var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var content = {
    title: 'Article Two'
    date: 'Mar 5th, 2017'
    body-content: '<div class="articlestyle">
            <div>
                <h1>Article One</h1>
            </div>
            <hr />
            <div>
                <p>Feb 28, 2017</p>
            </div>
            <div>
                This is a page created simply using HTML. It will later on be loaded using a javascript.
                <br />
                The page is mobile friendly too
            </div>
        </div>'
    
}

app.get('/ui/index.html', function (req, res) {
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

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
