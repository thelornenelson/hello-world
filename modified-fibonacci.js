process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    input = input.split(" ");
    var n = Number(input[2]);
    var sequence = [[Number(input[0])], [Number(input[1])]];
    
    for(var i = 2; i < n; i++){
      sequence.push(add(square(sequence[i-1]), sequence[i-2]));
    }
    
    arrOutput(sequence[sequence.length - 1]);
   
    
});

function arrOutput(arr){
  var output = "";
  for(var i = 0; i < arr.length; i++){
    output += arr[i];
  }
  console.log(output);
  
}
function add(arr1, arr2){
  
  
  //assume arr1.length > arr2.length
  while(arr1.length > arr2.length){ //pad 0's
    arr2.unshift(0);
  }
  for(var i = arr1.length - 1; i >= 0; i--){
    arr2[i] += arr1[i]; //perform addition, store result in arr2
    if(arr2[i] > 9){ //check if carry is required
      if(i > 0){
        arr1[i - 1]++; //add carry to next column in arr1
        arr2[i] -= 10; //remove value of carry
      }
      else {
        arr2.unshift(1);
        arr2[1] -= 10;
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
  for(var i = arr1.length - 1; i >= 0; i--){
    
    temp = [].concat(zeros);
    
    for(var j = arr1.length - 1; j >=0; j--){
      
      temp.unshift(arr1[j] * arr1[i] + carry);
      carry = 0;
      if(temp[0] > 9){
        carry = (temp[0] - temp[0] % 10) / 10;
        temp[0] = temp[0] % 10;
        if(j == 0){
          temp.unshift(carry);
          carry = 0;
        }
      }
      
    }
    if(i == arr1.length){//don't bother adding for the first round
      result = temp;
    }
    else {
      result = add(temp, result);
    }
    
    
    zeros.unshift(0);
    
  }
  return result;
  
}
