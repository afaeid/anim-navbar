var header = document.querySelector('.header');
var up = document.querySelector('.content');
window.onscroll = ()=> {
  header.classList.toggle('new', window.scrollY > 20);
  if (window.scrollY > 20) {
    up.style.marginTop = '90px';
  }
  else{
    up.style.marginTop = '20px';
  }
}
