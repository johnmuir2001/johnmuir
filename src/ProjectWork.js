import codeYellow_main from "./assets/images/codeYellow_main.webp";
import cn_website from "./assets/images/cn-website.webp";
import cn_christmas from "./assets/images/cn-christmas-thumbnail.webp";
import cn_halloween from "./assets/images/cn-halloween-thumbnail.webp";
import christmas_games from "./assets/images/12-games-thumbnail.webp";
import quiz_app from "./assets/images/quiz-app-thumbnail.webp";
import stylised_head from "./assets/images/stylised-character-thumbnail.webp";
import cn_logo_anims from "./assets/images/cn-logo-animations-thumbnail.webp";
import nw_thumbnail from "./assets/images/nw-thumbnail.webp";
import cn_easter from "./assets/images/cn-easter-thumbnail.webp";

export const projects = [
    {
        name: "Code Yellow",
        thumbnail: codeYellow_main,
        main: [{type: "video", media: "-EYILHcaugM"}],
        url: "code-yellow",
        subHeading: "Unreal Engine 4, Blender",
        description: "This was my first attempt at game development. I did a short 3 week course on game development with UE4. Code Yellow was the game I made at the end of the 3 weeks. The premise of the game is simple; you start at one end of the map and have to retrieve the banana and get back to the starting point. On your way, you have to avoid the drones that patrol the area. Once you are spotted, they will start shooting to stop you from stealing the banana. I mainly used Unreal Engine built in a node based interface called blueprint, to create the underlying logic for the game. I then worked on the AI system for the drones which meant moving them accross the map and shooting if you were in their line of sight. Finally, to create the environment assets I modelled and textured them in Blender 3D.",
        project_link: null,
        tags: ["development", "animation"]
    },
    {
        name: "Code Nation Website",
        thumbnail: cn_website,
        main: [{type: "image", media: cn_website}],
        url: "cn-website",
        subHeading: "Wordpress, Gatsby, GraphQL",
        description: "I was one of a team of three, working on the development of the Code Nation company website. I've been involved in the various stages of development of the site, aligned to the growth of the company - Our first iteration used the framework Gatsby.js and GraphQL. Later, the website was updated to Wordpress to allow multiple user access for a simplified CMS.",
        project_link: [{type:"site", url:"https://wearecodenation.com/"}],
        tags: ["development"]
    },
    {
        name: "Code Nation Christmas 2022",
        thumbnail: cn_christmas,
        main: [{type: "video", media: "Zb8u7-naFzA"}],
        url: "cn-chrsitmas-animation",
        subHeading: "Blender",
        description: " I worked with the Code Nation Marketing team to design and create an animation to engage with employers and alumni as part of a Christmas e-card campaign. I collaborated with the senior management team to ensure the final animation was on-brand. This was a first for me as it allowed me to develop all the models and characters, including the complexities of the reindeers pulling Santa in the sleigh.",
        project_link: null,
        tags: ["animation"]
    },
    {
        name: "Code Nation Halloween 2022",
        thumbnail: cn_halloween,
        main: [{type: "video", media: "z3_ExmguFoE"}],
        url: "cn-halloween-animation",
        subHeading: "Blender",
        description: "This was my first 3D work to be used by a company. It was an idea promoted by me to create a 3D animation for use on all the companies social media channels and was succesfully launched as part of the 2022 Halloween message from Code Nation. I produced everything in Blender 3D, from modelling, texturing, and rigid body simulation.",
        project_link: null,
        tags: ["animation"]
    },
    {
        name: "12 Games of Christmas",
        thumbnail: christmas_games,
        main: [{type: "image", media: christmas_games}],
        url: "12-games-of-christmas",
        subHeading: "HTML, CSS, JavaScript",
        description: "I was the lead developer on this project and worked with the business to create an interactive and fun Christmas advent calender, to be used by Code Nation staff and employers. On each of the 12 days, I released a new game, and designed each one so players would compete for the highest scores. I made the games in HTML, CSS, and JavaScript as well as making use of JS canvas to create game graphics.",
        project_link: [{type:"site", url:"https://christmas-at-codenation.vercel.app/"}, {type:"source", url:"https://github.com/johnmuir2001/christmas-at-codenation"}],
        tags: ["development"]
    },
    {
        name: "Quiz App",
        thumbnail: quiz_app,
        main: [{type: "image", media: quiz_app}],
        url: "quiz-app",
        subHeading: "React, Node, MongoDB, Express",
        description: "This was my assessed apprenticeship project that got me a pass for a Level 4 Software Development qualification. The app is built with a MERN stack and is deployed using Netlify for the frontend and Render for the backend. There are 3 user roles; user, admin and super admin. The user only lets you play the quizzes. When you log in as an admin, you can play quizzes as well as view the questions, answers and get stats for each, for example, how many users answered correctly. The super admin user can add new quizzes and remove quizzes.",
        project_link: [{type: "site", url:"https://quiz-manager-ui.vercel.app/"}, {type: "source", url: "https://github.com/johnmuir2001/QuizManager-ui"}],
        tags: ["development"]
    },
    {
        name: "Stylised Character Head",
        thumbnail: stylised_head,
        main: [{type: "image", media: stylised_head}, {type: "video", media: "bWQlVIOI4W8"}],
        url: "stylised-character-head",
        subHeading: "Blender",
        description: "This was my first stylised character head, it was also my first time texturing a character for stylised realisim. I used Blender 3D for all parts of the process; modeling, sculpting, texturing/shading, lightning and was rendered in cycles.",
        project_link: null,
        tags: ["animation"]
    },
    {
        name: "Nationwide Learning Platform",
        thumbnail: nw_thumbnail,
        main: [{type: "video", media: "-Ak_IXBCB4Y"}],
        url: "nationwide-learning-platform",
        subHeading: "HTML, CSS, JavaScript",
        description: "I was asked to design and create a platform for Nationwide Building Society to be used to help upskill 16-18 year olds in software development. The main feature was to showcase coding fundamentals on a platform which could be used by anyone to demonstrate what code can produce. Having worked with the business engagement team, we decided on a split-screen website; on the left with HTML code, and the right showing what the HTML code produces. An additional feature I thought would work well for the audience was to hover over the HTML code and the corresponding part of the website would  be highlighted, again, to see what the code can produce. I then built an 'in browser' code editor that would demonstrate CSS logic and how it can affect the HTML code.",
        project_link: null,
        tags: ["development"]
    },
    {
        name: "Code Nation Logo Animations",
        thumbnail: cn_logo_anims,
        main: [{type: "video", media: "6rkmDXnhPFo"}],
        url: "cn-logo-animations",
        subHeading: "Blender, HTML, CSS",
        description: "These were my first logo animations and I used Code Nation as my first 'dummy' client. I created these in my own time and 'pitched' the concepts to the CTO. They were used extensively and led to me making more for the company, such as the Christmas and Halloween animations. I used a mix of Blender 3D, HTML & CSS.",
        project_link: null,
        tags: ["animation"]
    },
    {
        name: "Code Nation Easter 2023",
        thumbnail: cn_easter,
        main: [{type: "video", media: "S_WGiVm9_rk"}],
        url: "cn-easter-animation",
        subHeading: "Blender",
        description: "A full end to end production, from concept, ideation, creation, animation and sound design. Adopted and deployed across all social channels.",
        project_link: null,
        tags: ["animation"]
    }
]