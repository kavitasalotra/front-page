import React, { useRef } from 'react';
import Slider from 'react-slick';
// import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// const Section = styled.div`
//   .button {
//     height: 2rem !important;
//     width: 2rem !important;
//     padding: 1.4rem !important;
//   }
//   @media screen and (min-width: 1024px) {
//     padding: 7.2rem 4.5rem !important;
//   }
//   background: ${(props) => props.theme.lightCreamAccent} !important;
//   .column.is-1 {
//     justify-content: center;
//     align-items: center;
//     display: flex;
//   }
// `;

const reviews = [
  {
    id: 1,
    name: 'S B S Tyagi',
    image: 'images/Testimonial-1.jpg',
    description:
      'I was very impressed by the professionalism and service level displayed by the staff of Pick My Laundry when I visited there. The most amazing thing about the process was that it took less than 60 minutes. As a strict disciplinarian, I always appreciate on-time delivery. I am looking forward to use the services of Pick My Laundry',
    icons: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
  },
  {
    id: 2,
    name: 'Chitra Johri',
    image: '/images/testimonila2.png',
    description:
      'With a very young daughter at home, we are very conscious about hygiene and quality of wash. Pick My Laundry is the only brand that offers live cleaning right in front of my eyes and thus gives me the assurance that my clothes won’t be mixed with those of the others. And at cost effective pricing.',
    icons: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
  },
  {
    id: 3,
    name: 'Priyanka Shrivastava',
    image: '/images/testimonila3.png',
    description:
      ' No matter what type of clothing I left for dry cleaning with this Laundry, everything comes back immaculate, smelling wonderfully and perfectly ironed. I can`t wait to wear it, it looks like brand new. I love coming here to do my laundry. The washing machines are very easy to use, you can choose the setting and type of wash you want. And the dryers indeed dry your clothes in a decent amount of time. Thank You Team!',
    icons: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
  },
];

const TestimonialItem = () => {
  const sliderRef = useRef();
  // const goNext = () => {
  //   sliderRef.current.slickNext();
  // };

  // const goPrev = () => {
  //   sliderRef.current.slickPrev();
  // };
  const beforeChange = () => {};
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange,

    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="section is-medium">
      <div className="container">
        <div className="columns is-mobile  is-gapless">
          {/* <div className="column is-1 is-hidden-mobile">
            <button
              type="button"
              className="button is-rounded has-text-white"
              onClick={goPrev}
            >
              <i className="fas fa-angle-left" />
            </button>
          </div> */}
          <div className="column is-12-mobile is-12-desktop">
            <Slider {...settings} ref={sliderRef}>
              {reviews &&
                reviews.map((node) => {
                  return (
                    <div
                      className="column is-7 has-text-centered  keen-slider__slide number-slide1"
                      key={node.id}
                    >
                      <div className="is-flex is-justify-content-center ">
                        <figure className="image is-128x128">
                          <img
                            src={node.image}
                            alt="projects"
                            className="is-rounded"
                          />
                        </figure>
                      </div>
                      <p className="is-size-6 has-text-black mb-5">
                        {node.description}
                      </p>
                      <div className="icons mb-1">
                        {node &&
                          node.icons?.map((item) => (
                            <i className="fa-solid fa-star" key={item.id} />
                          ))}
                      </div>
                      <p className="is-size-5 has-text-black">{node.name}</p>
                    </div>
                  );
                })}
            </Slider>
          </div>
          {/* <div className="column is-1  is-hidden-mobile">
            <button
              type="button"
              className="button is-rounded has-text-white"
              onClick={goNext}
            >
              <i className="fas fa-angle-right" />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;

// const data = [
//   {
//     image: 'images/Testimonial-1.jpg',
//     Description: 'ygjhkijnlkm',
//     Authorname: 'Mike Muller',
//   },
//   // {
//   //   image: 'images/Testimonial-1.jpg',
//   //   Description: 'ygjhkijnlkm',
//   //   Authorname: 'Mike Muller',
//   // },
//   // {
//   //   image: 'images/Testimonial-1.jpg',
//   //   Description: 'ygjhkijnlkm',
//   //   Authorname: 'Mike Muller',
//   // },
//   // {
//   //   image: 'images/Testimonial-1.jpg',
//   //   Description: 'ygjhkijnlkm',
//   //   Authorname: 'Mike Muller',
//   // },z
// export default function TestimonialItems() {
//   return (
//     <div className="section has-text-centered ">
//       <div className="columns is-centered ">
//         {data.map((item) => (
//           <div className="column is-3">
//             <figure className="image is-128x128">
//               <img src={item.image} alt="projects" className="is-rounded" />
//             </figure>

//             <p>{item.Description}</p>
//             <span>{item.Authorname}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
