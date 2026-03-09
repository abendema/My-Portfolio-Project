function toggleElement(id, icon){
  const element = document.getElementById(id);
  element.classList.toggle('active');

  // toggle hamburger/X icon
  if(icon.classList.contains('fa-bars')){
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark');
  } else{
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  }

}