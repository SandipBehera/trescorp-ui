// Desc: This component is used to display the builder logo in the carousel.
import { useEffect, useMemo, useRef, useState } from 'react';
import './client.css';

const ClientLogoCarosel = ({builderData}) => {
  const [data, setData] = useState([]);
  useMemo(() => setData(builderData), [builderData]);

  const slideTrackRef = useRef(null);

  useEffect(() => {
    const slideTrack = slideTrackRef.current;
    const slides = Array.from(slideTrack.children);

   // Clone the first set of slides to the end
    slides.forEach((slide) => {
      const clone = slide.cloneNode(true);
      slideTrack.appendChild(clone);
    });

  }, []);
  
  return (
    <div className="slider">
    <div className="slide-track" ref={slideTrackRef}>

      {data ? (
        data.concat(data)?.map((image, index) => (
          <div className="slide" key={image.id}>
            <a href='/counter-party'  rel="noreferrer">
            <img src={image.builder_logo} alt={`Logo ${image.builder_name}`} />
            </a>
          </div>

        ))
      ) : (
        <p>No Client Logo found</p>
      )}

      {/* /.End Grid Post */}
    </div>
    </div>
  );
};
export default ClientLogoCarosel;
