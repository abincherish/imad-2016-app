
var button = document.getElementById('button');
var counter = 0;
button.onClick = function () {
    var request = new XMLHttprequest;
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML(counter.toString());
};