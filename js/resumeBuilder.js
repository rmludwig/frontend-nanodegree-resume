/* inport name to page */
//$("#main").append("Richard Ludwig");

/* Test code for console */
//var awesomeThoughts = "I am Rich and I am awesome!";
//console.log(awesomeThoughts);

/* test string replace*/
//var funThoughts = awesomeThoughts.replace("awesome", "fun");
//console.log(funThoughts);

/*Add header data*/
//var formattedName = HTMLheaderName.replace("%data%", "Rich Ludwig");
//var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer and Automation Specialist");
//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);

/* String replace */
//var testStr = "audacity";
//console.log(testStr);
//var newStr = testStr.slice(2);
//console.log("Changed to U" + newStr);

/* Array testing */
//var testArray = ["doe", "rey", "mi", "fa", "so", "la", "ti"]
//console.log("length is " + testArray.length);

/* My Skilz */
//var skills = ["Web Development", "Programming", "Automation", "Leadership"];
//$("#main").append(skills.length);

/* a ME object */
//var bio = {
//    "name"        : "Rich Ludwig",
//    "age"         : 41,
//    "height"      : "6ft 3 inches",
//    "experience"  : "20 years",
//    "role"        : "Developer",
//    "contactInfo" : "developer@rmlsn.net",
//    "pictureURL"  : "images/RichPassport.jpg",
//    "welcomeMsg"  : "Welcome to my test page",
//    "skills"      : skills
//};

//$("#main").append("<h3>" + bio.welcomeMsg + "</h3>");
//$("#main").append("<p>NAME : " + bio.name + "</p>");
//$("#main").append("<p>ROLE : " + bio.role + "</p>");
//$("#main").append("<p>MAIL : " + bio.contactInfo + "</p>");
//$("#main").append("<img src=\"" + bio.pictureURL + "\" >");

/* Create a dot notation object for work */
//var work = {};
//work.position    = "Developer";
//work.employer    = "AT&T";
//work.yearsWorked = "18 years";
//work.city        = "Bridgeton, MO";
//$("#main").append("<p>Most recent position is " + work["position"] + "</p>");

/* Create a bracket notation object for education */
//var education = {};
//education["school"] = "Udacity";
//education["year"]   = "2014";
//education["city"]   = "Global Online";
//$("#main").append("<p>Most recent school is " + education.school + "</p>");

/* new JSON type education object */
// NOTE: This will overwrite the previous object

//This line is not needed as the var was instantiated above.
//var education = {};
//
//education = {
//    "schools" : [
//    {
//        "name"   : "Misouri Tech",
//        "city"   : "St. Louis, MO",
//        "degree" : "Associates",
//        "graduationYear" : "1999",
//        "major"  : "Electrical Engineering"
//    },
//    {
//        "name"   : "Misouri Tech",
//        "city"   : "St. Louis, MO",
//        "degree" : "BS",
//        "graduationYear" : "2001",
//        "major"  : "Software Engineering"        
//    },
//    {
//        "name"   : "UMSL",
//        "city"   : "St. Louis, MO",
//        "degree" : "Certificate of the Microcomputer",
//        "graduationYear" : "2004",
//        "major"  : ["UNIX Administration",
//                    "Shell Scripting"]     
//    }
//    ],
//    "onlineCourses" : [
//    {
//        "name"   : "Udacity",
//        "city"   : "Global Online",
//        "degree" : "Nanodegree",
//        "graduationYear" : "ongoing",
//        "major"  : "Front End Web Developer"  
//    }
//    ]
//};


/* REAL DATA */
// Note: All data above was for testing and lesson
//       work. All data below is for continued work.

/* bio JSON */
/*
bio contains a name, role, welcomeMessage, contacts object and 
skills array. The contacts object should contain (but doesn't 
have to) a mobile number, email address, github username, 
twitter handle and location.
*/
var bio = {
    "name": "Rich Ludwig",
    "role": "Web Developer and Automation Specialist",
    "welcomeMessage": "Welcome to my interactive portfolio.",
    "contacts": {
        "email": "developer@rmlsn.net",
        "github": "rmludwig",
        "location": "Saint Charles, MO",
        "domain": "rmlsn.net"
        },
    "skills": [
        "Web Development", 
        "Programming", 
        "Automation", 
        "Leadership"
        ],
    "bioPic": "images/RichPassport.png"
};


/* work JSON */
/*
work contains an array of jobs. Each job object in jobs should 
contain an employer, title, location, dates worked and 
description.
*/
var work = {
    "jobs" : [
    {
        "employer": "AT&T",
        "title": "Operations, Manager, Programmer",
        "location": "Bridgeton, MO 63044",
        "dates": 2015,
        "description": "Network operations tooling and automation development."
    },
    {
        "employer": "CMS Communications",
        "title": "Bench Tech",
        "location": "Chesterfield, MO",
        "dates": 1995,
        "description": "Troubleshooting and component level repaired on PBX enterprise phone systems and equipment."
    }
    ]
};


/* projects JSON */
/*
projects contains an array of projects. Each project object 
in projects should contain a title, dates worked, description, 
and an images array with URL strings for project images.
*/
var projects = {
    "projects" : [
        {
            "title": "Operations Toolbar",
            "dates": 2014,
            "description": "A DB based CSS3/HTML/JavaScript toolbar used to manage operations tools.",
            "images": [
                "images/197x148.gif",
                "images/197x148.gif"
                ]
        },
        {
            "title": "Operations Homepage",
            "dates": 2012,
            "description": "A DB based view of all needed operations links utilizing AT&T common templates and branding.",
            "images": [
                "images/197x148.gif",
                "images/197x148.gif",
                "images/197x148.gif"
                ]
        },
        {
            "title": "Operations Ruby Automation",
            "dates": 2013,
            "description": "Business process automation using Ruby/iLog/Java based rules in a Compaq TeMip framework.",
            "images": [
                "images/197x148.gif"
                ]
        }
    ],
}


/* education JSON */
/*
education contains an array of schools. Each school object in 
schools contains a name, location, degree, majors array, dates 
attended and a url for the school's website. education also 
contains an onlineCourses array. Each onlineCourse object in 
onlineCourses should contain a title, school, dates attended 
and a url for the course.
*/
var education = {
    "schools" : [
    {
        "name": "Misouri Tech",
        "city": "St. Louis, MO",
        "degree": "Associates",
        "dates": 1998,
        "url": "http://rmlsn.net",
        "majors": ["Electrical Engineering"]
    },
    {
        "name": "Misouri Tech",
        "city": "St. Louis, MO",
        "degree": "BS",
        "dates": 2001,
        "url": "http://rmlsn.net",
        "majors": ["Software Engineering"]        
    },
    {
        "name": "UMSL",
        "city": "St. Louis, MO",
        "degree": "Certificate of the Microcomputer",
        "dates": 2004,
        "url": "http://rmlsn.net",
        "majors": ["UNIX Administration",
                   "Shell Scripting"
                  ]     
    }
    ],
    "onlineCourses" : [
    {
        "school": "Udacity",
        "title": "Nanodegree - Front End Web Developer",
        "dates": 2015,
        "url": "http://udacity.com"
    }
    ]
};


/* Code I added without instructions
   Did I miss something? My header was not like the one 
   in the lessons. Not until I added this stuff.
*/

//Setup the header data #header
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
//Add header data
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


//Setup Contacts #topContacts
var formattedDomn = HTMLcontactGeneric.replace("%data%", bio.contacts.domain).replace("%contact%", "Homepage");
var formattedMail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGitH = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocn = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedWelc = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
//Add contact data
$("#topContacts").append(formattedDomn);
$("#topContacts").append(formattedMail);
$("#topContacts").append(formattedGitH);
$("#topContacts").append(formattedLocn);
// excluding:
//var HTMLblog = "<li class='flex-item'><span class='orange-text'>blog</span><span class='white-text'>%data%</span></li>";
//var HTMLmobile = "<li class='flex-item'><span class='orange-text'>mobile</span><span class='white-text'>%data%</span></li>";
//var HTMLtwitter = "<li class='flex-item'><span class='orange-text'>twitter</span><span class='white-text'>%data%</span></li>";


//Setup and add hearer image
var formattedImag = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedImag);


//Setup ans add Welcome Message
var formattedWlcm = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWlcm);


/* This is the start of the code created as a part of 
   lesson 2. This all followed the lesson plan with
   minor customization.
*/

// my bio code for lesson 2
//Setup and add skills section
if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
}
//var HTMLskillsStart = "<h3 id='skillsH3'>Skills at a Glance:</h3><ul id='skills' class='flex-box'></ul>";
//var HTMLskills = "<li class='flex-item'><span class='white-text'>%data%</span></li>";


//while loop test
var loopyTest = {};
loopyTest.job = "course dev";

var makeCourse = function() {
  //make one
  console.log("Made a course");
}

var courses = 0;
while(loopyTest.job === "course dev"){
  makeCourse();
  courses = ++courses;
  if(courses === 10){
    loopyTest.job = "learning specialist";
  }
}
  
console.log("Final value = " + loopyTest.job);


//for loop test
  for(var i = 0; i < 9; i++) {console.log(i)};

  var countries = ["germany", "argentina", "brazil", "netherlands"];
  for(country in countries) {console.log(countries[country])};


//Setup adn add Work display function
function displayWork(){
  //for loop on work object
  for(job in work.jobs) {
    //start a section "work-entry"
    $("#workExperience").append(HTMLworkStart);
    
    //add the details for this itteration of the loop to the last 
    // "work-entry"
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    
    //add the dates for this one to the last "work-entry"
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    //add the location for this one to the last "work-entry"
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);

    //add the desc for this one to the last "work-entry"
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);

    console.log("added employer " + work.jobs[job].employer)
  }
}
displayWork();


//Event logging
$(document).click(function(loc) {
  //my code goes here
  logClicks(loc.pageX, loc.pageY);
});


//Internationalize button and function
function inName(name) {
    //The name is undefined. I had to set it with the bio data
    name = bio.name;
    console.log("name is = " + name);
    var nameArray = name.trim().split(" ");
    var firstName = nameArray[0][0].toUpperCase() + nameArray[0].slice(1);
    var lastName = nameArray[1].toUpperCase();
    var convertedName = firstName + " " + lastName;
    console.log(convertedName);
    return convertedName;
}
$("#main").append(internationalizeButton);


//Setup and display project information
//define display function inside projects object
projects.display = function(){
    for(project in projects.projects) {
        //Start each section with project-entry
        $("#projects").append(HTMLprojectStart);

        //add the details for this itteration of the loop to the last 
        // "project-entry"
        var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedProjDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedProjDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedProjTitle);
        $(".project-entry:last").append(formattedProjDates);
        $(".project-entry:last").append(formattedProjDescription);

        //add each image, itterate over array inside this array item
        if (projects.projects[project].images.length > 0) {
            for(image in projects.projects[project].images) {
                var formattedProjImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedProjImage);
                console.log("image " + projects.projects[project].images[image])
            }
        }
        
        console.log("added project " + projects.projects[project].title)
    }
}
//call the function
projects.display();


//Setup and add the google map
$("#mapDiv").append(googleMap);

