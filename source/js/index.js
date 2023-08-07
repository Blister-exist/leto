let img = document.getElementById('parallax__image');
let screenWidth = window.screen.width;

if (screenWidth > 1200)
{
    img.src ="./source/img/right.jpg";
}
if ((screenWidth <= 1200) && (screenWidth > 768))
{
    img.src ="./source/img/right1200.jpg";
}
if ((screenWidth <= 768) && (screenWidth > 500))
{
    img.src ="./source/img/right1024.jpg";
}
if (screenWidth <= 500)
{
    img.src ="./source/img/right390.jpg";
}