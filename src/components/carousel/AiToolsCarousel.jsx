import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//  pass details
const Card = ({ details }) => {
  return (
    <div className="mx-[17px]">
      <div
        className="w-[370px] h-[240px] rounded-[8px] flex justify-end flex-col"
        style={{
          backgroundImage: 'url(images/adobe-firefly-card.jpg)', // image is applied as bg
        }}
      >
        <div className="px-[18px] py-[25px] flex flex-col">
          {/* name */}
          <div className="text-white text-[17px] font-medium">Adobe Fly</div> 
          {/* description or something idk */}
          <div className="text-white text-[14px] font-normal">
            AI Tool for image Editing
          </div>
        </div>
      </div>
    </div>
  );
};

// pass array here
const AiToolsCarousel = ({ data }) => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {/* map details */}
        {[1, 1, 1, 1, 1, 1].map((item, index) => (
          // pass item
          <Card key={index} />
        ))}
      </Slider>
    </div>
  );
};

export default AiToolsCarousel;
