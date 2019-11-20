
window.addEventListener("scroll", function(){

  let wrap = document.getElementById('timeline');
  let contentHeight = wrap.offsetHeight;
  let yOffset = window.pageYOffset;
  let y = yOffset + window.innerHeight;

  if (y >= contentHeight) {
     //load new content
     wrap.innerHTML = wrap.innerHTML + "<div class='timeline'><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, ipsa laborum! Aut doloremque, aspernatur, similique dolorem soluta quis sapiente dignissimos tenetur fuga cum, blanditiis a commodi totam itaque praesentium. Soluta?</p></div>";
  }
});