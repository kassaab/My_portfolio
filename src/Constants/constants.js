/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: constants.js
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faGithub,
	faLinkedin,
	faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
	faBagShopping,
	faBars,
	faDiceD6,
	faEnvelope,
	faWindowRestore,
	faX,
} from "@fortawesome/free-solid-svg-icons";

import {
	avatar,
	cplusplusIcon,
	videoConference,
	cssIcon,
	eslintIcon,
	utIcon,
	gitIcon,
	githubIcon,
	htmlIcon,
	javaIcon,
	jsIcon,
	todo,
	othersIcon,
	guiIcon,
	weather,
	apiIcon,
	pyIcon,
	raspIcon,
	djangoIcon,
	sqlIcon,
} from "../assets";

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
	htmlIcon,
	cssIcon,
	jsIcon,
	djangoIcon,
	cplusplusIcon,
	javaIcon,
	gitIcon,
	githubIcon,
	apiIcon,
	eslintIcon,
	pyIcon,
	sqlIcon,
	guiIcon,
	raspIcon,
	othersIcon,
	utIcon,
	avatar,
};

const icons = {
	faBars,
	faX,
	faWindowRestore,
	faBagShopping,
	faDiceD6,
	faReact,
	faGithub,
	faLinkedin,
	faEnvelope,
};

const introduction = {
	text: [
		"Hello there, I'm so happy you are here! (:",

		"My name is Abrham. Aspiring software engineer with a strong foundation in object-oriented programming languages. Passionate about building large-scale technology solutions, I aim to impact millions of users globally. I adapt quickly to new challenges and cutting-edge technologies, thriving in dynamic teams that foster creativity and continuous learning.",

		"Beyond coding, I find joy in the great outdoors, embracing nature and outdoor activities. When indoors, you'll catch me indulging in the thrill of video games. A self-proclaimed geek now and then, I bring a playful enthusiasm to my love for technology and innovation.",

		"I'm always eager to learn and committed to advancing my professional skills, with the ultimate goal of contributing to groundbreaking projects and making a meaningful impact in the global technology landscape.",
	],
};

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "projects",
		title: "Projects",
	},
	{
		id: "skills",
		title: "Skills",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const projects = [



	{
		name: "To-Do List",
		description:
			"A simple and user-friendly web app with user registration and login features. This dynamic application empowers users to seamlessly navigate through tasks with an intuitive interface, simplifying the process of Searching, Creating, Updating, and Deleting tasks.",
		image: todo,
		source_code_link: "https://github.com/kassaab/To_Do_list_app_with_user_authentication",
		demo_link: "https://arasarmemory.netlify.app/",
	},
	{
		name: "Weather App",
		description:
			"A convenient and user-friendly tool for staying informed about the latest weather trends. Integrated with the Open Weather Map API, the app ensures real-time, reliable weather data. The app has a functionality that allows users to compare current weather conditions and 5-day forecasts between cities.",
		image: weather,
		source_code_link: "https://github.com/kassaab/Weather_project",
		demo_link:
			"https://www.figma.com/proto/zhK8DMa7uPyQIcHxkemIcx/Pawsitive?type=design&node-id=40-2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=40%3A2",
	},
	{
		name: "Video Conference",
		description:
			"Built with Django and Zego Cloud, the video conference app offers seamless user authentication, meeting initiation, room joining, in-room chat, and screen sharing/presenter capabilities. Connect effortlessly and enhance collaboration with this feature-rich platform.",
		image: videoConference,
		source_code_link: "https://github.com/kassaab/Video_conference_app",
		demo_link: "https://bl33hscalculator.netlify.app/",
	},
	// {
	// 	name: "CRPM",
	// 	description:
	// 		"This is a buitful app with sjknknskns sjsjd sgav dsjksja dhhdhhds gssgd shshdjjakka gd c shhdhka dhhdha sbjdbjbjc.",
	// 	image: avatar,
	// 	source_code_link: "#",
	// 	demo_link: "#"
	// }
];

const memoji = {
	image: [avatar],
};

const skills = [
	{
		id: "html",
		title: "HTML",
		icon: htmlIcon,
		description:
			"I leverage HTML to structure web pages and create meaningful content, ensuring accessibility for all users.",
	},
	{
		id: "css",
		title: "CSS",
		icon: cssIcon,
		description:
			"I possess a moderet experience in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.",
	},
	{
		id: "javascript",
		title: "JavaScript",
		icon: jsIcon,
		description:
			"In the early stages of learning JavaScript, I have a basic understanding of its principles and concepts. I am actively expanding my knowledge to enhance the interactivity and functionality of web pages.",
	},
	{
		id: "dj",
		title: "Django",
		icon: djangoIcon,
		description:
			"I have moderate experience with Django, utilizing its high-level capabilities to build robust and scalable web applications.",
	},
	{
		id: "java",
		title: "Java",
		icon: javaIcon,
		description:
			"Currently in the process of learning Java, I have a basic understanding of the language. I am exploring its fundamentals and applying them to build foundational programming skills.",
	},
	{
		id: "c++",
		title: "C++",
		icon: cplusplusIcon,
		description:
			"I possess moderate experience in C++, using it to solve complex problems and implement algorithms.",
	},
	{
		id: "ut",
		title: "Unit Testing",
		icon: utIcon,
		description:
			"Proficient in implementing unit tests, I ensure the reliability and functionality of code, contributing to the overall quality of the codebase.",
	},
	{
		id: "git",
		title: "Git",
		icon: gitIcon,
		description:
			"I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.",
	},
	{
		id: "github",
		title: "GitHub",
		icon: githubIcon,
		description:
			"I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.",
	},
	{
		id: "api",
		title: "API",
		icon: apiIcon,
		description:
			"Experienced in seamlessly integrating APIs into web applications, I handle data exchange between different systems to enhance functionality and connectivity",
	},
	{
		id: "sql",
		title: "SQL",
		icon: sqlIcon,
		description:
			"Skilled in SQL, I use it to manage and query relational databases, designing and optimizing database schemas for efficient data storage and retrieval.",
	},
	{
		id: "py",
		title: "Python",
		icon: pyIcon,
		description:
			"With over two years of technical experience, I excel in Python programming. I have successfully delivered robust solutions, showcasing proficiency in coding complex functions.",
	},
	{
		id: "gui",
		title: "GUI",
		icon: guiIcon,
		description:
			"Experienced in designing intuitive and user-friendly GUIs for web applications, I utilize graphical elements to create engaging interfaces that enhance user experience.",
	},
	{
		id: "others",
		title: "Others",
		icon: othersIcon,
		description:
			"Office 365 | Project Coordination | Customer Service | Business Communication | Bilingual | Time Management | Problem-solving | and Analytical Skills",
	},
	// {
	// 	id: "raspi",
	// 	title: "Raspberry Pi",
	// 	icon: raspIcon,
	// 	description:
	// 		"I have hands-on experience with Raspberry Pi, where I utilized a virtual Linux machine to execute programs written in assembly language. This allowed me to explore low-level computing and develop efficient code for the Raspberry Pi platform.",
	// },
	// {
	// 	id: "eslint",
	// 	title: "Eslint",
	// 	icon: eslintIcon,
	// 	description:
	// 		"I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.",
	// },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export { icons, introduction, markerSvg, media, memoji, projects, skills };
