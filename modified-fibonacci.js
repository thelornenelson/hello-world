//this was written for a hackerrank.com challenge but the DIY big number implementation proved too slow for a few test cases (2 2 20 in particular)
//Code is fully functional, just not quite fast enough. Modified for use without stdin.
/*
process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    input = input.split(" "); */
    input = [0,1,10];
    var n = Number(input[2]);
    var sequence = [[Number(input[0])], [Number(input[1])]];
    //each item is sequence is a array of digits, in reverse order
    for(var i = 2; i < n; i++){
      sequence.push(add(square(sequence[i-1]), sequence[i-2]));
    }

    arrOutput(sequence[sequence.length - 1]);




//});

function arrOutput(arr){
  var output = "";
  for(var i = arr.length - 1; i >= 0; i--){
    output += arr[i];
  }
  console.log(output);

}
function add(arr1, arr2){


  //assume arr1.length > arr2.length
  while(arr1.length > arr2.length){ //pad 0's
    arr2.push(0);
  }
  for(var i = 0; i < arr1.length; i++){
    arr2[i] += arr1[i]; //perform addition, store result in arr2
    if(arr2[i] > 9){ //check if carry is required
      if(i < (arr1.length - 1)){
        arr1[i + 1]++; //add carry to next column in arr1
        arr2[i] -= 10; //remove value of carry
      }
      else {
        arr2[arr2.length - 1] -= 10;
        arr2.push(1);
      }
    }
  }

  return arr2;
}

function square(arr1){
  var result = [];
  var temp = [];
  var zeros = [];
  var carry = 0;
  for(var i = 0; i < arr1.length; i++){

    temp = [].concat(zeros);

    for(var j = 0; j < arr1.length; j++){

      temp.push(arr1[j] * arr1[i] + carry);
      carry = 0;
      if(temp[temp.length - 1] > 9){
        carry = (temp[temp.length - 1] - temp[temp.length - 1] % 10) / 10;
        temp[temp.length - 1] = temp[temp.length -1] % 10;
        if(j == (arr1.length - 1)){
          temp.push(carry);
          carry = 0;
        }
      }

    }
    if(i == 0){//don't bother adding for the first round
      result = temp;
    }
    else {
      result = add(temp, result);
    }


    zeros.push(0);

  }
  return result;

}
