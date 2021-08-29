import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Testimonial = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <section id="testimonial">
        <div className="testimonial">
           <div className="container box-1170">
              <div className="row align-items-center">
                 <div className="col-lg-12">
                       <div className="app-stars">
                          <div className="test-rec1">
                             <img src="images/test-shape/Rectangle3.png" alt="">
                                 </img>
                          </div>
                          <div className="test-rec2">
                             <img src="images/test-shape/Shape3copy3.png" alt="">
                                 </img>
                          </div>
                          <div className="test-rec3">
                             <img src="images/test-shape/Shape3.png" alt="">
                                 </img>
                          </div>
                          <div className="test-rec4">
                             <img src="images/test-shape/Shape4copy2.png" alt="">
                                 </img>
                          </div>
                          <div className="test-rec5">
                             <img src="images/test-shape/Shape4copy2.png" alt="">
                                 </img>
                          </div>
                           <div className="test-rec6">
                             <img src="images/test-shape/Shape4copy3.png" alt="">
                                 </img>
                          </div>
                       </div>
                        <div className="testimonial-main text-center">
                           <h2 className="testimonial-main-title">
                              Experts Trusts Us
                           </h2>
                            <p className="testimonial-main-pera">
                              Lorem Ipsum is simply dummy text of the <br></br>
                              printing and typesetting industry.Lorem
                              Ipsum has
                            </p>
                        </div>
                        <Slider {...settings}>
                        <div class="testimonial-item">
                              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                 <div class="testimonial-item-icon mx-auto">
                                    <p class="testimonial-item-icon-design">
                                       99
                                    </p>
                                  </div>
                                 <p class="testimonial-item-pera">
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                    an unknown printer took a galley of type and scrambled it to make a type specimen
                                    book. It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged.
                                 </p>
                                  <h4 class="testimonial-item-title">
                                    Andrew Williamson <br></br>
                                    <small class="testimonial-item-title-side">
                                       Graphics Designer
                                    </small>
                                 </h4>
                              </div>
                           </div>
                           <div class="testimonial-item">
                              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                 <div class="testimonial-item-icon mx-auto">
                                     <p class="testimonial-item-icon-design">
                                        99
                                     </p>
                                 </div>
                                  <p class="testimonial-item-pera">
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                    an unknown printer took a galley of type and scrambled it to make a type specimen
                                    book. It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged.
                                 </p>
                                 <h4 class="testimonial-item-title">
                                    Hamim Shariaear  <br></br>
                                    <small class="testimonial-item-title-side">
                                       Web Developer
                                    </small>
                                 </h4>
                              </div>
                           </div>
                           <div class="testimonial-item">
                              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                 <div class="testimonial-item-icon mx-auto">
                                     <p class="testimonial-item-icon-design">
                                        99
                                     </p>
                                 </div>
                                  <p class="testimonial-item-pera">
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                    an unknown printer took a galley of type and scrambled it to make a type specimen
                                    book. It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged.
                                 </p>
                                 <h4 class="testimonial-item-title">
                                       Naim Lasker  <br></br>
                                    <small class="testimonial-item-title-side">
                                      UX Designer
                                    </small>
                                 </h4>
                              </div>
                           </div>
                       </Slider>
                       {/* <div id="owl-demo2" class="owl-theme owl-carousel">


                           <div class="testimonial-item">
                              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                 <div class="testimonial-item-icon mx-auto">
                                     <p class="testimonial-item-icon-design">
                                         99
                                    </p>
                                  </div>
                                  <p class="testimonial-item-pera">
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                    an unknown printer took a galley of type and scrambled it to make a type specimen
                                    book. It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged.
                                 </p>
                                 <h4 class="testimonial-item-title">
                                    Naim Lasker <br>
                                    <Small  class="testimonial-item-title-side">
                                       UX Designer
                                    </Small>
                                 </h4>
                             </div>
                          </div>
                       </div> */}
                 </div>
              </div>
           </div>
      </div>
     </section>
    )
}

export default Testimonial;
