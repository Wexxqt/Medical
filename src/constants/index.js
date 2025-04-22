import { people01, people02, people03, facebook, instagram, twitter as call, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "About Us",
  },
  {
    id: "clients",
    title: "Services",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Log in to your account",
    content:
      "Log in or register to book an appointment.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Book an appointment",
    content:
      "View available doctors and secure your slot.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Meet your doctor",
    content:
      "Meet your doctor and get the medical assistance you need.",

  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Visit the clinic at the CatSU Infirmary and let’s keep your smile strong and confident. See you there! 😁💙",
    name: "DR. GENEVIEVE S. DE CASTRO",
    title: "Dentist",
    img: people01,
  },
  // {
  //   id: "feedback-2",
  //   content:
  //     "Money makes your life easier. If you're lucky to have it, you're lucky.",
  //   name: "Steve Mark",
  //   title: "Founder & Leader",
  //   img: people02,
  // },
  {
    id: "feedback-3",
    content:
      "Your health matters! The Catanduanes State University Infirmary offers medical services to help you stay in top shape.",
    name: "DR. ABEGAIL M. ABUNDO",
    title: "Medical Officer III",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Students ",
    value: "14,000+",
  },
  {
    id: "stats-2",
    title: "Employees",
    value: "800+",
  },
  // {
  //   id: "stats-3",
  //   title: "Transaction",
  //   value: "$230M+",
  // },
];

export const footerLinks = [
  {
    title: "How was your experience today?",
    links: [
      {
        name: "Your feedback help us improve our services",
        link: "http://intranet.catsu.edu.ph:5001/catsu_css_unit/index.php/catsu_ol_css/ext_css/MDS-M",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.facebook.com/profile.php?id=100083183649509",
      },
    ],
  },{
    title: "FAQ",
    links: [
      {
        name: "What is e-catsulta?",
        link: "",
      },
      {
        name: "How can I book an appointment?",
        link: "",
      },
      {
        name: "Is it free?",
        link: "",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "mailto:catsu.mds2022@gmail.com",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/profile.php?id=100083183649509",
  },
  {
    id: "social-media-3",
    icon: call,
    link: "tel:09124320941",
  },
];


export const clients = [
  // {
  //   id: "client-1",
  //   logo: airbnb,
  // },
  // {
  //   id: "client-2",
  //   logo: binance,
  // },
  // {
  //   id: "client-3",
  //   logo: coinbase,
  // },
  // {
  //   id: "client-4",
  //   logo: dropbox,
  // },
];
