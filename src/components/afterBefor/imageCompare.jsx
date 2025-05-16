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
import picture13 from "../../assets/imageCompareNeuf(13).png";
import picture14 from "../../assets/imageComparevieux(14).png";

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
    { before: picture9, after: picture10 },
    { before: picture11, after: picture12 },
    { before: picture13, after: picture14 },
  ];

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
                  className={
                    getFileName(pict.before) === getFileName(picture5)
                      ? "custom-picture5"
                      : ""
                  }
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src={pict.after}
                  alt="Après"
                  className={
                    getFileName(pict.after) === getFileName(picture4)
                      ? "custom-picture4"
                      : getFileName(pict.after) === getFileName(picture5)
                      ? "custom-picture5"
                      : getFileName(pict.after) === getFileName(picture8)
                      ? "custom-picture8"
                      : getFileName(pict.after) === getFileName(picture10)
                      ? "custom-picture10"
                      : getFileName(pict.after) === getFileName(picture12)
                      ? "custom-picture12"
                      : ""
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
