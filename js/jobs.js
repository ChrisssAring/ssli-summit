$(document).ready(function() {
});

// loop through data and append jobs to the div
function addJobs() {
    makeDummyData();
    for (i = 0; i < dummyData.length; i++) {
        var d = dummyData[i];
        appendJob(d.id, d.pic_url, d.title, d.company, d.loc, d.desc, d.price_lo, d.price_hi, d.level, d.type);
    }
}

// function addEducation() {
//     for (i = 0; i < dummyData.length; i++) {
//         var d = dummyData[i];
//         append(d.id, d.pic_url, d.title, d.company, d.loc, d.desc, d.price_lo, d.price_hi, d.level, d.type);
//     }
// }

// list of dictionaries (job item); where the queried items will be
let dummyData = []
function makeDummyData() {
    dummyData.push({
        id : 0,
        pic_url : "../images/placeholder.png",
        title : "Sustainability Research Analyst",
        company : "Share Creators",
        loc : "Seattle, WA",
        desc : "Manages consultant scopes of work and agency stakeholder \
            processes to implement specific sustainability goals and annual sustainability targets",
        price_lo : 40000,
        price_hi : 50000,
        level : "Entry Level",
        type : "Full time"
    });
}


// function that makes a new job component and adds to the div
function appendJob(id, pic_url, title, company, loc, desc, price_lo, price_hi, level, type) {
    // abridge the job description to the first 150 characters
    var abridged = desc.substring(0, 150);

    // append job
    var div = $("#results-container");

    var subDiv = $("<div class='jobItem shadow list-inline' id=" + String(id) + "> \
        <img class='list-inline-item jobIcon align-top' src=" + pic_url + "alt='Icon'> \
        <div class='list-inline-item jobDiv'> <h4 class='gray-text bold'>" + title +
        "</h4><p class='gray-text'>" + company + "&nbsp; <span class='teal-text'>" + loc +
        "</span></p><p class='gray-text Xsmall jobDesc'>" + abridged +
        "<span class='blue-text'> more... </span></p><p class='teal-text Xsmall'>$" + String(price_lo) +
        " - $" + String(price_hi) + " • " + level + " • " + type + "</p></div><button type='button' \
        onclick='toggle.call(this)' class='btn btn-outline-success list-inline-item checkbox align-top'>✓</button></div>")

    div.append(subDiv);
}




let selectedJobs = new Set();
var toggle = function() {
    // var id = // get id of job
    var clicked = this.style.background == "rgb(144, 178, 183)";    // if it was previously clicked
    if (clicked) {      // make it clear, remove from set
        // selectedJobs.delete(id);
        this.style.background = 'transparent';
    } else {            // color it, add to set
        // selectedJobs.add(id);
        this.style.background = "rgb(144, 178, 183)";
    }
}
