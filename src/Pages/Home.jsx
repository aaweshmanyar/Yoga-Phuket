import React from 'react';
import Hero from '../components/Hero/Hero';
import Cards from '../components/Cards/Cards';
import Ourinstructor from '../components/Team/Ourinstructor.jsx';
import MainLayout from '../Layouts/MainLayout';
import Facts from '../components/Facts/Facts';
import Courses from '../components/Courses/Courses';
import TeamComponent from '../components/Team/Team';
import Newsletter from '../components/Newslatter/Newsletter'
import Contact from '../components/Contact/Contact';
import About from '../components/Aboutyogacenter/Yogacenter';
import Reveiw from '../components/Reveiw/Reveiw';
import OurClasses from '../components/Classes/OurClasses.jsx';
import Aboutcenter from '../components/About/Aboutcenter.jsx';






const Home = () => {
  return (
    <MainLayout>
    <Hero />
       {/* <Cards /> */}
       
       <Aboutcenter/>
       <Reveiw/>
       <OurClasses/>
       <Ourinstructor />
    </MainLayout>
  );
};

export default Home;
