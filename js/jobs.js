$(document).ready(function() {
    // addJobs();
});

var total = 250;                            // TODO change this value later to reflect size of database

///////////////////////////////////////////////
// loop through data and append jobs to the div
///////////////////////////////////////////////
function addJobs() {
    // makeDummyData();

    // if there is more jobs than 20, limit the number
    var num = Math.min(dummyData.length, 20);

    $("#pageNav").text("1-" + num + " of " + total);

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

///////////////////////////////////////////////
// function that makes a new job component and adds to the div
///////////////////////////////////////////////
function appendJob(id, pic_url, title, company, loc, desc, price_lo, price_hi, level, type) {
    // abridge the job description to the first 150 characters
    var abridged = desc.substring(0, 150);

    var checkboxID = "C" + String(id); // unique ID for the checkbox; used later to get the job ID

    // make new html component
    var subDiv = $("<div class='jobItem shadow list-inline' id=" + String(id) + "> \
        <img class='list-inline-item jobIcon align-top' src=" + pic_url + "alt='Icon'> \
        <div class='list-inline-item jobDiv'> <h4 class='gray-text bold'>" + title +
        "</h4><p class='gray-text'>" + company + "&nbsp; <span class='teal-text'>" + loc +
        "</span></p><p class='gray-text Xsmall jobDesc'>" + abridged +
        "<span class='blue-text'> more... </span></p><p class='teal-text Xsmall'>$" + String(price_lo) +
        " - $" + String(price_hi) + " • " + level + " • " + type + "</p></div><button type='button' \
        onclick='toggle.call(this)' class='btn btn-outline-success list-inline-item checkbox align-top'>✓</button></div>")

    // append to existing div
    var div = $("#results-container");
    div.append(subDiv);
}


////////////////////////////////////////////////////////////////////////////////////
// Function to mimic toggle behavior for checkmark button; called when checkbox is clicked
////////////////////////////////////////////////////////////////////////////////////
let selectedJobs = new Set();   // stores id of user selected jobs
var toggle = function() {
    // get id of associated job; substring strips the "C" appended to it
    // var id = this.attr("id").substring(1);

    var clicked = this.style.background == "rgb(144, 178, 183)";    // if it was previously clicked
    if (clicked) {      // make it clear, remove from set
        // selectedJobs.delete(id);
        this.style.background = 'transparent';
    } else {            // color it, add to set
        // selectedJobs.add(id);
        this.style.background = "rgb(144, 178, 183)";
    }
}

/////////////////////////////////////////////////////////
// Called when folder icon is clicked
/////////////////////////////////////////////////////////
function folderOnClick() {
    var shouldShow = $("#email-container").css("visibility") == "hidden";
    if (shouldShow) {
        $("#email-container").css("visibility", "visible");
        $("#email-container").css("position", "relative");
        $("#email-container").css("height", "50px");

        $("#emailTxt").text(selectedJobs.size + " opportunities in your list");
        var btnVis = selectedJobs.size == 0 ? "hidden" : "visible";
        // $("#emailBtn").css("visibility", btnVis);
    }
    else {
        $("#email-container").css("visibility", "hidden");
        $("#email-container").css("position", "absolute");
        $("#email-container").css("height", "0px");
    }
}

/////////////////////////////////////////////////////////
// Called to email the list of items
/////////////////////////////////////////////////////////
function showEmailForm() {
    $("#popup-container").css("visibility", "visible");
}

function sendEmail() {
    $("#popup-container").css("visibility", "hidden");
    $("#email-container").css("visibility", "hidden");
    $("#email-container").css("position", "absolute");
    $("#email-container").css("height", "0px");
}
