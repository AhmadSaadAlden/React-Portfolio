import React from 'react'
import Hero from '../components/Hero/Hero'
import personalImage from "../assets/image/hero/home2.png"
import AboutMe from '../components/AboutMe/AboutMe'
import { SkillsProgressProvider } from '../Context/SkillsProgressContext'
import EducationAndExperience from '../components/EducationAndExperience/EducationAndExperience'
import InfoEducationAndExperience from '../components/InfoEducationAndExperience/InfoEducationAndExperience'
import CallToAction from '../components/CallToAction/CallToAction'
import Portfolio from '../components/Portfolio/Portfolio'
import { CardProvider } from '../Context/CardContext'
import Contact from '../components/Contact/Contact'
import call from "../assets/image/contact/call.png"
import email from "../assets/image/contact/email.png"
import location from "../assets/image/contact/location.png"
const Home = () => {

    const info = [
        {
            title: "Welcome",
            spanTitle: "HEY!",
            subtitle: "I’m Ahmad Saad Alden, Front-End Developer",
            description: "I’m Ahmad, a creative Front-End Developer. I’ve been helping businesses to solve their problems with my developer for 1 years.",
            img: personalImage,
            alt: "personalImage",
            FollowMe : "Follow me on:",
        }
    ]

    const infoAboutme = [
      {
        title: "About Me",
        para: "Hello, my name is Ahmad Saad Alden. I am an Informatics Engineer, a graduate of the Higher Institute for Computer Engineering with a diploma in Computer, I have worked for many years in the field of computer and laptop maintenance, both Software & Hardware, in various centers. Later, I transitioned to the networking field and worked for three years in IT Help Desk Support. I have served as an IT Officer for one of the largest companies in the Middle East. Finally, in 2025, I ventured into the world of web development, starting my career as a Front-End Developer.",
      }
    ]

    const infoEducationAndExperience = [
      {
        title: "Master in Web Science (MWS)",
        para: "Syrian Virtual University",
      },
      {
        title: "Bachelor in information Technology (BAIT)",
        para: "Syrian Virtual University",
      },
      {
        title: "Computer Engineering",
        para: "Technical computer college",
      },
      {
        title: "Computer Technologies",
        para: "Amjad Ibrahim Vocational Secondary School of Informatics",
      },
    ]

    const infoCallToAction = [
      {
        title: "Try me out, risk free!",
        description: "If you’re not happy with the design after the first draft,I’ll refund your deposit,",
        span: " no questions asked",
        btn: "Contact",
      }
    ]

    const infoContact = [
      {
        mainSectionTitle: "Contact",
        sectionTitle: "Let’s Discuss Your",
        lastWordTitle: " Project",
        img1: call,
        img1Alt: "call",
        img2: email,
        img2Alt: "email",
        img3: location,
        img3Alt: "location",
        callTitle: "Call me",
        callDescripton: "+963 992719635 , +963 938069218",
        emailTitle: "Email me",
        emailDescription: "ahmadsaad01045@gmail.com",
        locationTitle: "Address",
        locationDescription: "Syria,Rif Damascus,sahnaya,flying zone",
        firstName: "Full name",
        lastName: "Your email",
        phoneNumber: "Phone number",
        notes: "Message",
        btn: "Send Message"
      }
    ]
  return (
    <CardProvider>
      <SkillsProgressProvider>
      <div>
          <Hero data={info} />
          <AboutMe data={infoAboutme}/>
          <EducationAndExperience>
            <InfoEducationAndExperience data={infoEducationAndExperience} />
          </EducationAndExperience>
          <CallToAction data={infoCallToAction} />
          <Portfolio />
          <Contact data={infoContact} />
      </div>
    </SkillsProgressProvider>
    </CardProvider>
  )
}

export default Home