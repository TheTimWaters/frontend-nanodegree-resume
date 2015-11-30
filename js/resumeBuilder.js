var bio = {
	"name" : "Tim Waters",
	"role" : "Software Developer",
	"contacts" : {
		"email" : "tim.waters@live.com",
		"mobile" : "619-555-1234",
		"location" : "San Diego, CA",
		"twitter" : "@TheTimWaters",
		"github" : "TheTimWaters"
	},
	"biopic" : "images/fry.jpg",
	"welcomeMessage" : "Welcome to my resume webpage!",
	"skills" : ["Machine learning", "Full-stack web programming", "Robotics", "Front-end development"],
	"blog" : "http://github.io"
};

var work = {
	"jobs" : [{
		"title" : "Software Developer",
		"employer" : "UAV Company",
		"dates" : ["2007", ""],
		"location" : "San Diego, CA",
		"description" : "Developed flight controls, navigation, sensor, and payload control software for remotely piloted vehicles.",
		"URL" : "https://en.wikipedia.org/wiki/Unmanned_aerial_vehicle"
	},
	{
		"title" : "Systems Software Engineer",
		"employer" : "Aerospace Company",
		"dates" : ["2000", "2007"],
		"location" : "San Diego, CA",
		"description" : "Developed software for service-oriented distributed system for processing large datasets.",
		"URL" : "https://en.wikipedia.org/wiki/Service-oriented_architecture"
	},
	{
		"title" : "Sofware Tester",
		"employer" : "Video Game Company",
		"dates" : ["1999", "2000"],
		"location" : "San Diego, CA",
		"description" : "Tested multiple games for consumer release for both console and coin-operated (arcade) game machines.",
		"URL" : "https://en.wikipedia.org/wiki/Midway_Games"
	}]
};

var education = {
	"schools" : [{
		"name" : "Udacity",
		"location" : "San Francisco, CA",
		"degree" : "nanodegree",
		"major" : ["Front-end developer", " Full-stack developer", " Machine Learning"],
		"dates" : ["2015", "2016"],
		"URL" : "http://www.udacity.com"
	},
	{
		"name" : "Coursera",
		"location" : "San Francisco, CA",
		"degree" : "specialization",
		"major" : ["Machine Learning", " Big Data"],
		"dates" : ["2015", "2016"],
		"URL" : "http://www.coursera.org"
	},
	{
		"name" : "University of Washington",
		"location" : "Seattle, WA",
		"degree" : "Master of Science",
		"major" : ["Aeronautics & Astronautics"],
		"dates" : ["2011", "2011"],
		"URL" : "http://www.aa.washington.edu"
	},
	{
		"name" : "San Diego State University",
		"location" : "San Diego, CA",
		"degree" : "Master of Science",
		"major" : ["Computer Science"],
		"dates" : ["2007", "2007"],
		"URL" : "http://cs.sdsu.edu"
	}],
	"onlinecourses" : [{
		"title" : "Artificial Intelligence for Robotics",
		"school" : "Udacity",
		"URL" : "http://www.udacity.com",
		"dates" : ["2012", "2015"]
	},
	{
		"title" : "Machine Learning",
		"school" : "Coursera",
		"URL" : "http://www.coursera.org",
		"dates" : ["2012", "2015"]
	},
	{
		"title" : "Underactuated Robotics",
		"school" : "MIT EdX",
		"URL" : "http://www.edx.org",
		"dates" : ["2015", "2015"]
	},
	{
		"title" : "Artificial Intelligence",
		"school" : "MIT EdX",
		"URL" : "https://www.edx.org/course/artificial-intelligence-uc-berkeleyx-cs188-1x",
		"dates" : ["2015", "2015"]
	}]
};

var projects = {
	"portfolio": [{
		"title" : "Title 1",
		"URL" : "http://github.io",
		"keywords" : ["HTML/CSS", "Javascript"],
		"description" : "Special project #1",
		"image" : "http://placekitten.com/390/315",
		"dates" : ["2012", "2012"]
	},
	{
		"title" : "Title 2",
		"URL" : "http://github.io",
		"keywords" : ["HTML/CSS", "Javascript"],
		"description" : "Special project #2",
		"image" : "http://placekitten.com/390/315",
		"dates" : ["2012", "2013"]
	},
	{
		"title" : "Title 3",
		"URL" : "http://github.io",
		"keywords" : ["HTML/CSS", "Javascript"],
		"description" : "Special project #3",
		"image" : "http://placekitten.com/390/315",
		"dates" : ["2012", "2014"]
	}]
};


bio.display = function() {
	var data = "%data%";
	var formattedMobile = HTMLmobile.replace(data, this.contacts.mobile);
	var formattedEmail = HTMLemail.replace(data, this.contacts.email);
	var formattedTwitter = HTMLtwitter.replace(data, this.contacts.twitter);
	var formattedGithub = HTMLgithub.replace(data, this.contacts.github);
	var formattedBlog = HTMLblog.replace(data, this.blog);
	var formattedLocation = HTMLlocation.replace(data, this.contacts.location);
	var formattedName = HTMLheaderName.replace(data, this.name);
	var formattedRole = HTMLheaderRole.replace(data, this.role);
	var formattedWelcome = HTMLwelcomeMsg.replace(data, this.welcomeMessage);
	var formattedBioPic = HTMLbioPic.replace(data, this.biopic);

	var $header = $("#header");
	$header.prepend(formattedRole);
	$header.prepend(formattedName);
	// $("#main").append(internationalizeButton);
	$header.append(formattedWelcome);
	$header.append(formattedBioPic);

	var $topContacts = $("#topContacts");
	$topContacts.append(formattedMobile);
	$topContacts.append(formattedEmail);
	$topContacts.append(formattedTwitter);
	$topContacts.append(formattedGithub);
	$topContacts.append(formattedBlog);
	$topContacts.append(formattedLocation);

	var $footerContacts = $("#footerContacts");
	$footerContacts.append(formattedMobile);
	$footerContacts.append(formattedEmail);
	$footerContacts.append(formattedTwitter);
	$footerContacts.append(formattedGithub);
	$footerContacts.append(formattedBlog);
	$footerContacts.append(formattedLocation);

	var hasSkills = false;
	try {
		eval("bio.skills");
		hasSkills = (this.skills.length>0);
	} catch(e) { }

	if (hasSkills) {
		$header.append(HTMLskillsStart);
					var $skills = $("#skills");
		this.skills.forEach(function(val) {
			var formattedSkill = HTMLskills.replace(data, val);
			$skills.append(formattedSkill);
		});
	}
}
bio.display();

projects.display = function() {
	var data = "%data%";
	var $projects = $("#projects");

	this.portfolio.forEach(function(val) {
		$projects.append(HTMLprojectStart);
		var $projectentrylast = $(".project-entry:last");
		var projTitle = HTMLprojectTitle.replace(data, val.title);

		$projectentrylast.append(projTitle);
		$projectentrylast.find("a").attr("href", val.URL);

		var projDate = HTMLprojectDates.replace(data, val.dates[0] + " - " + val.dates[1]);
		$projectentrylast.append(projDate); 

		var projDesc = HTMLprojectDescription.replace(data, val.description);
		$projectentrylast.append(projDesc); 

		var projImg = HTMLprojectImage.replace(data, val.image);
		$projectentrylast.append(projImg);                     
	});
}
projects.display();

education.display = function() {
	var data = "%data%";
	var $education = $("#education");
	this.schools.forEach(function(val) {
		$education.append(HTMLschoolStart);
		var $educationentrylast = $(".education-entry:last");
		var name = HTMLschoolName.replace(data, val.name);
		var degree = HTMLschoolDegree.replace(data, val.degree);
		$educationentrylast.append(name + degree);
		$educationentrylast.find("a").attr("href", val.URL);

		var dates = HTMLschoolDates.replace(data, val.dates[0] + " - " + val.dates[1]);
		$educationentrylast.append(dates); 

		var location = HTMLschoolLocation.replace(data, val.location);
		$educationentrylast.append(location); 

		var major = HTMLschoolMajor.replace(data, val.major);
		$educationentrylast.append(major);                     
	});
	$education.append('<br>'); 
	$education.append(HTMLonlineClasses);

	this.onlinecourses.forEach(function(val) {
		$education.append(HTMLschoolStart);	
		var $educationentrylast = $(".education-entry:last");
		var classTitle = HTMLonlineTitle.replace(data, val.title);
		var school = HTMLonlineSchool.replace(data, val.school);
		$educationentrylast.append(classTitle + school); 
		$educationentrylast.find("a").attr("href", val.URL);

		var onlinedates = HTMLonlineDates.replace(data, val.dates[0] + " - " + val.dates[1]);
		$educationentrylast.append(onlinedates); 
		$educationentrylast.append('<br>'); 
	});
}
education.display();

work.display = function() {
	var data = "%data%";
	var $workExperience = $("#workExperience");
	this.jobs.forEach(function(val) {
		$workExperience.append(HTMLworkStart);
		var $workentrylast = $(".work-entry:last");
		var formattedEmployer = HTMLworkEmployer.replace(data, val.employer);
		var formattedTitle = HTMLworkTitle.replace(data, val.title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$workentrylast.append(formattedEmployerTitle);
		$workentrylast.find("a").attr("href", val.URL);

		var formattedDates = HTMLworkDates.replace(data, val.dates[0] + " - " + val.dates[1]);
		$workentrylast.append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace(data, val.description);
		$workentrylast.append(formattedDescription);
	});
}
work.display();

function inName(name) {
	var firstLastName = name.trim().split(" ");
	var firstName = firstLastName[0].toLowerCase();
	firstName = firstName.charAt(0).toUpperCase() + firstName.substr(1, firstName.length);
	var lastName = firstLastName[1].toUpperCase();
	return firstName + " " + lastName;
}

//Add the map.
$("#mapDiv").append(googleMap);

window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});
