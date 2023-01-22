function overlay(isShow){
    var elm = document.getElementById('overlay')
    if (isShow) {
        elm.style.display = 'block';
    } else {
        elm.style.display = 'none';
        elm.style.rotate=180;
    }
  }
  
  function openNav() {
    overlay(true);
      document.getElementById('mySidenav').style.width="250px";
  }
  
  function closeNav() {
    overlay(false);
      document.getElementById('mySidenav').style.width="0"
  }