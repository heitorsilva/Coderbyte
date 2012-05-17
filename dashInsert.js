// Have the function DashInsert(num) insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as a negative number.

function DashInsert(num){
  tmp = num.toString();
  result = '';

  for(var i=0; i < tmp.length; i++){
    if( parseInt(tmp[i]) % 2 == 1 && parseInt(tmp[i+1]) % 2 == 1 )
      result += tmp[i] + '-';
    else
      result += tmp[i];
  }

  return result;
}

DashInsert(num);
