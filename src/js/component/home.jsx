import React from 'react';
import Card from './Card'; 
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Navbar/>     
      <div className="container ">
        <Jumbotron/>
        <div className="container row">
          <Card title="Card 1" text="This is card 1." image="https://placehold.co/500x325" />
          <Card title="Card 2" text="This is card 2." image="https://placehold.co/500x325" />
          <Card title="Card 3" text="This is card 3." image="https://placehold.co/500x325" />
          <Card title="Card 4" text="This is card 4." image="https://placehold.co/500x325" />
        </div>
      </div>
      <Footer/>
    </>
    );
};

export default Home;
