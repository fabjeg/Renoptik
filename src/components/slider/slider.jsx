import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./slider.css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import picture2 from "../../assets/imageCompareVieux.JPG";
import picture from "../../assets/imageCompareNeuf.JPG";
import picture5 from "../../assets/imageCompareVieux(4).JPG";
import picture6 from "../../assets/imageCompareNeuf(5).JPG";
import picture7 from "../../assets/picture/picture.jpg";
import picture8 from "../../assets/picture/imageCompareNeuf(7).jpg";
import picture9 from "../../assets/imageCompareNeuf(9).png";
import picture10 from "../../assets/imageCompareVieux(8).png";
import classNames from "classnames";

export function Slider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const pictures = [
    { before: picture2, after: picture },
    { before: picture5, after: picture6 },
    { before: picture7, after: picture8 },
    { before: picture9, after: picture10 },
  ];
  const getFileName = (src) => {
    if (!src) return "";
    const parts = src.split("/");
    return parts[parts.length - 1];
  };

  const getCustomClass = (src) => {
    const fileName = getFileName(src);
    switch (fileName) {
      case getFileName(picture5):
        return "custom-picture5";
      case getFileName(picture7):
        return "custom-picture7";
      case getFileName(picture8):
        return "custom-picture8";
      case getFileName(picture9):
        return "custom-picture9";
      case getFileName(picture10):
        return "custom-picture10";
      default:
        return "";
    }
  };
  return (
    <div className="slider">
      <h3 id="realisations">Nos Réalisations</h3>
      <div className="slider-container">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          allowTouchMove={false}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {pictures.map((pict, index) => (
            <SwiperSlide key={index}>
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage
                    className={classNames(getCustomClass(pict.before))}
                    src={pict.before}
                    alt="Avant"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    className={classNames(getCustomClass(pict.after))}
                    src={pict.after}
                    alt="Après"
                  />
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {pictures.map((pict, index) => (
            <SwiperSlide
              key={index}
              style={{ cursor: "pointer" }}
            >
              <img
                src={pict.before}
                alt="Miniature"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
