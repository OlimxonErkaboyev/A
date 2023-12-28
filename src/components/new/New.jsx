import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  konditsioner,
  kirmoshina,
  tv,
  gazPlita,
} from "../../assets/images/index";
import arrowleft from "../../assets/icons/arrowleft.svg";
import arrowright from "../../assets/icons/arrowright.svg";
import "./New.css";

const New = () => {
  const swipeRef = React.useRef(null);

  const swipeNext = () => {
    if (swipeRef.current && swipeRef.current.swiper) {
      swipeRef.current.swiper.slideNext();
    }
  };

  const swipePrev = () => {
    if (swipeRef.current && swipeRef.current.swiper) {
      swipeRef.current.swiper.slidePrev();
    }
  };
  const newTecs = [
    {
      id: 1,
      image: konditsioner,
      title: "Инверторный кондиционер Artel Baraka Inverter",
    },
    {
      id: 2,
      image: kirmoshina,
      title: "Автоматическая стиральная машина Artel Grand Inverter ",
    },
    {
      id: 3,
      image: tv,
      title: "Телевизор Artel  A85LU9500",
    },
    {
      id: 4,
      image: gazPlita,
      title: "Мульти плита Artel Grand Appetito 04-Е",
    },
    {
      id: 5,
      image: konditsioner,
      title: "Инверторный кондиционер Artel Baraka Inverter",
    },
    {
      id: 6,
      image: kirmoshina,
      title: "Автоматическая стиральная машина Artel Grand Inverter ",
    },
    {
      id: 7,
      image: tv,
      title: "Телевизор Artel  A85LU9500",
    },
    {
      id: 8,
      image: gazPlita,
      title: "Мульти плита Artel Grand Appetito 04-Е",
    },
  ];

  return (
    <>
      <section className='new-section'>
        <div className='container'>
          <div className='new-wrapper'>
            <div className='new-start'>
              <h2 className='new-title'>Новинки</h2>
              <div className='btn-box'>
                <button onClick={swipePrev}>
                  <img src={arrowleft} alt='Arrow' className='arrowleft' />
                </button>
                <button onClick={swipeNext}>
                  <img src={arrowright} alt='Arrow' className='arrowright' />
                </button>
              </div>
            </div>
            <Swiper
              modules={[Navigation, A11y]}
              spaceBetween={50}
              slidesPerView={4}
              className='my-swiper'
              navigation={{ nextEl: ".arrowright", prevEl: ".arrowleft" }}
              onSwiper={(swiper) => (swipeRef.current = swiper)}>
              <ul className='newTec-list'>
                {newTecs.map((item, id) => (
                  <SwiperSlide key={id}>
                    <li className='newTec-list__item'>
                      <img
                        src={item.image}
                        alt='konditsioner'
                        width={320}
                        height={320}
                      />
                      <p className='newTec-list__item-title'>{item.title}</p>
                      <div className='color-btns'>
                        <button className='white'></button>
                        <button className='grey'></button>
                        <button className='black'></button>
                      </div>
                      <button className='newTec-btn'>Узнать больше</button>
                    </li>
                  </SwiperSlide>
                ))}
              </ul>
            </Swiper>
          </div>
          <hr />
        </div>
      </section>
    </>
  );
};

export default New;
