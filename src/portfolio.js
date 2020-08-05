
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Khwaja Umair",
  title: "This is Khwaja Umair",
  subTitle: emoji("A passionate to learn and having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."),
  resumeLink: ""
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/khumair",
  linkedin: "https://www.linkedin.com/in/khumair/",
  gmail: "khawja.umair@gmail.com",
};

// Your Skills Section

const skillsSection = {
  title: "What i can do",
  subTitle: "I can work on these technology",
  skills: [
    emoji("⚡ I worked as a freelance mostly on wordpress and Prestashop"),
    emoji("⚡ I am learning ReactJS since last 4 months and can build small frontend projects"),
    emoji("⚡ Integration of third party services such as AWS / RESTAPI")
  ],


  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "mysql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "google-api",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Developer",
      company: "Deco24",
      companylogo: require("./assets/images/deco24logo.png"),
      date: "June 2018 – Present",
      desc: "Working as a developer. My responsibility is to maintain design , Solve bugs, plugin setup",

    },
    {
      role: "Developer",
      company: "Livestonia",
      companylogo: require("./assets/images/livestonialogo.jpg"),
      date: "Dec 2017 – May 2018",
      desc: "The project is co-financed by the European Union through the Asylum, Migration and Integration Fund and the Ministry of the Interior of the Republic of Estonia.",
      descBullets: [
        "I handle all the tech part from UX/UI to develop the website (wordpress project)",
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "khumair", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Project",
  subtitle: "A STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR UI/UX",
  projects: [
    {
      image: require("./assets/images/multikeylogo.png"),
      link: "https://multikey.app/"
    }

  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Vunk Accelerator",
      subtitle: "I came up with the idea and make a team in Vunk startup, We were awarded Best B2B Idea. After 3 month of developement and design of hypesilo we got 1st prize",
      image: require("./assets/images/vunklogo.png"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/1aeCJE5hu6_nG97anXrdMDIo6FgpK8yNH/view?usp=sharing" },
        { name: "Award", url: "https://drive.google.com/file/d/1zOi-vAmgSPYx7RBcZn1NQFXMJiEoJq1r/view?usp=sharing" },

      ]
    },
    {
      title: "EIA",
      subtitle: "We awarded the best team award at Nice in 2015 and selected best ideas over the 50 ideas .",
      image: require("./assets/images/eialogo.png"),
      footerLink: [{ name: "Award", url: "https://drive.google.com/file/d/1BX4HPdI8weP8yVB35xcnstLhEBiVlzzs/view?usp=sharing" }]
    },

    {
      title: "Garage48",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/gradge48.png"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/1rWXk9FG7yoNu6lBObs5TpXit1V9x_vcY/view?usp=sharing" },
        { name: "About HY", url: "https://www.f6s.com/hireyoung" }
      ]
    }
  ]
};

// Blogs Section

const reactProject = {

  title: "ReactProject",
  subtitle: "I am developing With passionate for Developing cool stuff in ReactJs, I love write code in reactJS here are few projects i design by following turtorial.",

  blogs: [
    {
      url: "https://serene-meninsky-05c0a6.netlify.app/",
      title: "Image Finder",
      description: "Desgin project in ReactJS for learning purpose, Using Unsplash API"
    },
    {
      url: "https://5f2aa7a68c12c76e6aaff540--nervous-johnson-0baec1.netlify.app/",
      title: "Chat APP",
      description: "Project design in react using hooks, nodejs, express. in this app User can creat room and chat within a room. "
    },
    {
      url: "https://5f2aa7a68c12c76e6aaff540--nervous-johnson-0baec1.netlify.app/",
      title: "Registraion and Login Form",
      description: "Simple Registration and Signin Project design in reactJS "
    },
    {
      url: "https://5f2aac17482388cfa2443a8e--stoic-mirzakhani-dd6007.netlify.app/",
      title: "Youtube Viewer",
      description: "Integrate youtube API , simple search for user to search youtube video."
    },
    {
      url: "https://5f2adc1ca6b307011780270b--lucid-albattani-7950ce.netlify.app/",
      title: "Money Exchange rate",
      description: "Currently I am working on Currency rate, change from one to another with live rate by using exchangerate.io API"
    }


  ]
};


const contactInfo = {
  title: emoji("Contact Me"),
  subtitle: "You can contact me on",
  number: "+358-406693797",
  email_address: "khawja.umair@gmail.com"
};

//Twitter Section

export { greeting, socialMediaLinks, skillsSection, workExperiences, openSource, bigProjects, achievementSection, reactProject, contactInfo };
