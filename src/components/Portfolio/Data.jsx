import work1 from "../../Assests/E-coomerce.jpg";
import work2 from "../../Assests/Newsapp.jpg";
import work3 from "../../Assests/Cloud Note.jpg";
import work4 from "../../Assests/Textutil.jpg";
import work5 from "../../Assests/covid.jpg";
import work6 from "../../Assests/Spotify.jpg";
import work7 from "../../Assests/work-4.svg";
import work8 from "../../Assests/Digital clock.jpg";
import work9 from "../../Assests/Notes keeper.jpg";
import work10 from "../../Assests/QR.jpg";
import work11 from "../../Assests/work-6.svg";
// import work12 from "../../Assests/work-1.svg"

const Data = [
  {
    id: 1,
    image: work1,
    title: "E-commerce App",
    link: "https://ase-commerce.netlify.app/",
    github_link: "https://github.com/AmanSuryavanshi-1/E-commerce-App",
    description:
      "Created a responsive React-based E-commerce clone with product listings, shopping categories, and a user-friendly shopping cart.Committed to delivering a seamless shopping experience for users. Utilized JSX, ReactJs, and MaterialUI for a polished and efficient web app.",
    category: "Major",
  },
  {
    id: 2,
    image: work2,
    title: "NewsApp",
    link: "",
    github_link: "https://github.com/AmanSuryavanshi-1/NewsApp",
    description:
      "Created a News app using React. In this app, you can read all the latest news there and get yourself updated. I have used a News Api to fetch the genre wise latest news with infinite scroll feature and many such functionalities.",
    category: "Major",
  },
  {
    id: 3,
    image: work3,
    link: "https://cloud-note-two.vercel.app/",
    github_link: "https://github.com/AmanSuryavanshi-1/CloudNote",
    description:
      "CloudNote is a simple, powerful and cloud based CRUD application you can create, read, update and delete your notes on the cloud. It allows you to store any notes or important points on the cloud. The data is stored on the server. Created a login Page to grant access to the notes for its right user only. ",
    title: "CloudNote",
    category: "Major",
  },
  {
    id: 4,
    image: work4,
    link: "https://as-textutils.netlify.app/",
    github_link: "https://github.com/AmanSuryavanshi-1/TextUtils",
    description:
      "Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or reading time & many other useful functions to edit your text to your need.",
    title: "TextUtils",
    category: "Major",
  },
  {
    id: 5,
    image: work5,
    link: "",
    github_link: "https://github.com/AmanSuryavanshi-1/CovidTracker",
    description:
      "Created a Live Covid tracker app using React. In this app, you can see all the state wise live cases, recovered, Deaths etc in India . I have used a Covid Api to fetch the data.",
    title: "CovidTracker",
    category: "Major",
  },
  {
    id: 6,
    image: work6,
    link: "https://amansuryavanshi-1.github.io/Spotify-Clone/",
    github_link: "https://github.com/AmanSuryavanshi-1/Spotify-Clone",
    description:
      "Built Spotify-Clone a music player with all the features found in a typical music player which include plays, pauses, and seek songs options. The structure created by using HTML, CSS & JavaScript. ",
    title: "SpotifyClone",
    category: "Minor",
  },
  {
    id: 7,
    image: work7,
    link: "https://amansuryavanshi-1.github.io/Analog-Clock/",
    github_link: "https://github.com/AmanSuryavanshi-1/Analog-Clock",
    description:
      "Analog Clock shows time in hours, minutes, and seconds. The main skeleton was built by using HTML, CSS, and JavaScript. ",
    title: "Analog Clock",
    category: "Minor",
  },
  {
    id: 8,
    image: work8,
    link: "https://amansuryavanshi-1.github.io/Digital-Clock/",
    github_link: "https://github.com/AmanSuryavanshi-1/Digital-Clock",
    description:
      "Created Digital Clock by using HTML, CSS, and JavaScript as the main framework.",
    title: "Digital Clock",
    category: "Minor",
  },
  {
    id: 9,
    image: work9,
    link: "https://amansuryavanshi-1.github.io/Notes-Keeper-/",
    github_link: "https://github.com/AmanSuryavanshi-1/Notes-Keeper-",
    description:
      "Create a web-based notes pad with HTML for structure, CSS for styling, and JavaScript for interactivity. Allow users to input, save, and manage notes for efficient organization and retrieval.",
    title: "Notes Keeper",
    category: "Minor",
  },
  {
    id: 10,
    image: work10,
    link: "https://amansuryavanshi-1.github.io/QR-Code-Generator/",
    github_link: "https://github.com/AmanSuryavanshi-1/QR-Code-Generator",
    description:
      "Created a QR Code Generator using HTML CSS & JavaScript. In this app, you can enter a text or URL to generate a QR code for it. QR (Quick Response) codes are capable of storing lots of data, and users can easily access the information by scanning the QR code. ",
    title: "QR Code Generator",
    category: "Minor",
  },
  {
    id: 11,
    image: work11,
    title: "Calm Sleep Dashboard",
    link: "https://calm-sleep-dashboard.netlify.app/",
    github_link: "https://github.com/AmanSuryavanshi-1/Calm-Sleep-Assignment",
    description:
      "Create a dashboard that lists items that look like this {image: string, title: string, unique_plays:number, total_plays:number, completion_rate:number} display unique_plays total_plays as a graph and completion_rate with a progress bar maxing to 100.",
    category: "Minor",
  },
  // {
  //     id: 12,
  //     image: work12,
  //     link: "",
  //     github_link: "",
  //     description: " ",
  //     title: "Rotating Navbar",
  //     category: "Minor",
  // }
];

export default Data;
