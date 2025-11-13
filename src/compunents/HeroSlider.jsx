import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router";

// Swiper core and required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const sliderPromise =fetch("http://localhost:3000/slider-home")
.then(res=>res.json())
const HeroSlider = () => {
  const sliders = use(sliderPromise)
  console.log(sliders.result);
  const slides = sliders.result
  // const slides = [
  //   {
  //     id: 1,
  //     title: "Expert Electricians Near You",
  //     desc: "Find reliable electricians for quick repairs and installations.",
  //     img: "https://i.ibb.co/mR4ZkYF/electrician.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "Professional Cleaning Services",
  //     desc: "Book trusted home and office cleaning professionals today.",
  //     img: "https://i.ibb.co/2ZfFmgx/cleaning.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Plumbing Solutions Made Easy",
  //     desc: "From leaks to installations, our plumbers are ready to help.",
  //     img: "https://i.ibb.co/Q9Lt3j3/plumber.jpg",
  //   },
  // ];

  
  return (
    <div className="md:w-full w-[400px] md:h-[80vh] h-[60vh]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        className="mySwiper w-[400px] md:w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative md:w-full w-[400px] h-full flex items-center justify-center bg-cover bg-center"
               style={{ backgroundImage: `url('${slide.imageURL}')` }}
            >
              {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
              <div className="relative z-10 text-center text-white px-4">
                <h2 className="text-4xl font-bold mb-3">{slide.category}</h2>
                <p className="text-lg mb-5 max-w-xl mx-auto">{slide.description}</p>
               <p>
                 <Link 
                   to='/services'
                     className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition"
                >
                  Explore
                </Link>
               </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;











// 2nd

// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

// import './styles.css';

// // import required modules
// import { EffectCoverflow, Pagination } from 'swiper/modules';

// export default function App() {
//   return (
//     <>
//       <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={'auto'}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         pagination={true}
//         modules={[EffectCoverflow, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img src="https://i.ibb.co.com/zVkmT54m/istockphoto-1440019701-612x612.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
