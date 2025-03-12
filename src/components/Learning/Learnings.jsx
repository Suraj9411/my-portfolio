import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Learnings.css";

// Custom arrow components
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="customArrow prevArrow" onClick={onClick}>
      &#10094; {/* Unicode left arrow */}
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="customArrow nextArrow" onClick={onClick}>
      &#10095; {/* Unicode right arrow */}
    </button>
  );
};

const videoData = [
  { id: 1, url: "https://www.youtube.com/embed/JQVBGtZMqgU", route: "/learning1" },
  { id: 2, url: "https://www.youtube.com/embed/JQVBGtZMqgU", route: "/learning2" },
  { id: 3, url: "https://www.youtube.com/embed/JQVBGtZMqgU", route: "/learning3" },
  { id: 4, url: "https://www.youtube.com/embed/JQVBGtZMqgU", route: "/learning4" },
  { id: 5, url: "https://www.youtube.com/embed/JQVBGtZMqgU", route: "/learning5" },
  { id: 6, url: "https://www.youtube.com/embed/JQVBGtZMqgU", route: "/learning6" }
];

function Learnings() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section id="learningsSection">
      <h1 className="learningsTitle">Learning Takeaways</h1>
      <p className="learningDesc">
        This is the learnings videos for what I have learned from the academics
      </p>

      <div className="sliderContainer">
        <Slider {...sliderSettings}>
          {videoData.map((video) => (
            <div key={video.id} className="learningSlide">
              <div className="videoWrapper">
                <iframe
                  className="learningVideo"
                  src={video.url}
                  title={`Learning Video ${video.id}`}
                  loading="lazy"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <Link to={video.route} className="learningLinks">
                <p>Click here for more</p>
              </Link>
            </div>
          ))}
        </Slider>
      </div>

      <button className="learningsBtn">See more</button>
    </section>
  );
}

export default Learnings;
