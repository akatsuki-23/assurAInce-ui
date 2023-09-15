import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Card = () => {
  return (
    <div className='mr-[23px]'>
      <div className='items-center w-full h-[72px] border border-[#E4E7EC] rounded-[12px] p-[16px] flex gap-[12px] bg-white'>
        <div className='w-[40px] h-[40px] rounded-full bg-[#F2E7FE]'>
          {/* image */}
        </div>
        <div className='flex flex-col'>
          <div className='font-medium text-[14px] text-[#101928]'>
            Jestin Thomas
          </div>
          <div className='font-normal text-[14px] text-[#475367]'>
            Graphic Designer
          </div>
        </div>
      </div>
    </div>
  );
};

const EmployeeCarousel = () => {
  const settings = {
    slidesToShow: 3,
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

export default EmployeeCarousel;
