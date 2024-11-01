import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Musaffarul",
    lastName: "Islam",
    initials: "dev", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: "💼",
            text: "Full Stack Developer at Thurs Tech OPC Pvt Ltd"
        },
        {
            emoji: '📂',
            text: 'Ask me about Node.js, React.js, Next.js, MongoDB etc'
        },
        {
            emoji: "💌",
            text: "dev.musaffarulislam@gmail.com"
        },
        {
            emoji: "🖥️",
            text: " I’m currently learning React Native, Three.js etc"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/musaffarul.islam.1",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/musaffarrr/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/musaffarulislam",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/musaffarul-islam-b5516b206/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },

    ],
    bio: "Hello! I'm Musaffar. A dedicated Full Stack Developer focused on building efficient, high-impact digital solutions with tools like Node.js, React.js, Next.js, and MongoDB. Known for crafting intuitive user interfaces and optimizing backend processes, I have a proven record of delivering projects that blend functionality with performance. From initial concept to deployment, I handle each stage with care, aiming to create solutions that stand out and make a real difference",
    skills:
        {
            proficientWith: ['javascript', 'typescript', 'react', 'next', 'node', 'express', 'mongodb', 'redis', 'tailwind', 'html5', 'css3', 'Doker'],
            exposedTo: ['sql', 'aws', 'jest', 'figma', 'adobe photoshope', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'coding',
            emoji: '💻'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'football',
            emoji: '⚽'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Waywin",
            live: "https://waywin-musaffarulislam.netlify.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/musaffarulislam/waywin-frontend", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Bookworm E-commerce",
            live: "https://bookworm-musaffarulislam.onrender.com/",
            source: "https://github.com/musaffarulislam/Bookworm-EcommerceApp-Node-MongoDB-Ejs",
            image: mock2
        },
        {
            title: "Littlemoments",
            live: "https://littlemoments.app",
            image: mock3
        },
        {
            title: "Todo",
            source: "https://github.com/musaffarulislam/TodoApp-React-Redux",
            image: mock4
        },
    ]
}