var BigNumber = require('bignumber.js');
BigNumber.config({ EXPONENTIAL_AT: 1e+9,POW_PRECISION: 0 });

process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    input = input.split(" ");
    var n = Number(input[2]);
    var sequence = [new BigNumber(Number(input[0])), new BigNumber(Number(input[1]))];
    for(var i = 2; i < n; i++){
      sequence.push(sequence[i-2].plus(sequence[i-1].toPower(2)));
    }
    console.log(sequence[sequence.length - 1].toString());
});