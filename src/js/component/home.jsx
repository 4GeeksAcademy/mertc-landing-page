import React from 'react';
import Card from './Card'; 
const Home = () => {
  return (
    <div className="container">
      
      <div className="row">
        <Card title="Card 1" text="This is card 1." image="path/to/image1.jpg" />
        <Card title="Card 2" text="This is card 2." image="path/to/image2.jpg" />
        <Card title="Card 3" text="This is card 3." image="path/to/image3.jpg" />
        <Card title="Card 4" text="This is card 4." image="path/to/image4.jpg" />
      </div>
    </div>
  );
};

export default Home;
