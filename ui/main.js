var spanelement = document.getElementById('updcounter');
var buttonelement = document.getElementById('buttonclickme');

// buttonelement.onclick = function() {
//     //this updates the counter locally. once the index.html is closed and reopened, the counting restarts
//     counter = counter + 1;
//     spanelement.innerHTML = counter.toString();
// };

buttonelement.onclick = function() {
    //create a request to the '/ui/updatebuttonclickcounter' in the server.js file
    //this increments a counter
    //get that counter and push it to the spanelement
    
    //Create a new httpRequest
    var request = new XMLHttpRequest();
    
    //Make the request
    request.open('GET', 'http://arvind-p.imad.hasura-app.io/ui/updatebuttonclickcounter', true);
    request.send(null);
    
    request.onreadystatechange = function() {
        if(request.readystate === XMLHttpRequest.Done) {
            if(request.status === 200)
            {
                //If the request has been completed and is success, then read the counter value returned by the request
                var counter = request.responseText;
                spanelement.innerHTML = counter.toString();
            }
        }
    };
    
    
};