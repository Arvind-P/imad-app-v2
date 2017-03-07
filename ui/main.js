console.log('Loaded!');

alert('Click on the image and it will move gradually');
//move the image using javascript
var img = document.getElementById('imgmadi');
var marginleft = 0;

var lastaccessedtime = localStorage.getItem('LastLocalTime');
var currentaccessedtime;
var d = new Date();
var dt,mnth,yr,hrs,mns,sec;
dt = d.getDate();
mnth = d.getMonth();
mnth = mnth + 1;
yr = d.getFullYear();
hrs = d.getHours();
mns = d.getMinutes();
sec = d.getSeconds();
currentaccessedtime = dt + '/' + mnth + '/' + yr + ' ' + hrs + ':' + mns + ':' + sec;
localStorage.setItem('LastLocalTime',currentaccessedtime);

var lasttimetext = document.getElementById('lasttime');
lasttimetext.innerHTML = 'Last Accessed Time : ' + lastaccessedtime;

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