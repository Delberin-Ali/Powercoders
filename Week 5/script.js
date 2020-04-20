//user login
//news feed

let database = [
    {
        username:"Delberin",
        password: "alrightdude"
    },
    {
        username:"Kaan",
        password:"heydude"
    }
];

let newsfeed =[
    {
        author:"Kann",
        title :"This is Kann's title",
        summary:"This is the summary for Kann"
    },
    {
        author:"Aiman",
        title :"This is Aiman's title",
        summary:"This is the summary for Aiman"
    }, 
     {
        author:"Delberin",
        title :"This is Delberin's title",
        summary:"This is the summary for Delberin"
    }
];
//Check if user login is correct then show news feed.

let username= prompt("What is your user name?");
let password= prompt("What is your password?");

signIn(username,password);

function signIn(user, pass){
    if(isUserValid(user, pass)){
        console.log(newsfeed);
    }else {
        alert("Your details log in is  not correct, please log in again");
    }   
}

function isUserValid(usr,pw){
    for(let i=0; i < database.length; i++){
    }
    if ((usr=== database[0].username && pw === database[0].password)
    ||  (usr=== database[1].username && pw === database[1].password)){
            return true;
        }
        return false
    }