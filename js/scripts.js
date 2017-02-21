$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());
    console.log(number1);
    console.log(number2);
    if (number1 >= number2){
      for (var index = number2; index <= number1; index += number2){
        console.log(index);
      };
    }else if (number1 < number2){
      for (var index = number1; index <= number2; index += number1)
      console.log(index);
    } else {
      alert("You must enter two numbers!")
    }
  });
});
