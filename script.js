function Roman(input) {
  
  var romanCodes = [["","I","II","III","IV","V","VI","VII","VIII","IX"],
                    ["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
                    ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]];
  
  var number = "";
  var convert = input.toString().split('').reverse();

  for (var i=0; i < convert.length; i++){
    number = romanCodes[i][parseInt(convert[i])] + number;
  }
  return number;  
}
document.write(Roman(1023));