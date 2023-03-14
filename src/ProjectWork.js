import codeYellow_main from "./assets/images/codeYellow_main.webp";
import cn_website from "./assets/images/cn-website.webp";
import cn_christmas from "./assets/images/cn-christmas-thumbnail.webp";
import cn_halloween from "./assets/images/cn-halloween-thumbnail.webp";
import christmas_games from "./assets/images/12-games-thumbnail.webp";
import quiz_app from "./assets/images/quiz-app-thumbnail.webp";


export const projects = [
    {
        name: "Code Yellow",
        thumbnail: codeYellow_main,
        main: {type: "video", media: "-EYILHcaugM"},
        url: "code-yellow",
        subHeading: "Unreal Engine 4, Blender",
        description: "This was my first attempt at game development. I did a short 3 week course on game development with UE4. Code Yellow was the game I made at the end of the 3 weeks. The premise of the game is simple; you start at one end of the map and have to retrieve the banana and get back to the starting point. On your way, you have to avoid the drones that patrol the area. Once you are spotted, they will start shooting to stop you from stealing the banana. I mainly used Unreal Engine built in a node based interface called blueprint, to create the underlying logic for the game. I then worked on the AI system for the drones which meant moving them accross the map and shooting if you were in their line of sight. Finally, to create the environment assets I modelled and textured them in Blender 3D.",
        image_showcase: [],
        project_link: null,
        tags: ["development", "animation"]
    },
    {
        name: "Code Nation Website",
        thumbnail: cn_website,
        main: {type: "image", media: cn_website},
        url: "cn-website",
        subHeading: "Wordpress, Gatsby, GraphQL",
        description: "I was one of a team of three, working on the development of the Code Nation company website. I've been involved in the various stages of development of the site, aligned to the growth of the company - Our first iteration used the framework Gatsby.js and GraphQL. Later, the website was updated to Wordpress to allow multiple user access for a simplified CMS.",
        image_showcase: [],
        project_link: "https://wearecodenation.com/",
        tags: ["development"]
    },
    {
        name: "Code Nation Christmas 2022",
        thumbnail: cn_christmas,
        main: {type: "video", media: "Zb8u7-naFzA"},
        url: "cn-chrsitmas-animation",
        subHeading: "Blender",
        description: " I worked with the Code Nation Marketing team to design and create an animation to engage with employers and alumni as part of a Christmas e-card campaign. I collaborated with the senior management team to ensure the final animation was on-brand. This was a first for me as it allowed me to develop all the models and characters, including the complexities of the reindeers pulling Santa in the sleigh.",
        image_showcase: [],
        project_link: null,
        tags: ["animation"]
    },
    {
        name: "Code Nation Halloween 2022",
        thumbnail: cn_halloween,
        main: {type: "video", media: "z3_ExmguFoE"},
        url: "cn-halloween-animation",
        subHeading: "Blender",
        description: "This was my first 3D work to be used by a company. It was an idea promoted by me to create a 3D animation for use on all the companies social media channels and was succesfully launched as part of the 2022 Halloween message from Code Nation. I produced everything in Blender 3D, from modelling, texturing, and rigid body simulation.",
        image_showcase: [],
        project_link: null,
        tags: ["animation"]
    },
    {
        name: "12 Games of Christmas",
        thumbnail: christmas_games,
        main: {type: "image", media: christmas_games},
        url: "12-games-of-christmas",
        subHeading: "HTML, CSS, JavaScript",
        description: "I was the lead developer on this project and worked with the business to create an interactive and fun Christmas advent calender, to be used by Code Nation staff and employers. On each of the 12 days, I released a new game, and designed each one so players would compete for the highest scores. I made the games in HTML, CSS, and JavaScript as well as making use of JS canvas to create game graphics.",
        image_showcase: [],
        project_link: "https://christmas-at-codenation.vercel.app/",
        tags: ["development"]
    },
    {
        name: "Quiz App",
        thumbnail: quiz_app,
        main: {type: "image", media: quiz_app},
        url: "quiz-app",
        subHeading: "React, Node, MongoDB, Express",
        description: "This was my assessed apprenticeship project that got me a pass for a Level 4 Software Development qualification. The app is built with a MERN stack and is deployed using Netlify for the frontend and Render for the backend. There are 3 user roles; user, admin and super admin. The user only lets you play the quizzes. When you log in as an admin, you can play quizzes as well as view the questions, answers and get stats for each, for example, how many users answered correctly. The super admin user can add new quizzes and remove quizzes.",
        image_showcase: [],
        project_link: "https://creative-khapse-11573d.netlify.app",
        tags: ["development"]
    }
]

// project info format
// {
//     name: "Project name",
//     main: "main image to display on home page",
//     url: "endpoint to visit",
//     subHeading: "extra info, languages/texh used",
//     description: "project description",
//     image_showcase: ["array of all other images to show"],
//     project_link: "link to see project if there is one",
//     tags: ["development", "animation"]
// }