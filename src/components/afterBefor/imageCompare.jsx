import './imageCompare.css'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import picture from '../../assets/imageCompareNeuf.JPG';
import picture2 from '../../assets/imageCompareVieux.JPG';
import picture3 from '../../assets/imageCompareVieux(1).JPG';
import picture4 from '../../assets/imageCompareNeuf(2).JPG';
import picture5 from '../../assets/imageCompareVieux(4).JPG'
import picture6 from '../../assets/imageCompareNeuf(5).JPG'
import picture7 from '../../assets/picture.jpg'
import picture8 from '../../assets/imageCompareNeuf(7).JPG'

const getFileName = (src) => {
  const parts = src.split('/');
  return parts[parts.length - 1]; 
};

export function PictureComparison() {
  const pictures = [
    { before: picture2, after: picture },
    { before: picture3, after: picture4 },
    { before: picture5, after: picture6 },
    { before: picture7, after: picture8 }
  ];

  return (
    <div className="container_compare">
      <h3>Nos Réalisations</h3>
      <div className="container_compare_picture">
        {pictures.map((pict, index) => (
          <div key={index} className="container_compare_map">
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage 
                  src={pict.before} 
                  alt="Avant" 
                  className={
                    getFileName(pict.before) === getFileName(picture5) ? "custom-picture5" : ""
                  }
                />
              }
              itemTwo={
                <ReactCompareSliderImage 
                  src={pict.after} 
                  alt="Après"
                  className={
                    getFileName(pict.after) === getFileName(picture4) ? "custom-picture4" : 
                    getFileName(pict.after) === getFileName(picture5) ? "custom-picture5" : ""
                  }
                />
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
