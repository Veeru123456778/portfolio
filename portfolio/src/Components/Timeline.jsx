import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import utube1 from "../assets/utube1.png";
import utube2 from "../assets/utube2.png";
import utube3 from "../assets/utube3.png";
import project2_a from "../assets/project2_a.jpg";
import project2_b from "../assets/project2_b.jpg";
import project2_c from "../assets/project2_c.jpg";
import portfolio1 from "../assets/portfolio1.png";
import portfolio2 from "../assets/portfolio2.png";
import food1 from "../assets/food1.png";
import food2 from "../assets/food2.png";
import food3 from "../assets/food3.png";
import mongodbIcon from "../assets/mongodb-icon.svg";
import reactIcon from "../assets/react-icon.svg";
import nodeIcon from "../assets/node-icon.svg";
import '../App.css';

const projects = [
  {
    title: "YouTube Monitoring Extension",
    date: "2023 - present",
    images: [utube1, utube2, utube3],
    icon: utube1,
    tags: ["#react", "#javascript", "#web api", "#tailwind css","#chrome-scripts"],
    link: "your-project-link",
    iconBackground: "#0891b2",
    description:"Browser Extension for YouTube is a React-based extension that monitors study versus non-study time, restricting non-study content when limits are exceeded to enhance user focus. It employs OAuth 2.0 for secure YouTube access, enabling personalized content control based on individual viewing patterns. Through collaboration with Web APIs and YouTube APIs, this extension ensures real-time data retrieval and effective monitoring of user activity."
  },
  {
    title: "Doubtify",
    date: "2023 - present",
    images: [project2_a, project2_b, project2_c],
    icon: nodeIcon,
    tags: ["#react", "#javascript", "#nodejs", "#tailwind css","#web-speech-api","#O-auth2.0"],
    link: "your-project-link",
    iconBackground: "#0891b2",
    description:"Doubtify, utilizing the MERN stack and Tailwind CSS, integrates voice input through the Web Speech API, reducing typing time by up to 50%. It allows multi-photo uploads with Cloudinary and offers a dynamic, responsive interface, ensuring a seamless user experience across devices."
  },
  {
    title: "Food Eaze",
    date: "2023 - present",
    images: [food1, food2, food3],
    icon: mongodbIcon,
    tags: ["#react", "#javascript", "#web api", "#tailwind css"],
    link: "your-project-link",
    iconBackground: "#0891b2",
    description:"FoodEaze is an online food delivery platform built with the MERN stack, enabling users to order food seamlessly. The project features an Admin Panel for efficient order management and secure payment processing via Stripe."
  },
  {
    title: "Portfolio",
    date: "2023 - present",
    images: [portfolio1, portfolio2],
    icon: reactIcon,
    tags: ["#react", "#nodejs", "#nodemailer", "#tailwind css"],
    link: "your-project-link",
    iconBackground: "#0891b2",
    description:"Welcome to my portfolio website, a showcase of my skills and creativity as a web developer. Built with React and styled using Tailwind CSS, this project demonstrates my ability to create responsive, modern web applications."
  }
];

const textColors = ["red-500", "blue", "white", "green-500"];

const Timeline = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  return (
    <div className='mt-20'>
      <VerticalTimeline>
        {projects.map((project, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: 'linear-gradient(135deg, #0f172a 0%, #0d47a1 100%)',
              color: '#fff',
              borderRadius: '15px',
              boxShadow: '0px 4px 12px rgba(0,0,0,0.3)'
            }}
            contentArrowStyle={{ borderRight: '7px solid #0f172a' }}
            date={project.date}
            iconStyle={{ background: project.iconBackground, color: '#fff', zIndex: 50 }}
            icon={<img src={project.icon} alt="icon" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }} />}
          >
            
            <div className='relative flex flex-col gap-6 group'>
  <div className='w-full h-1/2 overflow-hidden'>
    <Slider {...sliderSettings}>
      {project.images.map((img, imgIndex) => (
        <img key={imgIndex} src={img} className='w-full h-full object-cover' alt="project screenshot" />
      ))}
    </Slider>
   
    <div className='absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-80 z-40 flex items-center justify-center'>
  <p className='text-white z-50 text-lg p-3'>{project.description}</p>
</div>

  </div>

  <div className='w-full h-1/2 flex flex-col justify-center items-center gap-3 relative z-10'>
    <div className='flex justify-center'>
      <span className='text-lg sm:text-2xl font-bold'>{project.title}</span>
    </div>
    <div className='grid grid-cols-3 gap-2 items-center justify-center mx-2 sm:visible'>
      {project.tags.map((tag, tagIndex) => (
        <p key={tagIndex} className={`text-${textColors[tagIndex % textColors.length]}  p-1 border-none rounded-md`}>
          {tag}
        </p>
      ))}
    </div>
    <a href={project.link} className="border sm:border-2 rounded-md text-sm py-1 px-1 my-2 sm:py-1 sm:px-2">
      View Project
    </a>
  </div>
  {/* <div className='absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50 z-50'>
    <p className='text-white !important'>This is the description of the project.</p>
  </div> */}

  {/* <div className='absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50 z-40'>
    <p className='text-white z-50'>This is the description of the project.</p>
  </div> */}

  

</div>

          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
