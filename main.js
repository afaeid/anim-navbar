var header = document.querySelector('.header');
var cont = document.querySelector('.content');
window.onscroll = ()=> {
  header.classList.toggle('new', window.scrollY > 20);
  if (window.scrollY > 20) {
    cont.style.marginTop = '90px';
  }
  else{
    cont.style.marginTop = '20px';
  }
}
