import { Data1 } from "../Data/Data1";
import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider1 = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="bg-slate-700 p-5">
            <Slider ref={sliderRef} {...settings}>
                {Data1.map((ele , i) => (
                    <div key={i} className="">
                        <div className="flex justify-center items-center">
                        <div className="text-white">
                            <h2 className="text-3xl font-bold mb-2 text-center ">{ele.title}</h2>
                            <h3 className="text-xl mb-2 text-center p-10">{ele.category}</h3>
                            <p className="text-base text-center ">{ele.description}</p>
                        </div>
                        <div className="p-4 flex justify-center item-center">
                            <img src={ele.image} alt={ele.title} className="max-w-m h-auto rounded-md" />
                        </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Slider1;
