// Bio Object
var bio = {
    "name": "Sagar Choudhary",
    "role": "Android and Web Developer",
    "contacts": {
        "mobile": "+91-9056455979",
        "email": "<a href='mailto:sagar.choudhary96@gmail.com'>sagar.choudhary96@gmail.com</a>",
        "github": "<a href='https://goo.gl/IbXnoQ'>sagarchoudhary96</a>",
        "twitter": "@sa_choudhary",
        "location": "Gurgaon"
    },
    "welcomeMessage": "The only way to great work is to love what you do.",
    "skills": ["Android Development", "Java", "Python",
        "JavaScript", "HTML", "CSS", "Bootstrap", "JQuery", "C/C++"
    ],
    "biopic": "images/me.png"
};

// displayBio fuction
bio.display = function() {
    $("#header").prepend(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name), HTMLheaderRole.replace("%data%", bio.role));

    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    formattedContactInfo = [];
    formattedContactInfo.push(HTMLmobile.replace('%data%', bio.contacts.mobile));
    formattedContactInfo.push(HTMLemail.replace('%data%', bio.contacts.email));
    formattedContactInfo.push(HTMLgithub.replace('%data%', bio.contacts.github));
    formattedContactInfo.push(HTMLtwitter.replace('%data%', bio.contacts.twitter));
    formattedContactInfo.push(HTMLlocation.replace('%data%', bio.contacts.location));
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i in bio.skills) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    }

    for (i in formattedContactInfo) {
        $("#topContacts").append(formattedContactInfo[i]);
        $("#footerContacts").append(formattedContactInfo[i]);
    }
};

bio.display();
//Work Object
var work = {
    'jobs': [{
        "employer": "Chitkara University",
        "title": "Student",
        "dates": "2015 - Present",
        "location": "Chitkara university, Village Jhansla, Patiala, Punjab",
        "description": "I am pursuing my Bachelor degree here."
    }]
};

//displayWork function
work.display = function() {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job].title), HTMLworkDates.replace("%data%", work.jobs[job].dates), HTMLworkLocation.replace("%data%", work.jobs[job].location), HTMLworkDescription.replace("%data%", work.jobs[job].description));
    }
};

work.display();

//Education Object
var education = {
    "schools": [{
        "name": "Modern Public School",
        "location": "Modern Public School, Bhiwadi, Rajasthan",
        "degree": "High School",
        "majors": ["PCM"],
        "dates": "2014",
        "url": "http://mpsbhiwadi.org"
    }, {
        "name": "Chitkara University",
        "location": "Chitkara University, Village Jhansla, Patiala, Punjab",
        "degree": ["B.E"],
        "majors": "Computer Science",
        "dates": "2015-2019",
        "url": "www.chitkara.edu.in"
    }],
    "onlineCourses": [{
        "title": "1. Intro to Programming Nanodegree",
        "school": "Udacity",
        "date": "2016",
        "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }, {
        "title": "2. Android Development for Beginners",
        "school": "Udacity",
        "date": "2016",
        "url": "https://www.udacity.com/course/android-development-for-beginners--ud837"
    }, {
        "title": "3. Intro to Html and Css",
        "school": "Udacity",
        "date": "2016",
        "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
    }]
};

//displayEducation function
education.display = function() {
    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree), HTMLschoolDates.replace("%data%", education.schools[school].dates), HTMLschoolLocation.replace("%data%", education.schools[school].location), HTMLschoolMajor.replace("%data%", education.schools[school].majors));
    }

    //online Courses
    $("#education").append(HTMLonlineClasses);
    for (var course in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school), HTMLonlineDates.replace("%data%", education.onlineCourses[course].date), HTMLonlineURL.replace("%data%", education.onlineCourses[course].url).replace("#", education.onlineCourses[course].url));
    }
};

education.display();

//Projects Object
var projects = {
    "projects": [{
            "title": "Movie Website",
            "dates": "2016",
            "description": "I have made this movie website using Python",
            "images": ["images/movie.png"]
        },

        {
            "title": "My 2048",
            "dates": "2016",
            "description": "I have made this game as a part of udacity free course.",
            "images": ["images/game.png"]
        },

        {
            "title": " My portfolio",
            "dates": "2016",
            "description": "I have made a responsive portfolio page using bootstrap.",
            "images": ["images/portfolio1.png"]
        },

        {
            "title": "Court Counter",
            "dates": "2015",
            "description": "This is an android app which demonstrates basics of android fundamentals.",
            "images": ["images/court_counter.png"]
        }
    ]
};

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title), HTMLprojectDates.replace("%data%", projects.projects[project].dates) + HTMLprojectDescription.replace("%data%", projects.projects[project].description));

        if (projects.projects[project].images.length > 0) {
            for (var image in projects.projects[project].images)
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
        }
    }
};

projects.display();

// adding map
$('#mapDiv').append(googleMap);
