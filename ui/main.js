var counter = 0;
var spanelement = document.getElementById('updcounter');
var buttonelement = document.getElementById('buttonclickme');

buttonelement.onclick = function() {
    counter = counter + 1;
    spanelement.innerHTML = counter.toString();
};
