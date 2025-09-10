import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sethvin Nanayakkara",
  initials: "SN",
  url: "https://sethvin.dev",
  location: "Dallas, TX",
  locationLink: "https://www.google.com/maps/place/dallas+tx",
  description:
    "Senior Full-Stack Engineer specializing in AI-driven product development, multi-agent systems, and scalable platform architecture. Founding engineer with expertise in PydanticAI, React, and modern development frameworks.",
  summary:
    "Computer Science & Finance student at UT Dallas with extensive experience as a founding engineer. Specialized in orchestrating multi-agent systems, developing scalable backend services, and creating responsive user interfaces. Passionate about AI/ML, system architecture, and building products that bridge technology and user experience.",
  avatarUrl: "/me.jpeg",
  skills: [
    "Python",
    "C++",
    "Swift",
    "JavaScript",
    "TypeScript",
    "Java",
    "Next.js",
    "React",
    "Figma",
    "TensorFlow",
    "RAG",
    "Transformers",
    "PydanticAI",
    "Docker",
    "AWS",
    "PostgreSQL",
    "MongoDB",
    "Git",
    "XCode",
    "REST API",
    "NLP",
    "Data Analysis",
    "Distributed Systems",
    "CI/CD",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "nanasethvin@yahoo.com",
    tel: "+1(512)-591-3935",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/Sethvin-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/Sethvin-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#mailto:nanasethvin@yahoo.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Series.so",
      badges: ["Founding Engineer"],
      href: "https://series.so",
      location: "Manhattan, NY",
      title: "Lead Engineer / Lead Systems Architecture Design Engineer",
      logoUrl: "/series.svg",
      start: "August 2025",
      end: "Present",
      description:
        "Orchestrated multi-agent systems using PydanticAI and agent-to-agent (A2A) protocols, enabling reliable cross-agent workflows in production. Developed animations and responsive landing pages to enhance user conversion rates by 10% and improved cross-device compatibility. Built in-house backend services for secure user-data ingestion and enrichment, achieving 80%+ extraction accuracy. Delivered scalable platform services spanning API gateways and conversational AI agents, automating core business logic. Implemented internal iMessage delivery infrastructure using AppleScript and Mac clusters for user outbound messaging.",
    },
    {
      company: "CourseBite.ai",
      badges: ["Founding Engineer"],
      href: "https://coursebite.ai",
      location: "Dallas, TX",
      title: "Lead Engineer / Lead iOS Engineer",
      logoUrl: "/courseBite.svg",
      start: "May 2023",
      end: "May 2024",
      description:
        "Designed and implemented a full-stack bug reporting system, ensuring efficient tracking and resolution of issues. Developed animations and responsive landing pages to enhance user engagement and optimize cross-device compatibility. Created modular, reusable React components to improve code maintainability and accelerate development for the web application. Leveraged tools like Framer Motion, TypeScript, and Next.js to ensure seamless UI/UX experiences and meet modern design standards. Collaborated on strategic planning to lead the iOS development team, focusing on bridging web and mobile platforms.",
    },
    {
      company: "Apple",
      href: "https://www.apple.com",
      badges: ["Core OS Team"],
      location: "Austin, TX",
      title: "Software Engineering Intern",
      logoUrl: "/Apple.png",
      start: "May 2023",
      end: "December 2024",
      description:
        "Optimized Core System Daemons: Designed and implemented daemons supporting Apple Intelligence, reducing system latency by 30% and enhancing on-device inference capabilities across iOS, macOS, watchOS, and tvOS. Cross-Platform Framework Development: Created and integrated frameworks used by all Apple platforms, improving code efficiency by 25% through unified architecture and reducing API redundancy. Performance Testing and Bug Resolution: Increased test coverage by 40% and reduced critical bugs by 50% over four release cycles, significantly improving system stability and performance. Technical Leadership and Mentorship: Provided design guidance to multiple teams, leading to the successful delivery of complex projects and boosting team productivity by 15%.",
    },
    {
      company: "Vintage IT",
      href: "https://vintageits.com",
      badges: [],
      location: "Austin, TX",
      title: "Software Engineer",
      logoUrl: "/vintageIT.jpeg",
      start: "May 2023",
      end: "August 2023",
      description:
        "I developed and optimized a training pipeline for NLP models, leveraging hyperparameter tuning to enhance accuracy and precision by up to 20%. I created and integrated a full-stack web application using Figma and React, cutting operational costs by 25%, and designed a high-efficiency REST API, reducing latency by 60%. Utilizing Docker and AWS, I engineered scalable, secure, and modular deployment services. Additionally, I conducted data analysis on language processing experiments, producing insights that drove improvements in NLP model performance.",
    },
    {
      company: "Respawn Entertainment",
      href: "https://www.respawn.com",
      badges: [],
      location: "Chatsworth, CA",
      title: "Software Engineer",
      logoUrl: "/respawn.png",
      start: "May 2021",
      end: "August 2021",
      description:
        "I contributed to creating optimized 3D models for in-game assets and enhancing AI systems used in EA Sports games. I worked extensively with C++, Java, and Kotlin for Android development and completed an intensive, project-based p5.js curriculum led by EA engineers. I developed a climate change awareness program featuring mini-games and educational content using JavaScript, p5.js, CSS, and Java. Additionally, I led my team in problem-solving and project execution using the Scrum framework, fostering collaboration and iterative development.",
    },
  ],
  education: [
    {
      school: "University of Texas at Dallas",
      href: "https://utdallas.edu",
      degree: "B.S. Computer Science & B.S. Finance",
      logoUrl: "/utdLogo.jpeg",
      start: "2022",
      end: "May 2027",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "/ib.png",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "S&P 500 Machine Learning Predictor",
      href: "https://stock-prediction-z3na7gm9kcjwcxkaazaqyq.streamlit.app",
      active: true,
      dates: "April 2024 - June 2024",
      description:
        "Developed a machine learning pipeline to predict S&P 500 price movements using historical data fetched via yfinance library. Engineered dynamic features such as Close_ratio indicators to capture market trends. Built and evaluated models with Time-Series Cross-Validation, optimizing for Precision, Recall, F1-Score, and ROC-AUC metrics. Leveraged a Random Forest Classifier to deliver actionable insights, improving decision-making accuracy for users.",
      technologies: [
        "Python",
        "Jupyter Notebook",
        "Scikit-learn",
        "yfinance",
        "Pandas",
        "Streamlit",
      ],
      links: [
        {
          type: "App",
          href: "https://stock-prediction-z3na7gm9kcjwcxkaazaqyq.streamlit.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/stockPredPic.png",
      video:
        "",
    },
    {
      title: "Dynamic Solfége Gesture Recognition",
      href: "https://github.com/se4thvin/Dynamic-Solfege-Detection",
      active: true,
      dates: "January 2025 - November 2024",
      description:
        "Designed and implemented a real-time hand gesture recognition system for detecting solfège syllables. Leveraging Google MediaPipe for robust handmark detection, the project normalizes landmark coordinates as neural network inputs-reducing the need for large training datasets. Analyzed system performance and implemented improvements, resulting in a smoother user experience. Led regular code reviews, debugging, and performance tuning, maintaining high code quality and system reliability.",
      technologies: [
        "Python",
        "OpenCV",
        "TensorFlow",
        "Google MediaPipe",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/se4thvin/Dynamic-Solfege-Detection",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/solfRecog.png",
      video: "",
    },
    {
      title: "Spotify top 1000 songs data visiualizer",
      href: "https://github.com/se4thvin/Python-Data-Visualizer",
      active: true,
      dates: "2024",
      description:
        "Takes in a dataset and display visually using matplotlib, pandas, or other graphical plotting library.",
      technologies: [
        "Python",
        "Jupyter Notebook",
        "Pandas",
        "Matplotlib",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/se4thvin/Python-Data-Visualizer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/pythonDataVis.png",
      video: "",
    },
    {
      title: "Portfolio Site",
      href: "https://sethvin.dev",
      active: true,
      dates: "2025",
      description:
        "My react based portfolio",
      technologies: [
        "Next.js",
        "Typescript",
      ],
      links: [
        {
          type: "Website",
          href: "https://sethvin.dev",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/portfolioSite.png",
      video:
        "",
    },
  ],
  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 14th - 16th, 2018",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mobile application which delivers university campus wide events in real time to all students.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "FirstNet Public Safety Hackathon",
  //     dates: "March 23rd - 24th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
  //     icon: "public",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
  //     links: [],
  //   },
  //   {
  //     title: "DeveloperWeek Hackathon",
  //     dates: "February 3rd - 4th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
  //     links: [
  //       {
  //         title: "Github",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/cryptotrends/cryptotrends",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackDavis",
  //     dates: "January 20th - 21st, 2018",
  //     location: "Davis, California",
  //     description:
  //       "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
  //     win: "Best Data Hack",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/my6footprint",
  //       },
  //       {
  //         title: "ML",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/my6footprint-machine-learning",
  //       },
  //       {
  //         title: "iOS",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/CarbonWallet",
  //       },
  //       {
  //         title: "Server",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/wallet6-server",
  //       },
  //     ],
  //   },
  //   {
  //     title: "ETH Waterloo",
  //     dates: "October 13th - 15th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
  //     links: [
  //       {
  //         title: "Organization",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ethdocnet",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 15th - 17th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a virtual reality application allowing users to see themselves in third person.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Streamer Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/htn2017",
  //       },
  //       {
  //         title: "Client Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/RTSPClient",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The 6ix",
  //     dates: "August 26th - 27th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ShareShip/ShareShip",
  //       },
  //       {
  //         title: "Site",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://share-ship.herokuapp.com/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Stupid Hack Toronto",
  //     dates: "July 23rd, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/nsagirlfriend/nsagirlfriend",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Global AI Hackathon - Toronto",
  //     dates: "June 23rd - 25th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/TinySamosas/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "McGill AI for Social Innovation Hackathon",
  //     dates: "June 17th - 18th, 2017",
  //     location: "Montreal, Quebec",
  //     description:
  //       "Developed realtime facial microexpression analyzer using AI",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
  //     links: [],
  //   },
  //   {
  //     title: "Open Source Circular Economy Days Hackathon",
  //     dates: "June 10th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/genecis",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Make School's Student App Competition 2017",
  //     dates: "May 19th - 21st, 2017",
  //     location: "International",
  //     description: "Improved PocketDoc and submitted to online competition",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
  //     win: "Top 10 Finalist | Honourable Mention",
  //     links: [
  //       {
  //         title: "Medium Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
  //       },
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackMining",
  //     dates: "May 12th - 14th, 2017",
  //     location: "Toronto, Ontario",
  //     description: "Developed neural network to optimize a mining process",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
  //     links: [],
  //   },
  //   {
  //     title: "Waterloo Equithon",
  //     dates: "May 5th - 7th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "SpaceApps Waterloo",
  //     dates: "April 28th - 30th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/earthwatch",
  //       },
  //     ],
  //   },
  //   {
  //     title: "MHacks 9",
  //     dates: "March 24th - 26th, 2017",
  //     location: "Ann Arbor, Michigan",
  //     description:
  //       "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/threejs-planes",
  //       },
  //     ],
  //   },
  //   {
  //     title: "StartHacks I",
  //     dates: "March 4th - 5th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
  //     win: "1st Place Winner",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-ionic",
  //       },
  //       {
  //         title: "Source (Server)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "QHacks II",
  //     dates: "February 3rd - 5th, 2017",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed a mobile game which enables city-wide manhunt with random lobbies",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/human-huntr-react-native",
  //       },
  //       {
  //         title: "Source (API)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/human-huntr-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Terrible Hacks V",
  //     dates: "November 26th, 2016",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mock of Windows 11 with interesting notifications and functionality",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Portal Hackathon",
  //     dates: "October 29, 2016",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/UWPortalSDK/crowmark",
  //       },
  //     ],
  //   },
  // ],
} as const;
