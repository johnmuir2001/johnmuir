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
        description: "This was my first go at game development. I did a short 3 week course on game development with UE4. Code Yellow was the game I had made by the end of these 3 weeks. The premise of the game is simple, you start on one end of the map and have to retrieve the banana and get back to the starting point. On your way you have to avoid the drones that patrol the array. Once you are spotted they will start shooting to stop you from stealing the banana. I used mainly Unreal Engines built in node based interface, blueprint, to create the logic for this game. I then worked on the AI system for the drones which meant moving them accross the map and shooting if you were in their line of sight. Finally to create the environment assets I modelled and textured them in Blender.",
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
        description: "I helped in the development of the Code Nation company website. I was first part of the team that made the website using the framework Gatsby.js and GraphQL. Later the website was updated to Wordpress and again I was part of the team who re-created the website in wordpress.",
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
        description: "This was an animation that was sent out by Code Nation to employers and alumni as part of a Christmas email. I came up with the idea and made all the models. This was also my first time animating characters, I animated the santa and the reindeers pulling the sleigh.",
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
        description: "This was my first 3D work to be used by a company. It was to be used on social media as part of the 2022 Halloween message from Code Nation. I did everything in Blender 3D from modelling, texturing, and rigid body simulation.",
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
        description: "This was a Christmas advent calender to be used by Code Nation staff. Each day for 12 days a new game was released and people would compete to get the highest scores possible. I made the games in HTML, CSS, and JavaScript as well as making use of JS canvas to create game graphics.",
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
        description: "This was my assessed apprenticeship project that got me a pass for a Level 4 Software Development qualification. The app is built with a MERN stack and is deployed using Netlify for the frontend and Render for the backend. There are 3 user roles, user, admin and super admin. The user only lets you play the quizzes, when you log in as an admin you can play quizzes as well as view the questions and answers and get stats for each such as how many answered correctly. The super admin user can add new quizzes and remove quizzes.",
        image_showcase: [],
        project_link: "https://creative-khapse-11573d.netlify.app/login",
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