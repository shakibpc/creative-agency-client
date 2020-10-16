import React from 'react';
import Client from '../Client/Client';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ImgCarousel from '../ImgCarousel/ImgCarousel';
import Services from '../Services/Services';


 
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Client></Client>
            <Services></Services>
            <ImgCarousel></ImgCarousel>
            <ClientFeedback></ClientFeedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;