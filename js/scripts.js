$(document).ready(function() {
  $("form#formOne").submit(function(event){
    const sideOne = parseInt($("input#firstSide").val());
    const sideTwo = parseInt ($("input#secondSide").val());
    const sideThree = parseInt ($("input#thirdSide").val());
    let triangle; 

    if (sideOne === sideTwo && sideThree){
      let triangle = "Equilateral";
      $(".typeOfTriangle").text(triangle);
    }
    else if (sideOne === sideTwo && !== sideThree ){
        let triangle = "Isosceles"
        $(".typeofTriangle").text(triangle);
      } 
      else if (sideOne === sideThree && !== sideTwo ){
        let triangle = "Isosceles"
        $(".typeofTriangle").text(triangle);
      }
    else if (sideOne !== sideTwo !== sideThree){
        let triangle = "Scalene"
        $(".typeofTriangle").text(triangle);
      }
    else if(sideOne + sideTwo <= sideThree){
        let triangle = "This is not a triangle."
        $(".typeofTriangle").text(triangle);
      }
      
    event.preventDefault();
  });
});