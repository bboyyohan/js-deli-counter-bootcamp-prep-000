var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
  var nowServing = katzDeliLine[0];
    katzDeliLine.shift();
  return `Currently serving ${nowServing}.`
  } else {
    return `The line is currently empty.`
  }
}