import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//  pass details
const Card = ({ details, i }) => {
  console.log(details);

  return (
    <div className=" w-full">
      <div
        className="overflow-hidden relative w-[370px] h-[240px] rounded-[8px] flex justify-end flex-col"
        style={{
          backgroundImage: `url(${details.iconUrl.slice(0, -3)}${200 + i})`, // image is applied as bg
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute w-full h-full bg-gradient-to-t from-black"></div>
        <div className="px-[18px] py-[25px] flex flex-col z-10">
          {/* name */}
          <div className="text-white text-[17px] font-medium">
            {details?.name}
          </div>
          {/* description or something idk */}
          <div className="text-white text-[14px] font-normal">
            {details?.domain}
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
        {data.map((item, index) => (
          // pass item
          <Card key={index} details={item} i={index} />
        ))}
      </Slider>
    </div>
  );
};

export default AiToolsCarousel;
