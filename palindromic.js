function palindromeNumberGenerator(value){
  var number = value;
  var reversedValue = function(){
    value = value + "";
    return value.split("").reverse().join("");
  };

  var checkerReversed = function(){
    var reversed = reversedValue();
    reversed = reversedValue() + "";
    return reversed.split("").reverse().join("");
  };

  console.log(reversedValue());
  console.log(checkerReversed());


}

console.log(palindromeNumberGenerator(45));

//check if number = reversed
//  object.value = number;
//  object.steps = steps;
//  return object;
//else
//  value = value + reversed
//step++