import './App.css'
import Header from './components/header/header';
import Navbar from './components/nav/nav';
import Home from './components/home/home';
import Skill from './components/Skills/Skill'
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Qualifications from './components/qualifications/qualifications'


function WebContent() {
  return (
    <>
    <div className="circle1"></div>
    <div className="circle2"></div>
    
      <Header/>
      <Navbar />
      <Home />
      <Skill/>
      <Qualifications/>
      <Contact/>
      <Footer/>
      
     

    
    </>
  )
}
export default WebContent
