/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';


function BestSeller() {

  const [items, setData] = useState([])

  const api = "https://esmael-saleh-recommend-50-samples.hf.space/api/best_selling?n=3"
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(api)
      const data = await response.json()
      setData(data)
    };
    getProduct()
  }, [])

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.product_id}
        className="bg-fifth px-2 py-4"
      >
        <div className="best-item d-flex m-auto">
          <img src={item.img_link_y} alt={item.altText} className="" />
        </div>
        <div className="price text-black d-flex justify-content-between">
          <h4 className='text-black-50'><del>$ {item.actual_price}</del></h4>
          <h4>$ {item.discounted_price}</h4>
        </div>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <>
      <div className="bestseller py-4 my-2">
        <div className="container">
          <div className="row flex-nowrap justify-content-between align-items-center flex-sm-row flex-column">
            <div className="col-md-4 col-6 mb-3" data-aos="fade-right">
              <div className="title">
                <h3 className="mb-5 fw-bold "><span className="sixth-color">Best</span> Seller</h3>
                <p className="lh-lg mb-5">You cannot inspect quality into the product; it is already there. I am not a product of my circumstances. I am a product of my decisions.</p>
                <Link to="/shop" className="btn primary-color text-white">View More</Link>
              </div>
            </div>
            <div className="col-md-4 col-6 products px-2 py-3 " >
              <Link to="/shop">
                <Carousel activeIndex={activeIndex} next={next} previous={previous} className="border rounded-3">
                  <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                  <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                  <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default BestSeller;
