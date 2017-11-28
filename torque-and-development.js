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
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var m = parseInt(n_temp[1]);
        var x = parseInt(n_temp[2]);
        var y = parseInt(n_temp[3]);
        
        if(x <= y) console.log(x * n); //if libraries are cheaper than roads, just build libraries.
        else { //beyond this point, we know road access is cheaper than a library.
            var libraries = 0;
            var roads = 0;
            var nodeCount = 0;
            
            console.log("citiesVisited = " + citiesVisited + "\ncities = " + cities);
            var citiesVisited = [];
            var cities = [];
            console.log("citiesVisited = " + citiesVisited + "\ncities = " + cities);
            for(var i = 0; i < n; i++){
                citiesVisited[i] = false;
                console.log("setting citiesVisited to false");
                cities[i] = [];
            }
            console.log("citiesVisited = " + citiesVisited + "\ncities = " + cities);
            
            console.log ("a1 = " + a1 + " m = " + m);
            for(var a1 = 0; a1 < m; a1++){
                var city_1_temp = readLine().split(' ');
                var city_1 = parseInt(city_1_temp[0]);
                var city_2 = parseInt(city_1_temp[1]);
                //console.log("road connects " + city_1 + " and " + city_2);
                cities[city_2 - 1].push(city_1 - 1);
                cities[city_1 - 1].push(city_2 - 1);
            }
            
            
            //recursive function to visit all cities (aka nodes)
            function dfs(city){
                if(citiesVisited[city] === true) return;
                citiesVisited[city] = true;
                nodeCount++;
                //console.log("Visiting city " + city + " for the first time");
                for(var i = 0; i < cities[city].length; i++){
                    dfs(cities[city][i]);
                }
                
            }
            for(var j = 0; j < n; j++){
                if(citiesVisited[j] == false){
                    libraries++; //add 1 library per component
                    dfs(j); //run dfs, recursively visit all nodes on component. Count nodes in nodeCount;
                    roads += nodeCount - 1;
                    nodeCount = 0;
                    
                }
            }
            console.log(libraries * x + roads * y);
        }
   
    }

}

/*
test case
5
9 2 91 84
8 2
2 9
5 9 92 23
2 1
5 3
5 1
3 4
3 1
5 4
4 1
5 2
4 2
8 3 10 55
6 4
3 2
7 1
1 0 5 3
2 0 102 1

expected output
805
184
80
5
204
*/
