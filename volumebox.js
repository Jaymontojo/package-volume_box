exports.printMsg = function() {
  console.log("This is a message from the demo package");
}

exports.quiet = function(string) {
  if(typeof string !== "string"){
    return `Error! please use data type: string. You used a ${typeof string}`;
  } else{
    return string.toLowerCase();
  }
}

exports.loud = function(string) {
  if(typeof string !== "string"){
    return `Error! please use data type: string. You used a ${typeof string}`;
  } else{
    return string.toUpperCase();
  }
}

