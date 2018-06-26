$(document).ready(function() {
    console.log("I'M READY!!!");
});


let jobId = new Set();

let dummyData = []
let data = {}

// function that makes a new job component and adds to the div
function append(id, pic_url, username, at, tweet) {
    // check for duplicates
    if (jobId.has(id)) return;
    else jobId.add(id);

    // append tweet
    var ul = $("#tweets");
    var li = $("<li class='tweet' id=" + String(id) + "></li>");
    li.html("<img class='pp' src=" + pic_url + "></img><b>" + username +
        "</b> <span class='at'> @" + at + "</span><br>" + tweet);
    ul.prepend(li);
}
