///////////////////////////////////////////////
// loop through data and append jobs to the div
///////////////////////////////////////////////
function addJobs() {
    // if there is more jobs than 20, limit the number
    var num = Math.min(dummyJobData.length, 20);

    $("#pageNav").text("1-" + num + " of " + dummyJobData.length);

    for (i = 0; i < dummyJobData.length; i++) {
        var d = dummyJobData[i];
        appendJob(d.id, d.pic_url, d.title, d.company, d.loc, d.desc, d.price_lo, d.price_hi, d.level, d.type);
    }
}

function addEducation() {
    // if there is more jobs than 20, limit the number
    var num = Math.min(dummyEduData.length, 20);

    $("#pageNav").text("1-" + num + " of " + dummyEduData.length);

    for (i = 0; i < dummyEduData.length; i++) {
        var d = dummyEduData[i];
        appendEdu(d.id, d.pic_url, d.title, d.company, d.loc, d.desc, d.tuition, d.level);
    }
}

///////////////////////////////////////////////
// function that makes a new job component and adds to the div
///////////////////////////////////////////////
function appendJob(id, pic_url, title, company, loc, desc, price_lo, price_hi, level, type) {
    // abridge the job description to the first 150 characters
    var abridged = desc.substring(0, 150);

    var checkboxId = "C" + String(id);
    // make new html component
    var subDiv = $("<div class='jobItem shadow list-inline' id=" + String(id) + "> \
        <img class='list-inline-item jobIcon align-top' src=" + pic_url + " alt='Icon'> \
        <div class='list-inline-item jobDiv'> <h4 class='gray-text bold'>" + title +
        "</h4><p class='gray-text'>" + company + "&nbsp; <span class='teal-text'>" + loc +
        "</span></p><p class='gray-text Xsmall jobDesc'>" + abridged +
        "<span class='blue-text'> more... </span></p><p class='teal-text Xsmall'>$" + String(price_lo) +
        " - $" + String(price_hi) + " • " + level + " • " + type + "</p></div><button type='button' \
        class='btn btn-outline-success list-inline-item checkbox align-top' id=" + checkboxId +">✓</button></div>")

    subDiv.click(function() {
        toggle(checkboxId);
    });

    // append to existing div
    var div = $("#results-container");
    div.append(subDiv);
}

function appendEdu(id, pic_url, title, company, loc, desc, tuition, level) {
    // abridge the job description to the first 150 characters
    var abridged = desc.substring(0, 150);

    // make new html component
    var subDiv = $("<div class='jobItem shadow list-inline' id=" + String(id) + "> \
        <img class='list-inline-item jobIcon align-top' src=" + pic_url + " alt='Icon'> \
        <div class='list-inline-item jobDiv'> <h4 class='gray-text bold'>" + title +
        "</h4><p class='gray-text'>" + company + "&nbsp; <span class='teal-text'>" + loc +
        "</span></p><p class='gray-text Xsmall jobDesc'>" + abridged +
        "<span class='blue-text'> more... </span></p><p class='teal-text Xsmall'>$" + tuition + " • " + level + "</p></div><button type='button' \
        onclick='toggle.call(this)' class='btn btn-outline-success list-inline-item checkbox align-top'>✓</button></div>")

    // append to existing div
    var div = $("#results-container");
    div.append(subDiv);
}


////////////////////////////////////////////////////////////////////////////////////
// Function to mimic toggle behavior for checkmark button; called when checkbox is clicked
////////////////////////////////////////////////////////////////////////////////////
let selectedJobs = new Set();   // stores id of user selected jobs

function toggle(checkboxId) {
    var checkbox = $("#"+checkboxId);
    var jobId = checkboxId.substring(1);

    var clicked = checkbox.css("background-color") == "rgb(144, 178, 183)";    // if it was previously clicked
    if (clicked) {      // make it clear, remove from set
        selectedJobs.delete(jobId);
        checkbox.css("background-color",'transparent');
    } else {            // color it, add to set
        selectedJobs.add(jobId);
        checkbox.css("background-color","rgb(144, 178, 183)");
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
        if (selectedJobs.size == 1)
            $("#emailTxt").text(selectedJobs.size + " opportunity in your list");
        var btnVis = selectedJobs.size == 0 ? "hidden" : "visible";
        $("#emailBtn").css("visibility", btnVis);
    }
    else {
        hideOpportunityDiv();
    }
}

function hideOpportunityDiv() {
    $("#email-container").css("visibility", "hidden");
    $("#email-container").css("position", "absolute");
    $("#email-container").css("height", "0px");
    $("#emailBtn").css("visibility", "inherit");
}

/////////////////////////////////////////////////////////
// Called to email the list of items
/////////////////////////////////////////////////////////
function showEmailForm() {
    $("#popup-container").css("visibility", "visible");
}

function sendEmail() {
    // hide popup
    $("#popup-container").css("visibility", "hidden");
    // hide opportunities div
    hideOpportunityDiv();
}





/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// TODO delete this when database comes along
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

// list of dictionaries (job item); where the queried items will be
let dummyJobData = []
let dummyEduData = []
function makeDummyData() {
    dummyJobData.push({
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

    dummyEduData.push( {
        id : 1,
        pic_url : "../images/placeholder.png",
        title : "Organic Gardening",
        company : "Emory University",
        loc : "Atlanta, GA",
        desc : "From a conservation to global health to energy markets to \
            social innovation, Emory has a student organization for every sustainable interest",
        tuition : "5000/semester",
        level : "Associate, Bachelor"
    });

    dummyJobData.push({
        id : 2,
        pic_url : "../images/placeholder.png",
        title : "Principal SDE, Sustainability",
        company : "Amazon",
        loc : "Seattle, WA",
        desc : "The Seattle Housing Authority, a nationally recognized leader blahblah",
        price_lo : 60000,
        price_hi : 55000,
        level : "Mid Level",
        type : "Part time"
    });

    dummyJobData.push({
        id : 3,
        pic_url : "../images/placeholder.png",
        title : "Business Intelligence Engineer - Sustainability",
        company : "Share Creators",
        loc : "Seattle, WA",
        desc : "At Hinge Health, our mission is to improve the lives of \
                people suffering from chronic conditions by digitizing the \
                delivery of care - starting with",
        price_lo : 70000,
        price_hi : 75000,
        level : "Entry Level",
        type : "Contract"
    });

    dummyJobData.push({
        id : 4,
        pic_url : "../images/placeholder.png",
        title : "Climate and Sustainability Writer and Analyst",
        company : "Amazon",
        loc : "Seattle, WA",
        desc : "Manages consultant scopes of work and agency stakeholder \
            processes to implement specific sustainability goals and annual sustainability targets",
        price_lo : 80000,
        price_hi : 85000,
        level : "Senior Level",
        type : "Full time"
    });
}
