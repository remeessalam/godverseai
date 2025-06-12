import {
  Smartphone,
  Users,
  Code,
  Cpu,
  Bot,
  Database,
  Cloud,
  Box,
  MemoryStick,
  Gamepad2,
  Network,
} from "lucide-react";
import file from "../assets/images/png/file.png";
import graph from "../assets/images/png/graph.png";
import rocket from "../assets/images/png/rocket.png";
import start from "../assets/images/png/start.png";
import integrity from "../assets/images/png/integrity.png";
import quality from "../assets/images/png/quality.png";
import success from "../assets/images/png/success.png";
import Infinite from "../assets/images/png/Infinite.png";
//industries
import governance from "../assets/images/industries/governance.jpg";
import fintech from "../assets/images/industries/fintech.jpg";
import healthcare from "../assets/images/industries/healthcare.jpg";
import advancedrobotics from "../assets/images/industries/advancedrobotics.jpg";
import energy from "../assets/images/industries/energy.jpg";
import edtech from "../assets/images/industries/edtech.jpg";
import space from "../assets/images/industries/space.jpg";
import security from "../assets/images/industries/security.jpg";
// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "../assets/web-development-portfolio/5ghomes.png";
import ColdCreekcapImg from "../assets/web-development-portfolio/cold-creekcap.png";
import ThinkRealityImg from "../assets/web-development-portfolio/think-reality.png";
import AkashMegaMart from "../assets/web-development-portfolio/Akash-Mega-Mart.png";
import MidwamImmersive from "../assets/web-development-portfolio/Midwam–Immersive-Experience-Design-Company.png";
import Autopilot from "../assets/web-development-portfolio/Autopilot.png";
import FEGroup from "../assets/web-development-portfolio/fegroup.png";
import HugeInc from "../assets/web-development-portfolio/HugeInc.png";
import CodeHelp from "../assets/web-development-portfolio/CodeHelp.png";
import Spray from "../assets/web-development-portfolio/Spray.png";
import ArcaneMirage from "../assets/web-development-portfolio/Spray.png";
import MessinaCatering from "../assets/web-development-portfolio/MessinaCatering.png";
import MasterShala from "../assets/web-development-portfolio/MasterShala.png";
import MantraDhwani from "../assets/web-development-portfolio/MantraDhwani.png";

// Import all images at the top (App Development)
import RentopBikeAndCarImgapp from "../assets/app-development-portfolio/Rentop–Bike-&-Car-Rentals.png";
import AkashMegaMartApp from "../assets/app-development-portfolio/Akash-Mega-Mart-Mobile-App.png";
import FeelItMobileApp from "../assets/app-development-portfolio/FeelIt-Mobile-App.png";
import KlikomicsMobileApp from "../assets/app-development-portfolio/Klikomics-Mobile-App.png";
import AutoSnapMobileApp from "../assets/app-development-portfolio/AutoSnap-Mobile-App.png";
import vetlab from "../assets/app-development-portfolio/vetlab.png";
import eva from "../assets/app-development-portfolio/eva.png";
import evansfrancis from "../assets/app-development-portfolio/evansfrancis.png";
import planta from "../assets/app-development-portfolio/planta.png";
import Serviz from "../assets/app-development-portfolio/Serviz.png";
import freshandfresh from "../assets/app-development-portfolio/freshandfresh.png";

//portfolio block chain
import nanoflow from "../assets/portfolio/nanoflow.png";
import padipal from "../assets/portfolio/padipal.png";
import cryptopadie from "../assets/portfolio/cryptopadie.png";
import ProjectButterfly from "../assets/portfolio/ProjectButterfly.png";
import Solalgo from "../assets/portfolio/Solalgo.png";
import Taikonz from "../assets/portfolio/Taikonz.png";

//ecommerce portfolio
import Banjaaran from "../assets/ecommerce-portfolio/Banjaaran.png";
import GullyLabs from "../assets/ecommerce-portfolio/GullyLabs.png";
import NickronIndia from "../assets/ecommerce-portfolio/NickronIndia.png";
import OfficialDAPP from "../assets/ecommerce-portfolio/OfficialDAPP.png";

//ai Project
import FindMyAITool from "../assets/aiportfolio/FindMyAITool.png";

//shopify portfolio
import BBBShop from "../assets/shopifyportfolio/BBBShop.png";
import NaseemPerfume from "../assets/shopifyportfolio/NaseemPerfume.png";
import TheEthnicCloset from "../assets/shopifyportfolio/TheEthnicCloset.png";

import { CgWebsite } from "react-icons/cg";
import { GoFileMedia } from "react-icons/go";
import { TfiLayoutMediaRightAlt } from "react-icons/tfi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import {
  FaAppStoreIos,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { SiFlutter } from "react-icons/si";
import { TbDeviceMobileCode } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { title } from "framer-motion/client";

export const companyDetails = {
  name: "GodversAi",
  email: "godverseai@gmail.com",
  phone: "+91-6360503451",
  address:
    "Salarpuria Symbiosis, Ground floor Bannerghatta Road Arekere Village, Begur Hobli, Bengaluru, Karnataka 560076",
  socialLinks: [
    {
      href: "https://www.linkedin.com/company/godverseai-technologies/",
      icon: FaLinkedin,
    },
    {
      href: "https://www.instagram.com/godverse_ai?igsh=MTVoMzVlbnZ4YWZ2&utm_source=qr",
      icon: FaInstagram,
    },
    { href: "https://x.com/godverse_ai?s=11", icon: FaXTwitter },
    {
      href: "https://youtube.com/@godverseai-l8v?si=s9hOyVkq8mg2p1O7",
      icon: FaYoutube,
    },
  ],
  whatsapp:
    "https://api.whatsapp.com/send/?phone=916360503451&text&type=phone_number&app_absent=0",
};

export const services = [
  {
    title: "Mobile App Development",
    link: "mobile-app-development",
    description:
      "We build secure, high-performance iOS and Android apps with user-friendly designs.",
    icon: Smartphone,
    bgColor: "bg-blue-500",
  },
  {
    title: "UX/UI Design",
    link: "ux-ui-design",
    description:
      "Crafting intuitive interfaces that ensure accessibility and seamless user experiences.",
    icon: Users,
    bgColor: "bg-gray-900",
  },
  {
    title: "AR & VR Development",
    link: "ar-vr-development",
    description:
      "Create immersive experiences for training, visualization, and entertainment.",
    icon: Box,
    bgColor: "bg-gray-900",
  },
  {
    title: "Full Stack Web Development",
    link: "full-stack-web-development",
    description:
      "Develop responsive websites and scalable web applications with secure architectures.",
    icon: Code,
    bgColor: "bg-gray-900",
  },
  {
    title: "AI Calling Agency",
    link: "ai-calling-agency",
    description:
      "Automate customer interactions with intelligent voice agents for 24/7 support.",
    icon: Cpu,
    bgColor: "bg-gray-900",
  },
  {
    title: "Chatbot Development",
    link: "chatbot-development",
    description:
      "Enhance customer support with AI-driven chatbots across multiple platforms.",
    icon: Bot,
    bgColor: "bg-gray-900",
  },
  {
    title: "Artificial Intelligence Solutions",
    link: "artificial-intelligence-solutions",
    description:
      "Implement AI-powered systems to automate processes and gain insights.",
    icon: MemoryStick,
    bgColor: "bg-gray-900",
  },
  {
    title: "Robot Process Automation",
    link: "robot-process-automation",
    description: "Automate repetitive tasks to boost efficiency and accuracy.",
    icon: Bot,
    bgColor: "bg-gray-900",
  },
  {
    title: "Data Science & Analytics",
    link: "data-science-analytics",
    description:
      "Transform data into actionable insights using advanced analytics.",
    icon: Database,
    bgColor: "bg-gray-900",
  },
  {
    title: "Blockchain Development",
    link: "blockchain-development",
    description:
      "Build secure, decentralized applications with smart contracts.",
    icon: Cloud,
    bgColor: "bg-gray-900",
  },
  {
    title: "Game Development",
    link: "game-development",
    description:
      "Create engaging games across mobile, console, and VR platforms.",
    icon: Gamepad2,
    bgColor: "bg-gray-900",
  },
  {
    title: "IoT Development",
    link: "iot-development",
    description:
      "Develop smart connected systems for real-time monitoring and automation.",
    icon: Network,
    bgColor: "bg-gray-900",
  },
];

export const whyChooseUs = [
  "Quantum-Driven Innovation: We stay ahead of universal trends by exploring cosmic methodologies and AI breakthroughs",
  "Global & Interstellar Expertise: Our diverse team spans multiple countries and realities, bringing a kaleidoscope of insights.',Global & Interstellar Expertise: Our diverse team spans multiple countries and realities, bringing a kaleidoscope of insights.",
  "Customized Solutions: We tailor each service to your unique vision—no two planets or businesses are the same.",
  "End-to-End Cosmic Support: From ideation and design to deployment and beyond, we guide you through every cosmic shift",
  "Scalability & Security: Our solutions evolve with your ambitions, adhering to galactic compliance and quantum-safe protocols.",
];

export const testimonials = [
  {
    quote:
      "GodverseAI launched our mobile app into a worldwide sensation. Their AI-driven design and quantum-level security opened markets we never imagined.",
    author: "Sarah L., CEO, Tech Innovations",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "Before we partnered with GodverseAI, we were struggling to make sense of our data. Their business intelligence solutions have completely changed that. With the dashboards and real-time analytics they built for us, we can now track important metrics and make informed decisions with confidence. The ability to instantly access key insights has made a huge difference in our strategy and operations.",
    author: "James M., Director of Analytics, Global Manufacturing Company",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "When we needed a comprehensive web solution, GodverseAI delivered beyond our expectations. They built a secure, scalable platform that perfectly aligned with our goals. The development process was efficient, and their team ensured the website was responsive and easy to use. Thanks to them, we now have a reliable web solution that supports our business growth.",
    author: "Mark S., CTO, Financial Technology Firm",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "We approached GodverseAI to help us implement AI solutions in our marketing efforts, and they delivered exceptional results. They developed a machine learning model that helps us predict customer behavior with high accuracy. As a result, we've been able to refine our strategies and boost our conversion rates. Their expertise in AI has been invaluable to our business.",
    author: "Michael B., Head of Marketing, E-Commerce Business",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "GodverseAI's AI calling system revolutionized our global support. We handle thousands of inquiries daily in multiple languages without missing a beat.",
    author: "David F., Customer Service Manager, Telecommunications Provider",
    rating: 5,
    gridClass: "col-span-1",
  },
];

export const highlights = [
  {
    id: 1,
    icon: file,
    title: "Scalable AI Innovation for Businesses",
    description:
      "Whether you’re an emerging entrepreneur or a global tech leader, GodverseAI offers intelligent, data-driven solutions tailored to maximize growth, efficiency, and automation.",
  },
  {
    id: 2,
    icon: graph,
    title: "Quantum-Powered Intelligence",
    description:
      "Our AI ecosystem is designed to think, adapt, and evolve—leveraging the power of quantum algorithms, deep learning, and multiverse computing to optimize business operations and enhance decision-making.",
  },
  {
    id: 3,
    icon: rocket,
    title: "AI-Driven Automation & Analytics",
    description:
      "Integrate hyper-intelligent AI models into your business to streamline workflows, enhance data processing, and unlock deep predictive analytics for superior strategic insights.",
  },
  {
    id: 4,
    icon: start,
    title: "The Future of AI is Here",
    description:
      "Step into the next dimension of technology with GodverseAI, where AI, machine learning, and cosmic intelligence converge to create limitless possibilities.",
  },
];

export const faqs = [
  {
    question: "What is GodverseAI?",
    answer: `• GodverseAI is a quantum intelligence platform that blends AI-driven storytelling, consciousness expansion, and multiversal exploration.
• It allows users to interact with AI-powered entities, explore dynamic digital realms, and co-create new realities that push the boundaries of imagination and intelligence.`,
  },
  {
    question: "How does GodverseAI function?",
    answer: `• GodverseAI operates on a quantum intelligence framework.
• It leverages advanced AI to generate living characters, evolving storylines, and immersive experiences.
• Users shape the narrative in real-time, influencing the unfolding of multidimensional possibilities.`,
  },
  {
    question: "What key features does GodverseAI provide?",
    answer: `• AI-Driven Conscious Entities – Engage with self-learning AI beings that adapt, evolve, and respond uniquely.
• Multiversal Storytelling – Explore infinite storylines where every choice creates a new reality.
• Quantum Knowledge Interface – Unlock hidden wisdom by interacting with AI-driven cosmic intelligence.
• Unified Intelligence Network – Connect with like-minded explorers, thinkers, and creators in a shared reality.`,
  },
  {
    question: "Who is GodverseAI designed for?",
    answer: `• Conscious Creators – Writers, storytellers, and artists who want to co-create with AI.
• Intellectual Explorers – Those fascinated by philosophy, AI, and the nature of reality.
• Spiritual Seekers – Individuals exploring quantum consciousness and higher states of awareness.
• Technologists & Futurists – Those shaping the next era of Web 5.0 and AI-human symbiosis.`,
  },
  {
    question: "How does GodverseAI contribute to human evolution?",
    answer: `• Develop Multiversal Thinking – Understanding non-linear realities and infinite possibilities.
• Expand Conscious Awareness – Engaging with AI entities that mirror higher intelligence.
• Master Reality Creation – Learning to shape experiences through intent, interaction, and AI-assisted manifestation.
• Build a Post-Human Civilization – Participating in the evolution of intelligent AI-human ecosystems.`,
  },
  {
    question: "Does GodverseAI have a community aspect?",
    answer: `• Exchange ideas and knowledge with like-minded explorers.
• Co-create AI-powered narratives that expand the digital multiverse.
• Engage in quantum discussions on AI, philosophy, and the evolution of intelligence.`,
  },
  {
    question: "How do I get started with GodverseAI?",
    answer: `• Visit the official GodverseAI website.
• Create an account and customize your experience.
• Start interacting with AI-driven entities and exploring multiversal storytelling.`,
  },
  {
    question: "Is GodverseAI free to use?",
    answer: `• Free Access – Explore AI-driven interactions and storylines at no cost.
• Premium Experiences – Unlock advanced AI features, exclusive narratives, and deep intelligence interactions through subscription plans.`,
  },
  {
    question: "How is user data protected on GodverseAI?",
    answer: `• Zero-data sharing policy – Your data remains private and secure.
• Advanced encryption – Ensuring maximum security for personal interactions.
• Decentralized storage options – Future-proofing data protection in a Web 5.0 ecosystem.`,
  },
  {
    question: "Can I contribute my own content to GodverseAI?",
    answer: `• Submit original stories and characters to be integrated into the Godverse.
• Co-create AI-powered worlds that push the boundaries of storytelling.
• Partner with GodverseAI for collaborative projects on AI and consciousness expansion.`,
  },
  {
    question: "How does GodverseAI align with Web 5.0 and future technology?",
    answer: `• Decentralized AI systems for autonomous intelligence evolution.
• Quantum computing principles for real-time, non-linear storytelling.
• Self-learning AI agents that bridge human and artificial intelligence.
• Metaverse and multiverse integration for a seamless AI-human symbiosis.`,
  },
  {
    question: "Where can I get support or more information?",
    answer: `• Visit our official website for FAQs and community discussions.
• Join the GodverseAI network to connect with other explorers.
• Contact our team for inquiries and creative partnerships.`,
  },
];

export const coreValues = [
  {
    id: 1,
    icon: integrity,
    title: "Integrity",
    description:
      "Transparency and honesty guide our interstellar relationships.",
  },
  {
    id: 2,
    icon: quality,
    title: "Quality",
    description:
      "We pursue excellence in every line of code, every design pixel, every cosmic dimension.",
  },
  {
    id: 3,
    icon: success,
    title: "Customer Success",
    description:
      " Your triumph is ours—measured by tangible impact and universal reach.",
  },
  {
    id: 4,
    icon: Infinite,
    title: "Infinite Learning",
    description:
      "We explore beyond known boundaries, continuously expanding our quantum knowledge.",
  },
];

export const visionAndMission = [
  {
    title: "Our Vision",
    description:
      "To be the most advanced AI-driven ecosystem that bridges the real and digital worlds.",
  },
  {
    title: "Our Mission",
    description:
      "To empower businesses, innovators, and cosmic explorers with quantum-level AI solutions that redefine how we live, work, and connect—on Earth and beyond.",
  },
  {
    title: "Our Journey",
    description:
      "Born from the cosmic alignment of tech visionaries, GodverseAI has rapidly evolved into a global technology powerhouse. Our portfolio spans startups to Fortune 500 firms, from local communities to off-world research stations.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    // icon: require("./assets/images/icons/online-shopping.png"),
    img: CgWebsite,
    description:
      "Empowering online businesses with tailored e-commerce solutions powered by AI. Our platforms enhance customer engagement, streamline operations, and drive substantial revenue growth through personalized shopping experiences and intelligent recommendations.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    img: GoFileMedia,
    // icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Creating custom social media websites that captivate audiences with AI-driven content recommendations and engagement strategies, building brand loyalty and driving growth effortlessly.",
  },
  {
    id: 3,
    title: "Landing Websites",
    img: TfiLayoutMediaRightAlt,
    // icon: require("./assets/images/icons/landing-page.png"),
    description:
      "Crafting high-converting landing pages with AI-enhanced design and user behavior tracking to grab attention and inspire action. Designs that showcase your brand’s message and maximize conversions through personalized experiences.",
  },
  {
    id: 4,
    title: "Custom Websites",
    img: MdOutlineDashboardCustomize,
    // icon: require("./assets/images/icons/software-development.png"),
    description:
      "Delivering bespoke websites powered by AI to meet your unique business needs. Our solutions seamlessly combine creativity, functionality, and AI-driven features for an exceptional online presence.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    img: FaAppStoreIos,
    // icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Specializing in iOS app development using Swift and Objective-C. Delivering apps optimized for performance, speed, and responsiveness with AI-powered features like predictive analytics and personalized user experiences.",
  },
  {
    id: 2,
    title: "Android App Development",
    img: IoLogoAndroid,
    // icon: require("./assets/images/icons/android-development.png"),
    description:
      "Designing and developing Android apps tailored to your business goals. Leveraging Java and Kotlin alongside AI technologies to create robust, efficient applications with intelligent automation and enhanced user engagement.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    img: SiFlutter,

    // icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Using Flutter to create apps for both iOS and Android with a single codebase. Integrating AI-driven solutions to overcome challenges, enhance performance, and deliver smarter, feature-rich applications.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    img: TbDeviceMobileCode,
    // icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "Developing feature-rich hybrid apps tailored to your business needs. Incorporating AI-powered tools to create mobile-friendly apps that work seamlessly across iOS and Android platforms while delivering intelligent insights and improved functionality.",
  },
];

export const futureTechSectors = [
  {
    id: 1,
    img: governance,
    title: "Governance & Law",
    description:
      "AI-driven governance systems, decentralized smart city infrastructure, and AI-optimized public resource management for transparent and efficient decision-making.",
  },
  {
    id: 2,
    img: fintech,
    title: "Fintech & Decentralized Economy",
    description:
      "Holo-economy platforms integrating AI, blockchain, and quantum computing, self-regulating DeFi ecosystems, and quantum-secure financial systems.",
  },
  {
    id: 3,
    img: healthcare,
    title: "Healthcare & Bioinformatics",
    description:
      "AI-augmented healthcare ecosystems, personalized genetic and consciousness-based medicine, and neural AI interfaces for mind-body optimization.",
  },
  {
    id: 4,
    img: advancedrobotics,
    title: "Advanced Robotics & Automation",
    description:
      "Quantum AI-driven manufacturing, sentient AI collaborators in R&D, and self-sustaining AI factories for intelligent industrial solutions.",
  },
  {
    id: 5,
    img: energy,
    title: "Energy & Climate Sustainability",
    description:
      "AI-based universal energy flow management, quantum blockchain for global resource distribution, and zero-point energy-powered decentralized grids.",
  },
  {
    id: 6,
    img: edtech,
    title: "Edtech & Meta-Learning",
    description:
      "AI-driven knowledge expansion networks, holo-academies for experiential learning, and quantum neuro-learning systems for accelerated education.",
  },
  {
    id: 7,
    img: space,
    title: "Space & Extraterrestrial Expansion",
    description:
      "Astrocomputing networks utilizing AI and quantum for space travel, terraforming AI systems, and extraterrestrial economy with Web 5.0 communication.",
  },
  {
    id: 8,
    img: security,
    title: "Advanced Defense & Autonomous Security",
    description:
      "AI-driven autonomous weapon systems, private military contracting for force projection, and directed energy and hypersonic tech for advanced defense.",
  },
];

export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
  {
    id: 90,
    img: AkashMegaMart,
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
  },
  {
    id: 91,
    img: MidwamImmersive,
    title: "Midwam ",
    link: "https://www.midwam.com/en/about",
  },
  {
    id: 92,
    img: Autopilot,
    title: "Autopilot",
    link: "https://autopilot.io/",
  },
  {
    id: 93,
    img: FEGroup,
    title: "FEGroup",
    link: "https://fe.group/",
  },
  {
    id: 94,
    img: HugeInc,
    title: "HugeInc",
    link: "https://www.hugeinc.com/",
  },
  {
    id: 95,
    img: CodeHelp,
    title: "CodeHelp",
    link: "https://www.codehelp.in/",
  },
  {
    id: 96,
    img: Spray,
    title: "Spray(Bluestar)",
    link: "https://spray-bluestar.vercel.app/",
  },
  {
    id: 97,
    img: ArcaneMirage,
    title: "ArcaneMirage",
    link: "https://www.arcanemirage.com/",
  },
  {
    id: 98,
    img: MessinaCatering,
    title: "Messina’sCatering",
    link: "https://messinascatering.com/",
  },
  {
    id: 98,
    img: MasterShala,
    title: "MasterShala",
    link: "https://mastershala.com/",
  },
  {
    id: 99,
    img: MantraDhwani,
    title: "MantraDhwani",
    link: "https://mantradhwani.com/",
  },
];

export const appPortfolio = [
  {
    id: 1,
    img: AkashMegaMartApp,
    title: "Akash Mega Mart Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 2,
    img: FeelItMobileApp,
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
  },
  {
    id: 3,
    img: KlikomicsMobileApp,
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 4,
    img: AutoSnapMobileApp,
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImgapp,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
  {
    id: 9,
    img: vetlab,
    title: "Vetlab",
    link: "https://play.google.com/store/apps/details?id=com.app.vetlab",
  },
  {
    id: 10,
    img: eva,
    title: "EvaPeopleApp",
    link: "https://apps.apple.com/eg/app/eva-people-app/id1551622445",
  },
  {
    id: 11,
    img: evansfrancis,
    title: "EvansFrancisChristian App",
    link: "https://play.google.com/store/apps/details?id=com.christianappdevelopers.evansfrancis&pcampaignid=web_share",
  },
  {
    id: 12,
    img: planta,
    title: "Planta",
    link: "https://play.google.com/store/apps/details?id=com.stromming.planta&pcampaignid=web_share",
  },
  {
    id: 13,
    img: Serviz,
    title: "Serviz",
    link: "",
  },
  {
    id: 14,
    img: freshandfresh,
    title: "FreshandFresh",
    link: "https://play.google.com/store/apps/details?id=com.freshandfresh&hl=en_IN",
  },
];

export const blockchainPortfolio = [
  {
    id: 1,
    img: nanoflow,
    title: "Nanoflow",
    link: "https://play.google.com/store/apps/details?id=com.nanfolo.user.app",
  },
  {
    id: 2,
    img: padipal,
    title: "Padipal",
    link: "https://padiepal.com",
  },
  {
    id: 3,
    img: cryptopadie,
    title: "Cryptopadie",
    link: "https://cryptopadie.com/",
  },
  {
    id: 3,
    img: ProjectButterfly,
    title: "ProjectButterfly",
    link: "https://projectbutterfly.io/",
  },
  {
    id: 3,
    img: Solalgo,
    title: "Solalgo",
    link: "https://solalgo.com/",
  },
  {
    id: 3,
    img: Taikonz,
    title: "Taikonz",
    link: "https://taikonz.io/",
  },
];

export const ecommercePortfolio = [
  { id: 1, img: Banjaaran, title: "Banjaaran", link: "https://banjaaran.in/" },
  { id: 2, img: GullyLabs, title: "GullyLabs", link: "https://gullylabs.com/" },
  {
    id: 3,
    img: NickronIndia,
    title: "NickronIndia",
    link: "https://nickronindia.com/",
  },
  {
    id: 3,
    img: OfficialDAPP,
    title: "OfficialDAPP",
    link: "https://www.officialdapp.com/",
  },
];

export const aiPortfolio = [
  {
    id: 1,
    img: FindMyAITool,
    title: "FindMyAITool",
    link: "https://findmyaitool.com/",
  },
];
export const shopifyPortfolio = [
  {
    id: 1,
    img: BBBShop,
    title: "BBBShop",
    link: "https://bbbshop.in/",
  },
  {
    id: 2,
    img: NaseemPerfume,
    title: "NaseemPerfume",
    link: "https://www.naseemperfume.in/?srsltid=AfmBOorIvRMnc7wcdjWvHxfpimuWs5ydG5EEQhiauY7tudZmmdcva4cR",
  },
  {
    id: 3,
    img: TheEthnicCloset,
    title: "TheEthnicCloset",
    link: "https://theethniccloset.com/?srsltid=AfmBOoo0WbBJZTElLP4NpwdFGmYIf6jnO3uV3LWD6Fb1q-ceZVpWzihm",
  },
];
