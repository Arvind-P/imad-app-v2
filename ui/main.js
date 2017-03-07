console.log('Loaded!');

alert('Click on the image and it will move gradually');
//move the image using javascript
var img = document.getElementById('imgmadi');
var marginleft = 0;

var timesrefreshed = localStorage.getItem('RefreshCount');
timesrefreshed += 1;
localStorage.setItem('RefreshCount',timesrefreshed);

var lastaccessedtimetext = '';

var lasttime = document.getElementById('lasttime');
lastaccessedtimetext = 'Last Access Time : ' + timesrefreshed;
lastaccessedtimetext = lastaccessedtimetext + '<br>';
lastaccessedtimetext = lastaccessedtimetext + 'Local with respect to the current browser and device';
lasttime.textContent = lastaccessedtimetext;

function marginRight()
{
    if(marginleft < 500)
    {
        marginleft = marginleft + 3;
        img.style.marginLeft = marginleft + 'px';
    }
    else
    {
        alert('Image movement restarting');
        marginleft = 0;
    }
}

img.onclick = function()
{
    // var changedheading = document.querySelector('h1');
    var changedheading = document.getElementById('maincontent');
    changedheading.textContent = 'This is a new content that is dynamically prompted by the main.js file';
    
    var interval = setInterval(marginRight,50);        
    //the marginRight function will be called every 50ms and the image is gradually moved
    //img.style.marginLeft = '100px';
}