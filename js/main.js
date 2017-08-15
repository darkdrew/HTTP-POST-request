//GET method

//can be used for xml or json
var http = new XMLHttpRequest();
var url = "https://jsonplaceholder.typicode.com/posts";
var method = "POST";

//need to convert the json object to string to send
var db = JSON.stringify({name:"Andrew", message:"Say what? I friggin dare you!"});

//open the request
//1st argument is request method, 2nd arugment is the URL
http.open(method, url);
//1st argument is content type, 2nd argument is the actual type
http.setRequestHeader("Content-Type","application/json");

//when we make a request, and if the state changes, then do something
http.onreadystatechange = function() {
    //check whether the state is done
    //For POST state is 201 ok || for GET state 200 ok
    if(http.readyState === XMLHttpRequest.DONE && http.status === 201) {
        //convert the response to Json by using JSON.parse
        console.log(JSON.parse(http.response));
    } else if(http.readyState === XMLHttpRequest.DONE && http.status !== 201){
        console.log("bad request");
    }
}

//send the request
//post the database
http.send(db);
