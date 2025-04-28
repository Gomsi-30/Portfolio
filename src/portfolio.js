/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shivani Devrani",
  title: "Hi all, I'm Shivani",
  subTitle: emoji(
    "Recent BCA graduate pursuing to become a UI/UX Designer, 🚀 currently enhancing skills in UI/UX design using tools like Figma. Passionate about creating intutive and visually appealing user interfaces, with a focus on mastering front-end development to deliver engaging digital experiences. "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1a0D8Yh1Qqd0hw-H0RpJu3e0fzc3Z7vLQ/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Shivanidevrani",
  linkedin: "https://www.linkedin.com/in/shivani-devrani-629a66222/",
  gmail: "shivanidevrani5@gmail.com",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY UI-UX DESIGNER WHO WANTS TO EXPLORE DIVERSE TECH STACK",
  skills: [
    emoji(
      "⚡  Designing user-centric interfaces that blend creativity with functionality"
    ),
    emoji("⚡ Prototyping and building seamless Progressive Web Apps (PWA) with engaging user flows"),
    emoji(
      "⚡ Collaborating with tools like Figma and integrating assets into modern frameworks"
    )
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
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "Wireframe",
      // fontAwesomeClassname: "fab fa-solid fa-network-wired"
    },
    {
      skillName: "Prototype",
      // fontAwesomeClassname: "fab fa-swift"
    },
    
    {
      skillName: "User Interface (UI) Design",
      // fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "User Experience (UX) Research",
      // fontAwesomeClassname: "fab fa-python"
    },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Gyan Bharti Public School",
      logo: require("./assets/images/gyan.jpg"),
      // subHeader: "Master of Science in Computer Science",
      duration: "March 2018 - May 2019",
      desc: "Percentage - 81%",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "The Daffodils Public School",
      logo: require("./assets/images/daff.jpg"),
      // subHeader: "Bachelor of Science in Computer Science",
      duration: "January 2020 - May 2021",
      desc: "Percentage - 84%",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "Institute of Hospitality, Management and Sciences",
      logo: require("./assets/images/ihms.png"),
      subHeader: "Bachelor of Computer Application",
      duration: "August 2021 - June 2024",
      desc: "CGPA - 6.9",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "User Interface", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Prototype/Wireframe",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SKILL-BUILDING PROJECTS: MY JOURNEY OF CONTINUOUS LEARNING AND GROWTH",
  projects: [
    {
      image: require("./assets/images/grocery.png"),
      projectName: "Grocery app",
      projectDesc: "I designed a visually dynamic grocery website using Figma, with a strong focus on clean aesthetics and rich animations throughout the interface.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.figma.com/design/7Jw9XYVfg2icjO7viiMXQG/Grocery-App?node-id=0-1&t=G3H5rAfdXEBwM0So-1"
        }
      ]
    },
    {
      image: require("./assets/images/chat.avif"),
      projectName: "Chat Website Design",
      projectDesc: "Designed a modern chat application in Figma with a focus on intuitive navigation and user-friendly interface. Included key sections such as Chat section, Friends section, Notification section, Groups section.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.figma.com/design/ZqkOEfOvf4xe0Ntk3W6Rg4/Chat-App?node-id=0-1&t=ErEGcSMtImCFN3eh-1"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/e1.png"),
      projectName: "E-commerce Design",
      projectDesc: "I designed an e-commerce website using Figma, focusing on a clean and modern layout. The design includes a user-friendly interface, with clear navigation, product listings, and a streamlined checkout process.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.figma.com/design/DiofrKfT6WwkYNdo0K053l/E-Commerce?node-id=0-1&node-type=canvas"
        }
      ]
    },
    {
      image: require("./assets/images/fashion.png"),
      projectName: "Fashion E-commerce",
      projectDesc: "Designed an engaging fashion E-commerce website in Figma focused on providing a seamless user experience. Presented products in a smooth, visually appealing layout to enhance product visibility and engagement.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.figma.com/design/wFXq4XtWaV23wyTRC8WRZi/Fashion-Design-Ui?node-id=0-1&node-type=canvas"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆 "),
  subtitle:
    "Achievements, Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Team Leader for LMS Project",
      subtitle:
        "Successfully led a team of classmates in developing a comprehensive Learning Management System (LMS) as part of our BCA program.",
      image: require("./assets/images/lms.webp"),
      imageAlt: "Google Code-In Logo",
      // footerLink: [
      //   {
      //    name: "View Google Assistant Action",
      //     url: "https://drive.google.com/file/d/1EWypSSYsCm_3vahW68JBmh6x8q165O7K/view"
      //   },
        
      // ]
    },
//     English Fluency (03/2022 - 06/2022)
// Improved communication skills through English Fluency certification.
    {
      title: "UI/UX-FIGMA",
      subtitle:
        "Certified in English fluency: improved language proficiency and communication skills. Boosted confidence in professional interactions. Enabled fluent and effective global communication",
      image: require("./assets/images/figma.png"),
      imageAlt: "Google Assistant Action Logo",
      // footerLink: [
      //   {
      //     name: "View Certificate",
      //     url: "https://drive.google.com/file/d/1EWypSSYsCm_3vahW68JBmh6x8q165O7K/view"
      //   }
      // ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a design or just want to say hi? My Inbox is open for all.",
  number: "+91 6396258326",
  email_address: "shivanidevrani5@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
