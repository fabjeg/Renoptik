import './imageCompare.css'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import picture from '../../assets/imageCompareNeuf.JPG';
import picture2 from '../../assets/imageCompareVieux.JPG';
import picture3 from '../../assets/imageCompareVieux(1).JPG';
import picture4 from '../../assets/imageCompareNeuf(2).JPG';
import { ScrollComponent } from '../scrollComponent/scrollComponent';

// Fonction pour extraire le nom du fichier d'une image (sans son chemin)
const getFileName = (src) => {
  const parts = src.split('/');
  return parts[parts.length - 1]; // Retourne le dernier élément du tableau (le nom du fichier)
};

export function PictureComparison() {
  const pictures = [
    { before: picture2, after: picture },
    { before: picture3, after: picture4 }
  ];

  return (
    <div className="container_compare">
      <h3>Nos Réalisations</h3>
      <div className='container_compare_picture'>
        {pictures.map((pict, index) => (
          <div key={index}  className='container_compare_map'>
            <ReactCompareSlider
              itemOne={<ReactCompareSliderImage src={pict.before} alt="Avant" />}
              itemTwo={
                <ReactCompareSliderImage 
                  src={pict.after} 
                  alt="Après"
                  className={getFileName(pict.after) === getFileName(picture4) ? 'picture4' : ''}
                />
              }
              style={{ width: '80%', height: '80%' }}
              />
          </div>
        ))}
      </div>
    </div>
  );
}
