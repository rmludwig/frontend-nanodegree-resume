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
    "welcomeMessage": "Welcome to my first interactive portfolio project.",
    "contacts": {
        "email": "developer@rmlsn.net",
        "github": "rmludwig",
        "location": "Saint Charles, MO"
        },
    "skills": [
        "Web Development", 
        "Programming", 
        "Automation", 
        "Leadership"
        ],
    "bioPic": "images/RichPassport.jpg"
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
        "location": "Bridgeton, MO",
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
    ]
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







