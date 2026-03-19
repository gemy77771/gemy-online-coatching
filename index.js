/*<h1 class="Gemy">
   <span> Gemy</span>
    <br> Online
    <br> <span class="Coaching">Coaching </span>
</h1>
<h1 class="goc">
Goc

</h1>

</br>
      <h1 class="welcom">
            Welcom In Gemy Online Coaching


        </h1>
*/
const slider = document.getElementById('slider');
const headerHeight = document.querySelector('.header').offsetHeight;

window.addEventListener('scroll', () => {
  if (window.scrollY >= headerHeight) {
    slider.style.position = 'absolute'; // تبطل fixed
    slider.style.top = headerHeight + 'px';
  } else {
    slider.style.position = 'fixed'; // تفضل ثابتة
    slider.style.top = '0';
  }
});