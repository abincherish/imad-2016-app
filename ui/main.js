
var button = document.getElementById('button');
button.onClick = function () {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readystate == XMLHttpRequest.DONE) {
            if (request.status == 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML(counter.toString());
            }
        }
    };
    request.open('GET','http://abincherish.imad.hasura-app.io/counter',true);
    request.send(null);
};