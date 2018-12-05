// Едноставно не работи надвор од HTML file

function factorial(number)
{
var value = number;
for ( var i = number; i > 1; i-- )
value *= i - 1;
return value;
  };
  function combination(n, r){
  if ( n == r) return 1;
  return factorial(n) / (factorial(r) * factorial(n - r));
  };

  document.getElementById('calculate').onclick = function(){
  var n = parseFloat(document.getElementById('n').value),
      r = parseFloat(document.getElementById('r').value);
  if ( n && r ){
      document.getElementById("result").innerHTML = combination(n,r);
  }
  };