import codeYellow_main from "./assets/images/codeYellow_main.webp"

export const projects = [
    {
        name: "Code Yellow",
        image_main: codeYellow_main,
        url: "code-yellow",
        subHeading: "Unreal Engine 4, Blender",
        description: "This was my first go at game development. I did a short 3 week course on game development with UE4. Code Yellow was the game I had made by the end of these 3 weeks. The premise of the game is simple, you start on one end of the map and have to retrieve the banana and get back to the starting point. On your way you have to avoid the drones that patrol the array. Once you are spotted they will start shooting to stop you from stealing the banana. I used mainly Unreal Engines built in node based interface, blueprint, to create the logic for this game. I then worked on the AI system for the drones which meant moving them accross the map and shooting if you were in their line of sight. Finally to create the environment assets I modelled and textured them in Blender.",
        image_showcase: [codeYellow_main],
        project_link: null
    },
    {
        name: "Code Nation Website",
        image_main: codeYellow_main,
        url: "cn-website",
        subHeading: "Wordpress, Gatsby, GraphQL",
        description: "I helped in the development of the Code Nation company website. I was first part of the team that made the website using the framework Gatsby.js and GraphQL. Later the website was updated to Wordpress and again I was part of the team who re-created the website in wordpress.",
        image_showcase: [codeYellow_main],
        project_link: "https://wearecodenation.com/"
    },
    {
        name: "Code Nation Christmas 2022",
        image_main: codeYellow_main,
        url: "cn-chrsitmas-animation",
        subHeading: "Blender",
        description: "This was an animation that could be sent out by Code Nation to employers and alumni as part of the Christmas email that was sent out. I came up with the idea and made all the models. This was also my first time animating characters, I animated the santa and the reindeers pulling the sleigh.",
        image_showcase: [codeYellow_main],
        project_link: null
    }
]

// project info format
// {
//     name: "Project name",
//     image_main: "main image to display on home page",
//     url: "endpoint to visit",
//     subHeading: "extra info, languages/texh used",
//     description: "project description",
//     image_showcase: ["array of all other images to show"],
//     project_link: "link to see project if there is one"
// }