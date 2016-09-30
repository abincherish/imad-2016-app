var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
  title: 'Article One | Abin Cherish',
  menu: `
    <a href="/"> Home</a>
    <a href="/article-one"> Article-One</a>
    <a href="/article-two"> Article-Two</a>
    <a href="/article-three"> Article-Three</a>
  `,
  heading: 'Article ONE',
  date: 'Friday,30th September',
  content: `<p>
                This is the content area for first article...
            </p>`
};

function createTemplate (data) {
    var title = data.title;
    var menu = data.menu;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
        var htmlTemplate =`
        <html>
            <head>
                <link href="/ui/style.css" rel="stylesheet" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>
                    ${title} 
                </title>
            </head>
            <body>
                <div class=container>
                <div>
                    ${menu}
                </div>
                <hr/>
                <h3>
                ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
                </div>
            </body>
        </html>
        `; 
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function (req,res) {
    res.send(createTemplate(articleOne));
});

app.get('/article-two',function (req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three',function (req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/mypic.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'mypic.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
