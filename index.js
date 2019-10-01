var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var nowServing = katzDeliLine[0]
    katzDeliLine.shift();
    return `Currently serving ${nowServing}.`
  } else {
    return `There is nobody waiting to be served!`
  }
}
var array = [];
function currentLine(katzDeliLine) {
  let i = 0;
  while (i < katzDeliLine.length) {
    katzDeliLine.push(` ${i+1}. ${katzDeliLine.length[i]}`)
    i++;
  }
  if (katzDeliLine === 0) {
    return `The line is currently empty.`
  } else 
    return `The line currently:` + array;
}