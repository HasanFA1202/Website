// import React from 'react';
import Layout from '../Layout';
import Intro from '../component/Intro';
import Intro2 from '../component/Intro2';
import Sidebar from '../component/Sidebar';


const Home = () => {
  return (
    <Layout>
      <Intro/>
      <Sidebar/>
      <Intro2/>
    </Layout>
  );
};

export default Home;
