import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PhotoCard from '../components/PhotoCard';
import thumbnail from '../assets/Thumbnail.jpg';
const MainPage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const Images = Array.from({ length: 9 },() => thumbnail);
    setImages(Images);
  }, []);

  return (
    <>
      <Header/>
      <main className="main">
        <section className="intro">
          <div className="intro-content">
            <h1 className="intro-title">Album example</h1>
            <p className="intro-text">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
            <button className='b1'>Main call to Action</button>            
            <button className='b2'>Secondary Action</button>
          </div>
        </section>
        <div className="album">
          <div className="album-grid">
            {images.map((url, index) => (
              <div className="album-col" key={index}>
                <PhotoCard imageUrl={url}/>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default MainPage;