import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Screenshot = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <section id="screenshot">
  <div className="screenshot">
    <div className="container">
       <div className="row">
          <div className="col-md-12">
            <div className="app-star">
               <div className="app-rec1">
                   <img src="images/apps/shape/Rectangle3.png" alt="">
                       </img>
               </div>
               <div className="app-rec2">
                   <img src="images/apps/shape/Shape1copy2.png" alt="">
                       </img>
               </div>
               <div className="app-rec3">
                   <img src="images/apps/shape/Shape2.png" alt="">
                       </img>
               </div>
               <div className="app-rec4">
                   <img src="images/apps/shape/Shape3copy.png" alt="">
                       </img>
               </div>
               <div className="app-rec5">
                   <img src="images/apps/shape/Shape3.png" alt="">
                       </img>
               </div>
               <div className="app-rec6">
                   <img src="images/apps/shape/Shape4copy2.png" alt="">
                   </img>
               </div>
               <div className="app-rec7">
                   <img src="images/apps/shape/Shape4copy3.png" alt="">
                   </img>
               </div>
               <div className="app-rec8">
                   <img src="images/apps/shape/Shape3copy.png" alt="">
                   </img>
               </div>
               <div className="app-rec9">
                   <img src="images/apps/shape/Shape4copy2.png" alt="">
                   </img>
               </div>
               <div className="app-rec10">
                   <img src="images/apps/shape/Shape2.png" alt="">
                   </img>
               </div>
               <div className="app-rec11">
                   <img src="images/apps/shape/Rectangle4copy.png" alt="">
                   </img>
               </div>
           </div>
              <div className="screenshot-main text-center">
                 <h2 className="screenshot-main-title">
                    App Screenshot
                 </h2>
                 <p className="screenshot-main-pera">
                   gormless cheeky bugger he nicked it golly
                   gosh a arse show off <br></br> show off pick your nose
                   and blow off cob 
                 </p>
              </div>
                    <Slider {...settings}>
                            <div>
                                <img src="images/apps/1.jpg" alt="">
                                </img>
                              </div>
                              <div>
                                <img src="images/apps/2.jpg" alt="">
                                </img>
                              </div>
                              <div>
                                <img src="images/apps/3.jpg" alt="">
                                </img>
                              </div>
                    </Slider>
              {/* <div id="owl-demo1" class="owl-theme owl-carousel owl">

           </div> */}

          </div>
       </div>
    </div>
 </div>

</section>
    )
}

export default Screenshot;
