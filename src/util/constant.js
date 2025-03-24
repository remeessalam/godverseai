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

export const companyDetails = {
  email: "godverseai@gmail.com",
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
    description: "Crafting User-Centric Solutions",
    icon: Smartphone,
    bgColor: "bg-blue-500",
  },
  {
    title: "UX/UI Design",
    link: "ux-ui-design",
    description: "Crafting User-Centric Solutions",
    icon: Users,
    bgColor: "bg-gray-900",
  },
  {
    title: "AR & VR Development",
    link: "ar-vr-development",
    description: "Crafting User-Centric Solutions",
    icon: Box,
    bgColor: "bg-gray-900",
  },
  {
    title: "Full Stack Web Development",
    link: "full-stack-web-development",
    description: "Full Stack Web Development",
    icon: Code,
    bgColor: "bg-gray-900",
  },
  {
    title: "AI Calling Agency",
    link: "ai-calling-agency",
    description: "Revolutionizing Business Communication",
    icon: Cpu,
    bgColor: "bg-gray-900",
  },
  {
    title: "Chatbot Development",
    link: "chatbot-development",
    description: "Smarter, Faster Customer Interaction",
    icon: Bot,
    bgColor: "bg-gray-900",
  },
  {
    title: "Artificial Intelligence Solutions",
    link: "artificial-intelligence-solutions",
    description: "Unlocking New Possibilities",
    icon: MemoryStick,
    bgColor: "bg-gray-900",
  },
  {
    title: "Robot Process Automation",
    link: "robot-process-automation",
    description: "Turning Data into Strategic Insights",
    icon: Bot,
    bgColor: "bg-gray-900",
  },
  {
    title: "Data Science & Analytics",
    link: "data-science-analytics",
    description: "Making Smarter Decisions",
    icon: Database,
    bgColor: "bg-gray-900",
  },
  {
    title: "Blockchain Development",
    link: "blockchain-development",
    description: "Secure and Transparent Solutions",
    icon: Cloud,
    bgColor: "bg-gray-900",
  },
  {
    title: "Game Development",
    link: "game-development",
    description: "Engaging Players with Cutting-Edge Technology",
    icon: Gamepad2,
    bgColor: "bg-gray-900",
  },
  {
    title: "IoT Development",
    link: "iot-development",
    description: "Connecting the Digital World",
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
      "Before we partnered with [Your Company Name], we were struggling to make sense of our data. Their business intelligence solutions have completely changed that. With the dashboards and real-time analytics they built for us, we can now track important metrics and make informed decisions with confidence. The ability to instantly access key insights has made a huge difference in our strategy and operations.",
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
    title: "Scalable Innovation for All",
    description:
      "Whether you're a local startup or an interplanetary enterprise, GodverseAI provides cutting-edge solutions tailored to your growth and success.",
  },
  {
    id: 2,
    icon: graph,
    title: "Scalable Innovation for All",
    description:
      "Whether you're a local startup or an interplanetary enterprise, GodverseAI provides cutting-edge solutions tailored to your growth and success.",
  },
  {
    id: 3,
    icon: rocket,
    title: "Scalable Innovation for All",
    description:
      "Whether you're a local startup or an interplanetary enterprise, GodverseAI provides cutting-edge solutions tailored to your growth and success.",
  },
  {
    id: 4,
    icon: start,
    title: "Scalable Innovation for All",
    description:
      "Whether you're a local startup or an interplanetary enterprise, GodverseAI provides cutting-edge solutions tailored to your growth and success.",
  },
];

export const faqs = [
  {
    question: "How do I use GodverseAI?",
    answer:
      "GodverseAI is a simple platform to use. After signing up, you can access all features from your dashboard. Simply navigate to the tool you want to use and follow the on-screen instructions.",
  },
  {
    question: "Is VAT included in the prices?",
    answer:
      "Yes, all our displayed prices include VAT. You don't need to worry about additional taxes being added at checkout.",
  },
  {
    question: "Can I add more users to a plan?",
    answer:
      "You can add additional users to your plan at any time. Each additional user comes with a small fee depending on your current plan.",
  },
  {
    question: "Can I share my login with a colleague?",
    answer:
      "We recommend against sharing logins for security reasons. Instead, you can add team members to your account, which gives them their own login credentials.",
  },
  {
    question: "Do I get an invoice for GodverseAI?",
    answer:
      "Yes, we automatically generate and email invoices for all payments. You can also access your complete invoice history from your account settings.",
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
    id: 1,
    icon: quality,
    title: "Quality",
    description:
      "We pursue excellence in every line of code, every design pixel, every cosmic dimension.",
  },
  {
    id: 1,
    icon: success,
    title: "Customer Success",
    description:
      " Your triumph is ours—measured by tangible impact and universal reach.",
  },
  {
    id: 1,
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
