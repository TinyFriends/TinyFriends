//  slider

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("myslider");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  
  x[slideIndex-1].style.display = "block";  

}


// Content
var x = document.querySelectorAll('.content-right-item')
var content = document.querySelectorAll('.content-lef-member')

function slider_test(a){
  for(let i=0;i<x.length;i++){
    if(a==i){
      if(a===0){
        x[0].classList.add("active-don")
        x[1].classList.remove("active-lin")
        x[2].classList.remove("active-an")
        x[3].classList.remove("active-chom")
        content[0].classList.add("active-left")
        content[1].classList.remove("active-left")
        content[2].classList.remove("active-left")
        content[3].classList.remove("active-left")
      }
      if(a===1){
        x[1].classList.add("active-lin")
        x[0].classList.remove("active-don")
        x[2].classList.remove("active-an")
        x[3].classList.remove("active-chom")
        content[0].classList.remove("active-left")
        content[1].classList.add("active-left")
        content[2].classList.remove("active-left")
        content[3].classList.remove("active-left")
      }
      if(a===2){
        x[0].classList.remove("active-don")
        x[1].classList.remove("active-lin")
        x[2].classList.add("active-an")
        x[3].classList.remove("active-chom")
        content[0].classList.remove("active-left")
        content[1].classList.remove("active-left")
        content[2].classList.add("active-left")
        content[3].classList.remove("active-left")
      }
      if(a===3){
        x[0].classList.remove("active-don")
        x[1].classList.remove("active-lin")
        x[2].classList.remove("active-an")
        x[3].classList.add("active-chom")
        content[0].classList.remove("active-left")
        content[1].classList.remove("active-left")
        content[2].classList.remove("active-left")
        content[3].classList.add("active-left")
      }
    }
  }
}
