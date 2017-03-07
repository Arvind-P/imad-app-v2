console.log('Loaded!');

var changedheading = document.querySelector('h1');
// var changedheading = document.getElementById('mainheading');
changedheading.textContent = 'This is a new content that is popped by the main.js file';

alert('Click on the image and it will move gradually');
//move the image using javascript
var img = document.getElementById('imgmadi');
var marginleft = 0;
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
    var interval = setInterval(marginRight,50);        
    //the marginRight function will be called every 50ms and the image is gradually moved
    //img.style.marginLeft = '100px';
}