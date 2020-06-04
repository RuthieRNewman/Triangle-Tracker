$(document).ready(function() {
  $("form#formOne").submit(function(event){
    const sideOne = parseInt($("input#firstSide").val());
    const sideTwo = parseInt ($("input#secondSide").val());
    const sideThree = parseInt ($("input#thirdSide").val());
    const equilateral= "Equilateral";
    const isoscecles = 'Isosceles';
    const scalene = "Scalene";
    const notTriangle = "That doesn't add up to a triangle";

    if (sideOne === sideTwo && sideThree){
      $(".typeOfTriangle").text(equilateral);
    }
    else if (sideOne === sideTwo && sideOne !== sideThree ||
      sideOne === sideTwo && sideTwo !== sideThree){
        $(".typeofTriangle").text(isoscecles);
      }   
    else if (sideOne !== sideTwo !== sideThree){
        $(".typeofTriangle").text(scalene);
      }
    else if(sideOne + sideTwo <= sideThree){
        $(".typeofTriangle").text(notTriangle);
      }
      
    event.preventDefault();
  });
});