/***********GENERAL PROFILE INFORMATION SECTION COMPONENTS *********/

//username that will appear on the profile section
const username = document.getElementById('user-name');

//organization type that will appear on the profile section
const organizationType = document.getElementById('organization-type');

//location that will appear on the profile section
const orgLocation = document.getElementById('location');

//website link that will appear on the profile section
const websiteLink = document.getElementById('website-link');

//github account that will appear on the profile section
const githubAcc = document.getElementById('github-acc');

//twitter account that will appear on the profile section
const twitterAcc = document.getElementById('twitter-acc');

//instagram account that will appear on the profile section
const instagramAcc = document.getElementById('instagram-acc');

//facebook account that will appear on the profile section
const facebookAcc = document.getElementById('facebook-acc');

/***********GENERAL PROFILE INFORMATION SECTION COMPONENTS *********/


/***********ALL PROFILE INFORMATION SECTION COMPONENTS *********/

//the full organization name that will appear on the info section in profile page
const fullOrgName = document.getElementById('full-org-name');

//the organization email address that will appear on the info section in profile page
const userMail = document.getElementById('user-mail');

//the organization phone number that will appear on the info section in profile page
const orgNo = document.getElementById('org-no');

//the organization mobile phone number that will appear on the info section in profile page
const orgMobile = document.getElementById('org-mobile');

//the organization address that will appear on the info section in profile page
const orgLoc = document.getElementById('org-loc');

//the organization account creation date that will appear on the info section in profile page
const createdAt = document.getElementById('created-at');

/***********ALL PROFILE INFORMATION SECTION COMPONENTS *********/


/***********POST CREATION SECTION COMPONENTS *********/

//the input area of event title
const eventTitle = document.getElementById('event-name');

//the input area of event tags
const eventTags = document.getElementById('event-tags');

//the selection area of event type
const eventType = document.getElementById('event-type');

//the textarea of event message
const eventMessage = document.getElementById('event-message');

//the submit button of the above information
const submitButton = document.getElementById('submit-btn');

//the post count demonstrated in the post creation section
const postCount = document.getElementById('post-count');

/***********POST CREATION SECTION COMPONENTS *********/
const currentUser = JSON.parse(localStorage.getItem("currentUser"));


window.onload = async function(){
    console.log(currentUser[0]._id);
    try {
        const res = await axios.get('/users/'+currentUser[0]._id)
        console.log(res.data);
        console.log(res.data.name);
        console.log("Event Type: " + eventTitle);
        username.innerHTML = res.data.name;
        organizationType.innerHTML = res.data.username;
        orgLocation.innerHTML = res.data.location;
        fullOrgName.innerHTML = res.data.name;
        userMail.innerHTML = res.data.email;
        orgNo.innerHTML = "Not Yet";
        orgMobile.innerHTML = "Not Yet";
        orgLoc.innerHTML = res.data.location;
        createdAt.innerHTML = res.data.createdAt;
        postCount.innerHTML = res.data.postCount;

    }
    catch (error) {
        console.error(error)
    }
}

submitButton.addEventListener("click", async () => {
    console.log("Event Title: " + eventTitle.value + "\nEvent Tags: " + eventTags.value + "\nEvent Type: " + eventType.value + "\nEvent Message: " + eventMessage.value);
    
});