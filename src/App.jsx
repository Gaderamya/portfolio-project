// import AboutMe from "./components/Homepage/AboutMe";
// import Companies from "./components/Homepage/Companies";
// import Expertise from "./components/Homepage/Expertise";
// import Footer from "./components/Footer";
// import HeroSection from "./components/Homepage/HeroSection";
// import PrinciplesList from "./components/Homepage/PrinciplesList";
// import ProfessionalExperience from "./components/Homepage/ProfessionalExperience";
// import Skills from "./components/Homepage/Skills";
// import StatsSection from "./components/Homepage/StatsSection";
// import Navbar from "./components/Navbar";
// import Beginnings from "./components/Aboutmepage/Beginnings";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <HeroSection />
//       <StatsSection />
//       {/* <PrinciplesList /> */}
//       <ProfessionalExperience />
//       <Companies />
//       <Expertise />
//       <Skills />
//       <AboutMe />
//       <Footer />
//       <Beginnings />
//     </>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Homepage sections
import HeroSection from "./components/Homepage/HeroSection";
import StatsSection from "./components/Homepage/StatsSection";
import ProfessionalExperience from "./components/Homepage/ProfessionalExperience";
import Companies from "./components/Homepage/Companies";
import Expertise from "./components/Homepage/Expertise";
import AboutMe from "./components/Homepage/AboutMe";

// About Page
import Beginnings from "./components/Aboutmepage/Beginnings";
import AboutMeSection from "./components/Aboutmepage/AboutMeSection";
import QuickFacts from "./components/Aboutmepage/QuickFacts";
import Hometown from "./components/Aboutmepage/Hometown";
import MyEducation from "./components/Aboutmepage/MyEducation";
import AIMLdata from "./components/Aboutmepage/AIMLdata";
import Yoga from "./components/Aboutmepage/Yoga";

// Protfolio page
import Portfolio from "./components/Portfoliopage/Portfolio";
import ProfessionalEx from "./components/Portfoliopage/ProfessionalEx";

// Blog page
import Blog from "./components/Blogpage/Blog";
import Blogloans from "./components/Blogpage/Blogloans";
import PersonalInterests from "./components/Blogpage/PersonalInterests";

//Contact page
// import { Contact } from "lucide-react";
import Contact from "./components/Contact";
import PrinciplesList from "./components/Homepage/PrinciplesList";

// Home Page Wrapper
function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <PrinciplesList />
      <ProfessionalExperience />
      <Companies />
      <Expertise />
      <AboutMe />
    </>
  );
}

//Aboutme page Wrapper

function AboutmePage() {
  return (
    <>
      <Beginnings />
      <AboutMeSection />
      <QuickFacts />
      <Hometown />
      <MyEducation />
      <AIMLdata />
      <Yoga />
    </>
  );
}

// Protfolio page
function ProtfolioPage() {
  return (
    <>
      <Portfolio />
      <ProfessionalEx />
    </>
  );
}

// Blog Page Wrapper
function Blogpage() {
  return (
    <>
      <Blog />
      <Blogloans />
      <PersonalInterests />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutmePage />} />
        <Route path="/Portfolio" element={<ProtfolioPage />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
