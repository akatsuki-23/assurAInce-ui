import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Card = () => {
  return (
    <div className='mr-[23px]'>
      <div className='w-full h-[72px] p-[10px] flex items-center gap-[11px] bg-white'>
        <div className='w-[40px] h-[40px] rounded-[12px] bg-[#F2E7FE]'>
          {/* image */}
        </div>
        <div className='flex flex-col'>
          <div className='font-medium text-[16px] text-[#101928]'>
            Adobe firefly
          </div>
          <div className='font-normal text-[14px] text-[#475367]'>
            Design
          </div>
        </div>
      </div>
      </div>
  );
};

const UsedToolsCarousel = () => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {[1, 1, 1, 1, 1, 1].map((image, index) => (
          <Card key={index} />
        ))}
      </Slider>
    </div>
  );
};

export default UsedToolsCarousel;
