//Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.

function FirstReverse(str){
  var string = "";

  for(var i = str.length-1; i>=0; i--)
    string += str[i];

  str = string;

  return str;
}

FirstReverse(str);
