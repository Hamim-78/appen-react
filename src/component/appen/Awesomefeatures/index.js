import React from 'react'
import { Container, Row, col } from 'react-bootstrap'
import { FaCogs } from 'react-icons/fa';
import { FaComments } from 'react-icons/fa';
import { BiCloudDownload } from 'react-icons/bi';
import { FaTasks } from 'react-icons/fa';


const Awesomefeatures = () => {
    return (
        <section className="awesome-features">
        <div className="details">
           <div className="container">
              <div className="row">
                 <div className="col-lg-12">
                    <div className="details-main text-center">
                      <h2 className="details-main-title">
                         Awesome Features
                      </h2>
                      <p className="details-main-pera">
                         Lorem Ipsum is simply dummy text of
                         the printing and typesetting industry.
                         Lorem Ipsum has
                      </p>
                    </div>
                    <div className="row">
                       <div className="col-lg-12">
                          <div className="row align-items-center">
                             <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                <div className="details-item">
                                   <div className="details-item-icon">
                                   <FaCogs className="details-item-icon-design" />
                                  </div>
                                   <div className="line">
                                      <span className="circle"></span>
                                  </div>
                                   <h4 className="details-item-title">
                                       Best Layout design
                                   </h4>
                                   <p className="details-item-pera">
                                     Lorem Ipsum is simply dummy text of the
                                     printing and typesetting industry. Lorem
                                     Ipsum has
                                  </p>
                                </div>
                                <div className="details-item">
                                  <div className="details-item-icon">
                                      <FaComments className="details-item-icon-design" />
                                  </div>
                                  <div className="line">
                                     <span className="circle"></span>
                                  </div>
                                   <h4 className="details-item-title">
                                      Best Layout design   
                                   </h4>
                                   <p className="details-item-pera">
                                     Id mucker jolly good sloshed so I said
                                     cup of tea cras bubble and squeak hotpot
                                     bum bag ld mucker jolly good sloshed
                                   </p>
                               </div>
                             </div>
                             <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 text-center">
                               <img className="img-fluid text-center details-item-image" src="images/awesome-features/Screen.png" alt="">
                               </img>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                               <div className="details-item">
                                   <div className="details-item-icon">
                                     <BiCloudDownload className="details-item-icon-design" />
                                  </div>
                                  <div className="line sec">
                                      <span class="circle sec"></span>
                                  </div>
                                  <h4 className="details-item-title">
                                     Best Layout design
                                  </h4>
                                   <p className="details-item-pera">
                                     Lorem Ipsum is simply dummy text of the
                                     printing and typesetting industry. Lorem
                                     Ipsum has
                                  </p>
                               </div>
                               <div className="details-item">
                                  <div className="details-item-icon">
                                     <FaTasks className="details-item-icon-design" />
                                  </div>
                                  <div className="line sec">
                                     <span className="circle sec"></span>
                                  </div>
                                  <h4 className="details-item-title">
                                     Best Layout design   
                                  </h4>
                                  <p className="details-item-pera">
                                     Id mucker jolly good sloshed so I said
                                     cup of tea cras bubble and squeak hotpot
                                     bum bag ld mucker jolly good sloshed
                                  </p>
                               </div>
                            </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </section>
    )
}

export default Awesomefeatures;
