



const sports="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=9845c192f67842b89c2864278e0be890";
window.fetch(sports).then(data=>{
    data.json().then(sportsnwes=>
        {  
            console.log(sportsnwes);
            var sportsData=sportsnwes.articles;
            let op="";
            for(let s of sportsData){
                op+=`
                <h2>${s.title}</h2>
                <p>${s.description}</p>
                <img src="${s.urlToImage}"/>
                <p>${s.publishedAt}</p>`;
            }
           document.getElementById("left").innerHTML=op;
        }).catch(err=>console.log(err));
}).catch(err=>console.log(err));
//time
setInterval(()=>{
var time=new Date().toLocaleTimeString();
document.getElementById("time").innerHTML=time;
},1000);
////
const enter="https://newsapi.org/v2/top-headlines?country=us&apiKey=9845c192f67842b89c2864278e0be890";
window.fetch(enter).then(data=>{
data.json().then(enterNwes=>{
    console.log(enterNwes);
    var enterData=enterNwes.articles;
    let otp="";
    for(let e of enterData){
 otp+=`<h2>${e.title}</h2>
 <p>${e.description}</p>
 <img src="${e.urlToImage}"/>
 <p>${e.publishedAt}</p>`;
    }
    document.getElementById("center").innerHTML=otp;
}).catch(err=>console.log(err));

}).catch(err=>console.log(err));



///////////////////
const health="https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=9845c192f67842b89c2864278e0be890";
window.fetch(health).then(data=>{
    data.json().then(healthNwes=>{
console.log(healthNwes);
var healthData=healthNwes.articles;
var output="";
for(let h of healthData){
    output+=`<h2>${h.title}</h2>
    <p>${h.description}</p>
    <img src="${h.urlToImage}"/>
    <p>${h.publishedAt}</p>`;
}
document.getElementById("right").innerHTML=output
    }).catch(err=>console.log(err));
})
.catch(err=>console.log(err));