
/*
bio contains a name, role, welcomeMessage, contacts object and skills array. The contacts object should contain (but doesn't have to) a mobile number, email address, github username, twitter handle and location.
*/
var bio = {
	"name":"Tom Hill",
	"role":"Web Developer",
	"pictureURL": "images/me.jpg",
	"welcomeMessage": "Welcome to my resume page! As with most things that programmer types do, it's a \"work in progress\", so don't be surprised to find bits and pieces that aren't complete.<br>I worked this up as an exercise in the Udacity JavaScript course, and I haven't gotten back to it since. There should be quite a bit more job history, and a bunch more skills listed...",
	"skills": ["html", "css", "git", "JavaScript", "jQuery"],
	"contacts": {
		"tn":"847-670-9179",
		"mobile":"847-345-7275",
		"email":"thillii@yahoo.com",
		"github":"https://github.com/teh2",
		"location":"Prospect Heights, IL",
		"logo":"images/T2_logo.jpg"
		}
	};
//Note: more lines for the "contacts" section:
//		"twitter":"Coming Soon",
//		"blog":"Coming Soon",

bio.display = function() {
	//Role
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	//Name
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

	//Contact Info
	if (undefined !== bio.contacts.tn) {
		var formattedContactTn = HTMLcontactGeneric.replace("%contact%", "TN").replace("%data%", bio.contacts.tn);
		$("#topContacts").append(formattedContactTn);
		$("#footerContacts").append(formattedContactTn);
	}
	if (undefined !== bio.contacts.mobile) {
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		$("#footerContacts").append(formattedMobile);
	}
	if (undefined !== bio.contacts.email) {
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedEmail);
	}
	if (undefined !== bio.contacts.twitter) {
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#topContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedTwitter);
	}
	if (undefined !== bio.contacts.github) {
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedGithub);
		$("#footerContacts").append(formattedGithub);
	}
	if (undefined !== bio.contacts.blog) {
		var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
		$("#topContacts").append(formattedBlog);
		$("#footerContacts").append(formattedBlog);
	}
	if (undefined !== bio.contacts.location) {
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedLocation);
	}
	
	//Picture
	$("#header").append(HTMLbioPic.replace("%data%", bio.pictureURL));
	//Welcome
	$("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));
	//Skills
	if (undefined != bio.skills) {
		$("#header").append(HTMLskillsStart);
		for (var i = 0; i < bio.skills.length; i++) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
		}
	}
};

bio.display();

/*
work contains an array of jobs. Each job object in jobs should contain an employer, title, location, dates worked and description.
*/
var work = {
	"jobs": [
		{
			"employer": "AT&T",
			"title": "Senior Technical Architect",
			"location": "Hoffman Estates, IL",
			"logo":"images/ATT_logo.jpg",
			"datesWorked": "1998-2014",
			"description": "Interactive Voice Response applications for a major telecommunications company"
		},
		{
			"employer": "Roland",
			"title": "Senior Software Engineer",
			"location": "Mundelein, IL",
			"logo":"images/Roland_logo.jpg",
			"datesWorked": "1986-1990",
			"description": "Electronic piano and Musical Synthesizer design and programming"
		}
	]
};

work.display = function() {
	if (undefined != work.jobs) {
		for (var jobIndex in work.jobs)
		{
			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(
				HTMLworkEmployer.replace("%data%", work.jobs[jobIndex].employer) +
				HTMLworkTitle.replace("%data%", work.jobs[jobIndex].title)
				);
			$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[jobIndex].location));
			$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[jobIndex].datesWorked));
			$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[jobIndex].description));
		}
	}
};

work.display();

/*
projects contains an array of projects. Each project object in projects should contain a title, dates worked, description, and an images array with URL strings for project images.
*/
var projects = {
	"projects": [
		{
			"title": "SEP - Speech Enterprise Payments",
			"datesWorked": "2008-2014",
			"description": "An interactive Voice Response application for making phone bill payments on the phone",
			"images": ["images/sep1.jpg"]
			},
		{
			"title": "CPOT - Complex Product Ordering Tool",
			"datesWorked": "1998-2004",
			"description": "A dynamic, data driven, web app for preparing complex telecom orders.",
			"images": ["images/cpot1.jpg", "images/cpot2.jpg"]
			}
	]};

projects.display = function() {
	for (projectIndex in projects.projects)
	{
		$("#projects").append(HTMLprojectStart);
		var theProject = projects.projects[projectIndex];
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", theProject.title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", theProject.datesWorked));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", theProject.description));
		if (0 < theProject.images.length) {
			for (var picIndex in theProject.images) {
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%", theProject.images[picIndex]));
			}
		}
	}
};

projects.display();

/*
education contains an array of schools. Each school object in schools contains a name, location, degree, majors array, dates attended and a url for the school's website. education also contains an onlineCourses array. Each onlineCourse object in onlineCourses should contain a title, school, dates attended and a url for the course.
*/
var education = {
	"schools": [
		{
			"name":"University of Illinois",
			"location":"Urbana, IL",
			"logo":"images/UofI_logo.jpg",
			"degree":"BS",
			"majors":["Computer Science", "Electronic Music"],
			"datesAttended":"1979-1983",
			"url":"http://illinois.edu"
		},
		{
			"name":"University of Illinois",
			"location":"Urbana, IL",
			"logo":"images/UofI_logo.jpg",
			"degree":"MS-partial",
			"majors":["Computer Science"],
			"datesAttended":"2000-2003",
			"url":"http://illinois.edu"
		},
		{
			"name":"Udacity",
			"location":"Mountain View, CA",
			"logo":"images/Udacity_logo.jpg",
			"degree":"NanoDegree",
			"majors":["Front End Web Developer"],
			"datesAttended":"2014",
			"url":"https://www.udacity.com"
		}
	],
	"onlineCourses": [
		{
			"title":"Intro to Artificial Intelligence",
			"school":"Udacity",
			"datesAttended":"2012",
			"url":"https://www.udacity.com/course/cs271"
		},
		{
			"title":"Intro to HTML and CSS",
			"school":"Udacity",
			"datesAttended":"2014",
			"url":"https://www.udacity.com/course/ud304"
		},
		{
			"title":"How to Use Git and GitHub",
			"school":"Udacity",
			"datesAttended":"2014",
			"url":"https://www.udacity.com/course/ud775"
		},
		{
			"title":"JavaScript Basics",
			"school":"Udacity",
			"datesAttended":"2014",
			"url":"https://www.udacity.com/course/ud804"
		},
		{
			"title":"Intro to jQuery",
			"school":"Udacity",
			"datesAttended":"2014",
			"url":"https://www.udacity.com/course/ud245"
		},
		{
			"title":"Object-Oriented JavaScript",
			"school":"Udacity",
			"datesAttended":"2014",
			"url":"https://www.udacity.com/course/ud015"
		},
		{
			"title":"HTML5 Canvas",
			"school":"Udacity",
			"datesAttended":"2014",
			"url":"https://www.udacity.com/course/ud292"
		}
	]};

education.display = function() {
	if (undefined != education.schools) {
		for (var schoolIndex in education.schools) {
			$("#education").append(HTMLschoolStart);
			var school = education.schools[schoolIndex];
			$(".education-entry:last").append(
				HTMLschoolName.replace("%data%", school.name).replace("%url%", school.url) +
				HTMLschoolDegree.replace("%data%", school.degree));
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.datesAttended));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
			for (var majorIndex in school.majors) {
				$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", school.majors[majorIndex]));
			}
		}
	}
	$("#education").append(HTMLonlineClasses);
	if (undefined != education.onlineCourses) {
		for (var courseIndex in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var course = education.onlineCourses[courseIndex];
			$(".education-entry:last").append(
				HTMLonlineTitle.replace("%data%", course.title).replace("%url%", course.url) +
				HTMLonlineSchool.replace("%data%", course.school));
			$(".education-entry:last").append(HTMLonlineDates.replace("%data%", course.datesAttended));
			if (courseIndex < (education.onlineCourses.length - 1)) {
				$(".education-entry:last").append("<br>");
			};
//			$(".education-entry:last").append(HTMLonlineURL.replace("%data%", course.url).replace("%url%", course.url));
		}
	}
};

education.display();
/*
*Below this point live some miscellanious helper functions.
* these are either related to specific exercises in class, or they add other 'interesting' functionality.
*/
//internationalization example
$("#main").append(internationalizeButton);

function inName(inNames) {
	var localNames = inNames;
	if (undefined === localNames || 0 === localNames.length) {
		localNames = $('#name').html() || 'no name';
	}
	var names = localNames.split(' ');
	var first = names[0].toLowerCase();
	var init = first.slice(0,1);
	var initial = first[0].toUpperCase();
	var rest = first.slice(1);
	var last = names[1].toUpperCase();
	return initial + rest + " " + last;
}

//Display a map of where I've lived and worked...
$("#mapDiv").append(googleMap);

