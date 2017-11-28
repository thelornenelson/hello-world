process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var n = parseInt(readLine());
        var M = [];
        for(M_i = 0; M_i < n; M_i++){
           M[M_i] = readLine().split(' ');
           M[M_i] = M[M_i].map(Number);
        }
        
        var contCounts = [];
        var typeCounts = [];
        
      console.log(contCounts);
      console.log(contCounts);
        for(var c = 0; c < n; c++){
          for(var t = 0; t < n; t++){
              contCounts[c] || (contCounts[c] = 0);
              typeCounts[c] || (typeCounts[c] = 0);
              contCounts[c] += Number(M[c][t]);
              typeCounts[t] += Number(M[c][t]);
          }
        }
       //we now have 2 arrays, one listings the available container sizes and one listing available type counts.
       //these must match for us to be able to satisfy the swapping goal. 
      contCount.sort(function(a, b){return a-b});
      typeCounts.sort(function(a, b){return a-b});
        console.log("contCounts: " + contCounts + "\ntypeCounts: " + typeCounts);
      
    }
      
      
      
      
        
    

}
