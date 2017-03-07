console.log('Loaded!');

//move the image using javascript
var img = document.getElementById('imgmadi');
var marginleft = 0;
function marginRight()
{
    marginleft = marginleft + 10;
    img.style.marginLeft = marginleft + 'px';
}

img.onclick = function()
{
    var interval = setInterval(marginRight,100);
    //img.style.marginLeft = '100px';
}