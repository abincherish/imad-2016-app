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
                <p><h4>Academic Credentials</h4>
                <table style="width:100%" border="1px">
                <tr><th>Degree</th><th>Institution</th><th>University/Board</th><th>Year</th><th>Percent</th></tr>
                <tr><td>B.Tech in Computer Science and Engineering</td><td>Believers Church Caarmel Engg. College Pathanamthitta</td><td>MG University</td><td>2013-2017</td><td>73.96</td></tr>
                <tr><td>Class XII</td><td>Mar Dionysius Sr. Secondary School Mallappally</td><td>CBSE</td><td>2013</td><td>70.6</td></tr>
                <tr><td>Class X</td><td>Anjaneaya Saraswathy Vidya Mandiram Vaipur</td><td>CBSE</td><td>2011</td><td>93</td></tr>
                </table>
                </p>
                <p><h4>Computer Skills</h4>
                <ul>
                 <li>Programming Languages: C, C++, C#, Java, SQL Server</li>
                 <li>Software Packages: Visual Studio, Android Studio, MS Office</li>
                 <li>Platforms: RHEL 7, Linux and Windows</li>
                </ul>
                </p>
                <p><h4>Certificationss</h4>
                <ul>
                 <li>RHCSA & RHCE at IPSR Solutions Kottayam (Pursuing)</li>
                 <li>Database Programming with SQL by Oracle Academy (Pursuing online)</li>
                 <li>IMAD by IIT Madras</li>
                </ul>
                </p>
                <p>
                <h4>Known Languages</h4>
                <table style="width:100%" >
                <tr><th></th><th>Read</th><th>Write</th><th>Speak</th></tr>
                <tr align="center"><td>Malayalam</td><td>Y</td><td>Y</td><td>Y</td></tr>
                <tr align="center"><td>English</td><td>Y</td><td>Y</td><td>Y</td></tr>
                </table>
                </p>
                 <p><h4>Strength and Weakness</h4>
                 <table style="width:100%">
                 <tr><td> 
                <ul>
                 <li>Dedicated</li>
                 <li>Enthusiastic</li>
                 <li>Self aware & adaptable</li>
                 <li>Caring & helpful</li>
                </ul> </td>
                <td>
                <ul>
                 <li>Workaholic</li>
                 <li>Handwriting is not that good</li>
                 <li>Habit of carrying a notepad</li>
                 <li>Not good at sports</li>
                </ul> </td></tr>
                </table>/
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
                    <h4>Mini PETS4U</h4>
                    PETS4U is a web based application, mainly focused on to the pet farmers and pet dealers. It intends to provide support to those who are interested in pets. The shop owner who is the admin can publish the list of both currently available and new arrival pets in the shop. The system provides facilities for booking pets. In the case of advance booking of new arrival pets, the shop owner can send notifications by email and SMS when it became available.Users can consult any doctor, by mailing their enquiries directly to the doctor's mail. The system also provides information about services of the shop, accessories, food required for pets. The farmers can enlist the pets they have for sale so that the shop owner can easily send his requirement to the farmer through this site.
                        <br>Tool - ASP.NET
                        <br>Front End - C# <br> Back End - SQL Server 2008
                </p>
                <hr/>
                <p>
                <h4>Main MADAM</h4>
                    Android users are constantly threatened by an increasing number of malicious applications, generically called malware. These are threats to user privacy, money, device and file integrity. So there is a need for an effective and efficient behaviour-based Android malware detection and prevention. MADAM (Multi-Level Anomaly Detector for Android Malware), is an Android app for detecting malware application. MADAM is a novel host-based malware detection system for Android devices which simultaneously analyses and correlates features at four levels: kernel, application, user and package, to detect and stop malicious behaviours.
                        <br>Tool - Android Studio
                        <br>Front End - Java <br>Back End - SQLite
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
      <h4>Contacts Details</h4>
      Name : Abin Cherish<br/>
Address : Ayroothara House<br/>
Chalappally P.O.,<br/>
Ezhumattoor, Mallappally<br/>
Pathanamthitta Dist. PIN 689586<br/>
D.O.B : 28 December, 1994<br/>
Gender : Male<br/>
Mail : abincherish@gmail.com<br/>
Mobile : 9744196141, 8301884251 <br/>
Linked In :<a href="https://in.linkedin.com/in/abin-cherish-31874112a"target="_blank">Visit my Linked In Profile</a><br/>
Resume Drive URL:<a href="https://drive.google.com/open?id=0Bz2aOzQMQ2q4eG1TTXpLNG1RM28"target="_blank">Visit my CV in Google Drive</a><br/>
Resume Web App URL :<a href="http://abincherish.imad.hasura-app.io/"target="_blank">Visit my Web App</a><br/>
<hr/>
<p>
<h4>References</h4><br>
<table width="100%">
<tr>
<td>1. Prof. Bijy Mathew <br> HOD CSE Dept. BC Caarmel <br>Mob.: 9633468413</td>
<td>2. Er. Joshy Thomas Jose <br>Asst. Prof. BC Caarmel <br>Mob.: 9447173364</td>
</tr>
</table>
</p>
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
