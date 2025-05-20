import "./imageCompare.css";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import picture from "../../assets/imageCompareNeuf.JPG";
import picture2 from "../../assets/imageCompareVieux.JPG";
import picture3 from "../../assets/imageCompareVieux(1).JPG";
import picture4 from "../../assets/imageCompareNeuf(2).JPG";
import picture5 from "../../assets/imageCompareVieux(4).JPG";
import picture6 from "../../assets/imageCompareNeuf(5).JPG";
import picture7 from "../../assets/picture/picture.jpg";
import picture8 from "../../assets/picture/imageCompareNeuf(7).jpg";
import picture9 from "../../assets/imageCompareNeuf(9).png";
import picture10 from "../../assets/imageCompareVieux(8).png";
import picture11 from "../../assets/imageCompareVieux(11).png";
import picture12 from "../../assets/imageCompareNeuf(12).png";

const getFileName = (src) => {
  const parts = src.split("/");
  return parts[parts.length - 1];
};

export function PictureComparison() {
  const pictures = [
    { before: picture2, after: picture },
    { before: picture3, after: picture4 },
    { before: picture5, after: picture6 },
    { before: picture7, after: picture8 },
    { before: picture10, after: picture9 },
    { before: picture11, after: picture12 },
  ];
  const getCustomClass = (src) => {
    const fileName = getFileName(src);
    switch (fileName) {
      case getFileName(picture4):
        return "custom-picture4";
      case getFileName(picture5):
        return "custom-picture5";
      case getFileName(picture7):
        return "custom-picture7";
      case getFileName(picture10):
        return "custom-picture10";
      case getFileName(picture11):
        return "custom-picture11";
      case getFileName(picture12):
        return "custom-picture12";
      default:
        return "";
    }
  };

  return (
    <div className="container_compare">
      <h3 id="realisations">Nos Réalisations</h3>
      <div className="container_compare_picture">
        {pictures.map((pict, index) => (
          <div
            key={index}
            className="container_compare_map"
          >
            <ReactCompareSlider
              className="custom-compare"
              itemOne={
                <ReactCompareSliderImage
                  src={pict.before}
                  alt="Avant"
                  className={getCustomClass(pict.before)}
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src={pict.after}
                  alt="Après"
                  className={getCustomClass(pict.after)}
                />
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
