var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
     'article-one': {
      title: 'Resume | Abin Cherish',
      menu: `
        <a href="/"> Home</a>
        <a href="/article-one"> Resume</a>
        <a href="/article-two"> Projects</a>
        <a href="/article-three"> Contacts</a>
      `,
      heading: 'My Resume',
      date: 'Friday,30th September',
      content: `<p>
                    Abin Cherish <br>
                    Final Year B.Tech Student	<br>
                    Computer Science and Engineering<br>	     
                    Believers Church Caarmel Engg. College                                             
                </p>
                <hr/>
                <p><h4>Career Objective</h4>
                    To succeed in an environment of growth and excellence and earn a job which provides me job satisfaction and self development and help me achieve personal as well as organizational goals.
                </p>
                
                `
    },
     'article-two': {
         title: 'Projects | Abin Cherish',
      menu: `
        <a href="/"> Home</a>
        <a href="/article-one"> Resume</a>
        <a href="/article-two"> Projects</a>
        <a href="/article-three"> Contact</a>
      `,
      heading: 'Projects',
      date: 'Saturday,1st October',
      content: `<p>
                    <h4>Mini PETS4U</h4><br>
                    PETS4U is a web based application, mainly focused on to the pet farmers and pet dealers. It intends to provide support to those who are interested in pets. The shop owner who is the admin can publish the list of both currently available and new arrival pets in the shop. The system provides facilities for booking pets. In the case of advance booking of new arrival pets, the shop owner can send notifications by email and SMS when it became available.Users can consult any doctor, by mailing their enquiries directly to the doctors mail. The system also provides information about services of the shop, accessories, food required for pets. The farmers can enlist the pets they have for sale so that the shop owner can easily send his requirement to the farmer through this site.
                        <br>Tool  ASP.NET
                        <br>Front End  C Back End  SQL Server 2008
                </p>
                </hr>
                <p>
                <h4>Main MADAM</h4><br>
                    Android users are constantly threatened by an increasing number of malicious applications, generically called malware. These are threats to user privacy, money, device and file integrity. So there is a need for an effective and efficient behaviour-based Android malware detection and prevention. MADAM (Multi-Level Anomaly Detector for Android Malware), is an Android app for detecting malware application. MADAM is a novel host-based malware detection system for Android devices which simultaneously analyses and correlates features at four levels: kernel, application, user and package, to detect and stop malicious behaviours.
                        <br>Tool  Android Studio
                        <br>Front End  Java Back End  SQLite
                </p>
                `
     },
     'article-three': {
         title: 'Contact | Abin Cherish',
      menu: `
        <a href="/"> Home</a>
        <a href="/article-one"> Resume</a>
        <a href="/article-two"> Projects</a>
        <a href="/article-three"> Contact</a>
      `,
      heading: 'Contact',
      date: 'Saturday,1st October',
      content: `<p>
      
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
app.get('/ui/samplecv.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'samplecv.html'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
