var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
     'article-one': {
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
    },
     'article-two': {
         title: 'Article Two | Abin Cherish',
      menu: `
        <a href="/"> Home</a>
        <a href="/article-one"> Article-One</a>
        <a href="/article-two"> Article-Two</a>
        <a href="/article-three"> Article-Three</a>
      `,
      heading: 'Article TWO',
      date: 'Saturday,1st October',
      content: `<p>
                    This is the content area for second article...
                </p>`
     },
     'article-three': {
         title: 'Article Three | Abin Cherish',
      menu: `
        <a href="/"> Home</a>
        <a href="/article-one"> Article-One</a>
        <a href="/article-two"> Article-Two</a>
        <a href="/article-three"> Article-Three</a>
      `,
      heading: 'Article THREE',
      date: 'Saturday,1st October',
      content: `<p>
                    This is the content area for third article...
                </p>`
     }
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

app.get('/favicon.ico', function (req, res) {
  res.sendFile(path.join(__dirname, '/', 'favicon.ico'));
});

var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});

var names = [];
app.get('/submit-name', function (req, res) {
    var name = req.query.name;
    
    names.push(name);
    
    res.send(JSON.stringify(names));
});

app.get('/:articleName',function (req,res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/mypic.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'mypic.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
