import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Card = ({data}) => {
  return (
    <div className='mr-[23px]'>
      <div className='items-center w-full h-[72px]  border border-[#E4E7EC] rounded-[12px] p-[16px] flex gap-[12px] bg-white pr-8'>
        <img src={data?.profileUrl ?? 'https://picsum.photos/200'} alt="" className="w-[40px] h-[40px] rounded-full" />
        <div className='flex flex-col'>
          <div className='font-medium text-[14px] text-[#101928]'>
            {data?.firstName} {data?.lastName}
          </div>
          <div className='font-normal text-[14px] text-[#475367]'>
           {data?.careerDetails ?? 'Graphic Designer'}
          </div>
        </div>
      </div>
    </div>
  );
}; 

const EmployeeCarousel = ({data}) => {

  const slides = data?.length > 1 ? 4 : 1;
  const settings = {
    slidesToShow: slides ,
    slidesToScroll: 1,
  };


  return (
      <Slider {...settings}>
        {data?.map((item) => (
          <Card key={item.id} data={item}/>
        ))}
      </Slider>

  );
};

export default EmployeeCarousel;
