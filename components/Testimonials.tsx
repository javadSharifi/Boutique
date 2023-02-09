import React from "react";
import SliderForList from "shared/SliderForList";
import { SwiperSlide } from "swiper/react";

function Testimonials() {
  const data = [
    {
      name: "علی ",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با مجله",
      img: "https://i.pravatar.cc/100?img=1",
    },
    {
      name: "امیر ",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با مجله",
      img: "https://i.pravatar.cc/100?img=3",
    },
    {
      name: "هامد ",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با مجله",
      img: "https://i.pravatar.cc/100?img=2",
    },
    {
      name: "محمد",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با مجله",
      img: "https://i.pravatar.cc/100?img=4",
    },
    {
      name: "جواد",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با مجله",
      img: "https://i.pravatar.cc/100?img=5",
    },
  ];

  return (
    <div className="text-center pt-6 space-y-7">
      <h3 className="text-2xl "> اخریدن نظر کاربران</h3>
      <SliderForList key="Testimonials" delay={6000}>
        <>
          {data.map(({ description, img, name }) => (
            <>
              <SwiperSlide>
                <div
                  className="w-full text-start font-semibold mx-auto rounded-lg hover:border-red-200 shadow bg-white hover:shadow-md hover:shadow-red-200/50 border-2 border-gray-200 p-5 text-gray-800  mb-6"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src={img} alt="d" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-lg uppercase text-gray-600">
                        {name}
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">{description}</p>
                  </div>
                  <div className="rating rating-xs">
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2  bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </SwiperSlide>
            </>
          ))}
        </>
      </SliderForList>
    </div>
  );
}

export default Testimonials;
