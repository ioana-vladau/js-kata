"use strict";

document.addEventListener("DOMContentLoaded", ()=>{
    let i=10;
    getData(`http://kea-alt-del.dk/twitter/api/?count=${i}`);

    function getTweetsByHashtag(){
        let hashtag = document.getElementById("hashtag").value;
        console.log(`hashtag is: ${hashtag}`);
        getData(`http://kea-alt-del.dk/twitter/api/?hashtag=${hashtag}`);
    }

    document.getElementById("hashtag-button").addEventListener("click", ()=>{
        getTweetsByHashtag();
    });

    document.getElementById("hashtag-button").addEventListener("keyup", (e)=>{
        if (e.keyCode === 13){
            console.log("ENTER pressed, get tweets by hashtag")
            getTweetsByHashtag();
        }
    });

    document.querySelector(".load-more-button").addEventListener("click", ()=>{
        console.log("LOAD MORE clicked");
        i+=10;
        getData(`http://kea-alt-del.dk/twitter/api/?count=${i}`);
    });
    
});

function getData(link){
    const hashtag="tinyhouse";
    fetch(link)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            //Displays an interactive listing of the properties of a specified JavaScript object
            // console.dir(data);
            show(data, hashtag);
        });
}

function show(tweets, hashtag){
  const tweetTemplate = document.querySelector('.tweetTemplate').content;

   tweets.statuses.forEach(e=>{
        let clone = tweetTemplate.cloneNode(true);
        clone.querySelector(".name").textContent = e.user.name;
        clone.querySelector(".username").textContent = `@${e.user.screen_name}`;
        clone.querySelector(".time").textContent = e.created_at.split("+")[0];
        clone.querySelector(".text").textContent = e.text;
        

        e.entities.hashtags.forEach(e=>{
           if(e.text.includes(hashtag)){
               console.log("it includes hashtag")
           }
           document.getElementById("tweets").appendChild(clone);    

       });


   })

}



