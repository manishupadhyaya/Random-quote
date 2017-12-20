var myHeaders = new Headers();
var message1="Yahoo!";
var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

fetch('https://gist.githubusercontent.com/dmakk767/9375ff01aff76f1788aead1df9a66338/raw/491f8c2e91b7d3b8f1c8230e32d9c9bc1a1adfa6/Quotes.json%2520', myInit)
.then(response=>response.json())
.then(data => {
    // Your data is available to be used as "data" variable
    
var randomize = Math.floor(Math.random() * data.length);
console.log(randomize);
console.log(data);
var quote=data[randomize];
console.log(quote);
document.getElementById("quote").innerHTML=quote.quote;
document.getElementById("hello").innerHTML=quote.name;
document.getElementById("yo").onclick=()=>{
    var newrandomize= Math.floor(Math.random() * data.length);
    var newquote=data[newrandomize];
    document.getElementById("quote").innerHTML=newquote.quote;
    document.getElementById("hello").innerHTML=newquote.name;
    document.getElementById("lol").onclick=()=>{
        fetch("https://api.twitter.com/1.1/statuses/update.json?status="+message1 ,
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({a: 1, b: 2})
        })
        .then(response=>response.json())
        .then(data => {
            console.log(data);
        }
    }
}
})
