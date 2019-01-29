function takeANumber(katzDeliLine, name) {
  //adds new name to end of the line
  katzDeliLine.push(name);

  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine, name) {
//removes the first person in line
  var name = katzDeliLine.shift();

//checks if there is anyone in line
if (katzDeliLine.length > 0) {
  return `Currently serving ${name}.`
} else {
  return `There is nobody waiting to be served!`
}
}


function currentLine(line){
//checks to see if anyone is in line
   if (line.length === 0) {
     return 'The line is currently empty.';
   } else{
     let emptyArr = [];
//(establishes a counter, checks if counter is less than the length of the line,
//incriments counter)
   for (let i = 0; i < line.length; i++) {
//creates the numbered list with counter +1. who's in line[place in line]
//then pushes that string into the empty array
     emptyArr.push(`${i + 1}. ${line[i]}`);
   }
   //.join used to join all string elements together
   //set .join() to separate by a comma for the list
   return 'The line is currently: ' + emptyArr.join(', ');
   }
 }
