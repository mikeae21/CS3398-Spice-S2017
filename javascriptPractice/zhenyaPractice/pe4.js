// Written by Zhenya Hanson
// My code will go here.

/*
console.log('ika');

console.log('Hello World!\n\n');
console.log('Hello World'.substr(-4,3));
console.log(isPal(10001,true));
console.log(isPal(9119,true));
console.log(isPal(11001,true));
console.log(isPal(9109,true));
console.log(isPal(91099019,true));
*/

findPal();

function isPal(candidate, message = false)
{
  var str = candidate.toString();
  if (message)
  {
    console.log(candidate+' is a palindromic number:');
  }
  //return reverseString(str.substr(0,Math.floor(str.length / 2))) == str.substr(-Math.floor(str.length / 2));
  return str == reverseString(str);
}

function reverseString(str)
{
  return str.split("").reverse().join("");
}

function findPal(n = 3)
{
  candidate = 0;
  candidatei= 0;
  candidatej= 0;
  limit = '1';
  for (var i = 0; i < n; i++)
  {
    limit += '0';
  }
  for (var i = parseInt(limit,10) - 1; i > -1 ; i--)
  {
    for (var j = parseInt(limit,10) - 1; j > -1; j--)
    {
      if (i * j > candidate)
      {
        if (isPal(i * j))
        {
          candidate = i*j;
          candidatei = i;
          candidatej = j;
        }
      }
    }
  }
  console.log("The greatest palindromic number formed from two " + n + "digit numbers multiplied together is:");
  console.log(candidate);
  console.log("The numbers which multiply to get this palindromic number are: " + candidatej);
  console.log("and: " + candidatei);
}
