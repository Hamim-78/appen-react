import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { FaCube } from 'react-icons/fa';
import { FaRegClone } from 'react-icons/fa';
import { BsFillLockFill } from 'react-icons/bs';
import Featuresitem from './Featuresitem';


const Features = () => {

    return (
<section id="features">
     <div className="features">
          <div className="container">
              <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                      < Featuresitem
                        title="Easy to Customize"
                      />
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                     < Featuresitem
                       title="Unique Design"
                      />
                   </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                     < Featuresitem
                      title="Funding Easy"
                     />
                  </div>
             </div>
              <div className="features-stars">
                  <div className="features-rec1">
                     <img src="images/fea-shape/Shape2.png" alt="">
                    </img>
                 </div>
                  <div className="features-rec2">
                      <img src="images/fea-shape/Shape3copy 3.png" alt="">
                      </img>
                  </div>
                  <div className="features-rec3">
                     <img src="images/fea-shape/Shape3.png" alt="">
                     </img>
                  </div>
                  <div className="features-rec4">
                     <img src="images/fea-shape/Shape4copy.png" alt="">
                     </img>
                  </div>
                  <div className="features-rec5">
                     <img src="images/fea-shape/Shape4.png" alt="">
                     </img>
                 </div>
                  <div className="features-rec6">
                     <img src="images/fea-shape/Shape4copy.png" alt="">
                     </img>
                 </div>
              </div>
          </div>
     </div>
  </section>

    )
}

export default Features;
