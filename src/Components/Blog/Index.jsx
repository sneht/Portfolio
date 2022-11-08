import React from "react";
import "./Blog.css";
import JsonFilee from "../../Json/data2.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  AOS.init();

  return (
    <>
      <div id="Blog"></div>
      <div className="Main_blog">
        <div data-aos="fade-right" className="Welcomee">
          <p>{JsonFilee.blog.head}</p>
        </div>
        <div className="parantCont">
          <Swiper
            spaceBetween={100}
            centeredSlides={true}
            slidesPerView={3}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              440: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              700: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              900: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1300: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide>
              <div className="main_card">
                <div className="container">
                  <div className="card">
                    <div className="face face1">
                      <div className="content">
                        <span className="stars"></span>
                        <h2 className="java">Java Script</h2>
                        <p className="java">{JsonFilee.blog.JS}</p>
                      </div>
                    </div>
                    <div className="face face2">
                      <h2>01</h2>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="main_card">
                <div className="container">
                  <div className="card">
                    <div className="face face1">
                      <div className="content">
                        <span className="stars"></span>
                        <h2 className="react">React</h2>
                        <p className="react">{JsonFilee.blog.React}</p>
                      </div>
                    </div>
                    <div className="face face2">
                      <h2>02</h2>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="main_card">
                <div className="container">
                  <div className="card">
                    <div className="face face1">
                      <div className="content">
                        <span className="stars"></span>
                        <h2 className="python">Python</h2>
                        <p className="python">{JsonFilee.blog.Python}</p>
                      </div>
                    </div>
                    <div className="face face2">
                      <h2>03</h2>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="main_card">
                <div className="container">
                  <div className="card">
                    <div className="face face1">
                      <div className="content">
                        <span className="stars"></span>
                        <h2 className="html">HTML</h2>
                        <p className="html">{JsonFilee.blog.HTML}</p>
                      </div>
                    </div>
                    <div className="face face2">
                      <h2>04</h2>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="main_card">
                <div className="container">
                  <div className="card">
                    <div className="face face1">
                      <div className="content">
                        <span className="stars"></span>
                        <h2 className="css">CSS</h2>
                        <p className="css">{JsonFilee.blog.CSS}</p>
                      </div>
                    </div>
                    <div className="face face2">
                      <h2>05</h2>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="main_card">
                <div className="container">
                  <div className="card">
                    <div className="face face1">
                      <div className="content">
                        <span className="stars"></span>
                        <h2 className="bootstrap">Bootstrap</h2>
                        <p className="bootstrap">{JsonFilee.blog.Bootstrap}</p>
                      </div>
                    </div>
                    <div className="face face2">
                      <h2>06</h2>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>{" "}
            {/* <SwiperSlide>
              <div className="main_card">
              <div className="container">
                <div className="card">
                  <div className="face face1">
                    <div className="content">
                      <span className="stars"></span>
                      <h2 className="react">React</h2>
                      <p className="react">{JsonFilee.blog.React}</p>
                    </div>
                  </div>
                  <div className="face face2">
                    <h2>02</h2>
                  </div>
                </div>
              </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="main_card">
              <div className="container">
                <div className="card">
                  <div className="face face1">
                    <div className="content">
                      <span className="stars"></span>
                      <h2 className="react">React</h2>
                      <p className="react">{JsonFilee.blog.React}</p>
                    </div>
                  </div>
                  <div className="face face2">
                    <h2>02</h2>
                  </div>
                </div>
              </div>
              </div>
            </SwiperSlide> */}
            {/* <SwiperSlide>
              <div className="container">
                <div className="card">
                  <div className="face face1">
                    <div className="content">
                      <span className="stars"></span>
                      <h2 className="react">React</h2>
                      <p className="react">{JsonFilee.blog.React}</p>
                    </div>
                  </div>
                  <div className="face face2">
                    <h2>02</h2>
                  </div>
                </div>
              </div>
            </SwiperSlide> */}
            {/* <SwiperSlide>
              <div className="container">
                <div className="card">
                  <div className="face face1">
                    <div className="content">
                      <span className="stars"></span>
                      <h2 className="python">Python</h2>
                      <p className="python">{JsonFilee.blog.Python}</p>
                    </div>
                  </div>
                  <div className="face face2">
                    <h2>03</h2>
                  </div>
                </div>
              </div>
            </SwiperSlide> */}
            {/* <SwiperSlide>
              <div className="container">
                <div className="card">
                  <div className="face face1">
                    <div className="content">
                      <span className="stars"></span>
                      <h2 className="cSharp">HTML</h2>
                      <p className="cSharp">{JsonFilee.blog.HTML}</p>
                    </div>
                  </div>
                  <div className="face face2">
                    <h2>04</h2>
                  </div>
                </div>

                <div className="card">
                  <div className="face face1">
                    <div className="content">
                      <span className="stars"></span>
                      <h2 className="bootstrap">BootStrap</h2>
                      <p className="bootstrap">{JsonFilee.blog.Bootstrap}</p>
                    </div>
                  </div>
                  <div className="face face2">
                    <h2>05</h2>
                  </div>
                </div>

                <div className="card">
                  <div className="face face1">
                    <div className="content">
                      <span className="stars"></span>
                      <h2 className="css">CSS</h2>
                      <p className="css">{JsonFilee.blog.CSS}</p>
                    </div>
                  </div>
                  <div className="face face2">
                    <h2>06</h2>
                  </div>
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </>
  );
};
export default Experience;
