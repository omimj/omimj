function classRem(){
  let select = document.querySelectorAll(".select");
  select.forEach(dots =>{
    dots.classList.remove("active");
  });
}

$(window).scroll(() => {
  var scroll = $(window).scrollTop();
  var apple = $("#apple");
  var applePosition = apple.offset().top;
  var xr = $("#xr");
  var xrPosition = xr.offset().top;
  var ipad = $("#ipad");
  var ipadPosition = ipad.offset().top;
  var watch = $("#watch");
  var watchPosition = watch.offset().top;

  if(scroll >= applePosition && scroll < xrPosition){
    classRem();
    $(".select:nth-child(1)").addClass("active");
  }else if(scroll >= xrPosition && scroll < ipadPosition){
    classRem();
    $(".select:nth-child(2)").addClass("active");    
  }
  else if(scroll >= ipadPosition && scroll < watchPosition){
    classRem();
    $(".select:nth-child(3)").addClass("active");    
  }
  else if(scroll >= watchPosition){
    classRem();
    $(".select:nth-child(4)").addClass("active");    
  }
});