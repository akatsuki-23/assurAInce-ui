import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = ({data}) => {
  return (
    <div className="mr-[23px]">
      <div className="w-full h-[72px] p-[10px] flex items-center gap-[11px] bg-white">
        <div className="w-[40px] h-[40px] rounded-[12px] bg-[#F2E7FE]">
        <img src={data?.iconUrl} alt="" className="w-[40px] h-[40px] rounded-[12px]" />
        </div>
        <div className="flex flex-col">
          <div className="font-medium text-[16px] text-[#101928]">
            {data?.name}
          </div>
          <div className="font-normal text-[14px] text-[#475367]">{data?.domain}</div>
        </div>
      </div>
    </div>
  );
};

const UsedToolsCarousel = ({data}) => {
  const settings = {
    slidesToShow: data?.length > 1 ? 4 : 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {data?.map((item) => (
          <Card key={item?.id} data={item}/>
        ))}
      </Slider>
    </div>
  );
};

export default UsedToolsCarousel;
