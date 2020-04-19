var number = 0;
function takeANumber(line) {
  number = number + 1;
  line.push(number);
  return  `You are number ${number} in line.`;
}
function nowServing(line) {
  if (line.length !== 0) {
    return "Currently serving " + line.shift () + ".";
    }else if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
}
function currentLine(line) {
  if (line.length === 0){
    return "The line is currently empty."
  }
  var linePeople = 'The line is currently: ';
  for (let i = 0; i < line.length; i++) {
    if (line.length - 1 == i) {
      linePeople += ((i+1) + ". " + line [i]);
    } 
    else {
      linePeople += ((i+1) + ". " + line[i] + ", ");
      }
  }
 return linePeople;
}