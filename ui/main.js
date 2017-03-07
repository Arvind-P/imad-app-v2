console.log('Loaded!');

//move the image using javascript
var img = document.getElementById('imgmadi');
var marginleft = 0;
function marginRight()
{
    marginleft = marginleft + 3;
    img.style.marginLeft = marginleft + 'px';
}

img.onclick = function()
{
    var interval = setInterval(marginRight,50);        
    //the marginRight function will be called every 50ms and the image is gradually moved
    //img.style.marginLeft = '100px';
}