const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const homeContent = {
  bio: `Throughout my entire life, I've always been around and intrigued by technology. As a child, I would help my dad with television production, editing shows and eventually even operating the camera. In grade school, I was always top of my class in computer science courses. In college, I ran with that fascination and graduated with a Bachelor of Science in Information Systems from Slippery Rock University. After college, I worked in IT Operations as a Systems Administrator. Nearly nine years later, wanting to further my knowledge, I enrolled in a Software Development bootcamp at Tech Elevator. Today, I'm looking to continue growing my software development career.`,
  languages: ["Java", "HTML", "CSS", "JavaScript"],
  hobbies: ["Music Production", "Guitar", "Cooking", "Playing with my dogs"],
  dogs: ["Daisy - 6 yr", "Cora - 2 yr"],
  resumeUrl:
    "https://drive.google.com/uc?export=download&id=1eX_JPZguzvuSCOUJlrNFK8W1mHSY29G_",
};

export const experienceItems = [
  {
    title: "IT Manager",
    company: "Mid-City Electric Co.",
    logo: asset("imgs/mce.png"),
    location: "Columbus, OH",
    timeframe: "2023 - Present",
    overview:
      "Leading the technology department and driving strategic initiatives to further the technological maturity of the company.",
    bullets: [
      "Spearheaded the implementation of an IT Service Management help desk solution that improved incident resolution and support delivery.",
      "Led the rollout of an asset management and inventory platform, creating more accurate tracking and better resource allocation.",
      "Implemented a softphone system that integrated voice communication into the broader digital infrastructure.",
    ],
  },
  {
    title: "Systems Administrator",
    company: "OpenExchange",
    logo: asset("imgs/oe.png"),
    location: "Remote",
    timeframe: "2021 - 2023",
    overview:
      "Full stack engineer and project management lead overseeing company IT infrastructure while maintaining less than 1% downtime annually.",
    bullets: [
      "Implemented SSO across AWS infrastructure using the existing Microsoft 365 tenant.",
      "Championed a security overhaul by deploying new tools and operational processes for endpoints and users.",
      "Configured and launched a service desk portal as a central IT services hub.",
    ],
  },
  {
    title: "Systems Administrator",
    company: "IRG Realty Advisors",
    logo: asset("imgs/irgra.png"),
    location: "Richfield, OH",
    timeframe: "2017 - 2021",
    overview:
      "Managed internal technology infrastructure including servers, employee devices, and business systems.",
    bullets: [
      "Researched, tested, implemented, and negotiated software solutions to simplify company procedures.",
      "Developed an email security training program that reduced simulated phishing rates from over 40% to under 10%.",
      "Promoted from Technical Support Specialist to Systems Administrator in April 2018.",
    ],
  },
  {
    title: "Information Technology Assistant",
    company: "Neshannock Township School District",
    logo: asset("imgs/ntsd.png"),
    location: "New Castle, PA",
    timeframe: "2016 - 2017",
    overview:
      "Managed the internal IT help desk to provide support for district staff, students, and devices.",
    bullets: [
      "Resolved hardware and software issues for 100+ staff members, 1200+ students, and 400+ endpoints.",
      "Served as the primary technology department contact for school staff.",
      "Maintained the school website through WordPress.",
    ],
  },
];

export const educationItems = [
  {
    title: "Tech Elevator",
    logo: asset("imgs/techelevator.png"),
    location: "Columbus, OH / Remote",
    timeframe: "August 2022 - April 2023",
    overview:
      "Completed a 30-week full-stack coding bootcamp with 700+ hours of hands-on software development training.",
  },
  {
    title: "Slippery Rock University",
    logo: asset("imgs/sru.png"),
    location: "Slippery Rock, PA",
    timeframe: "January 2012 - December 2015",
    overview: "Bachelor of Science in Information Systems.",
  },
];

export const projectItems = [
  {
    title: "Personal Website",
    image: asset("imgs/resume.png"),
    description: "This very website, now rebuilt as a React app.",
    date: "February 2023 - Ongoing",
    tech: "React, CSS, Vite",
    github: "https://github.com/gjacobs1992/gjacobs1992.github.io",
  },
  {
    title: "E-Commerce Store",
    image: asset("imgs/shoppingCart.png"),
    description:
      "Full stack e-commerce application with user accounts, product listings, shopping carts, wishlists, and secure data handling.",
    date: "April 2023",
    tech: "Java, SQL, Vue.js",
    github: "https://github.com/gjacobs1992/mock-web-store",
  },
  {
    title: "Tic-Tac-Toe",
    image: asset("imgs/ticTacToe.svg"),
    description: "A tic-tac-toe game with score keeping and win detection.",
    date: "March 2023",
    tech: "React, CSS",
    github: "https://github.com/gjacobs1992/ticTacToe",
    appPath: "/projects/tic-tac-toe",
  },
  {
    title: "Calculator",
    image: asset("imgs/calculator.png"),
    description: "Simple calculator application.",
    date: "February 2023",
    tech: "HTML, CSS, JavaScript",
    github: "https://github.com/gjacobs1992/calc-me-later",
  },
  {
    title: "Pokedex",
    image: asset("imgs/pokeball.png"),
    description:
      "Command line application that calls PokeAPI and returns information about a requested Pokemon.",
    date: "December 2022",
    tech: "Java",
    github: "https://github.com/gjacobs1992/pokedex",
  },
];
