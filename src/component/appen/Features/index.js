import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { FaCube } from 'react-icons/fa';
import { FaRegClone } from 'react-icons/fa';
import { BsFillLockFill } from 'react-icons/bs';
const Features = () => {



    return (
<section id="features">
     <div className="features">
          <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                            <div className="features-item text-center">
                                <div className="features-item-box">
                                  <FaCube className="features-item-box-icon" />
                                </div>
                                    <div className="features-item-main">
                                        <h2 className="features-item-main-title">
                                          Easy To Customise
                                       </h2>
                                        <p className="features-item-main-pera">
                                            Fanny around cup of char such a fibber
                                            cheesed off happy days well cobblers
                                            fanny around cup of char such
                                        </p>
                                    </div>
                            </div>
                    </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                            <div className="features-item text-center">
                                <div className="features-item-box">
                                <FaRegClone className="features-item-box-icon" />
                                </div>
                                <div className="features-item-main">
                                        <h2 className="features-item-main-title">
                                        Unique Design
                                        </h2>
                                        <p className="features-item-main-pera">
                                        Fanny around cup of char such a fibber
                                        cheesed off happy days well cobblers
                                        fanny around cup of char such
                                        </p>
                                </div>
                            </div>
                            </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                            <div className="features-item text-center">
                                <div className="features-item-box">
                                  <BsFillLockFill className="features-item-box-icon" />
                                </div>
                                <div className="features-item-main">
                                        <h2 className="features-item-main-title">
                                        Smart Security
                                        </h2>
                                        <p className="features-item-main-pera">
                                        Fanny around cup of char such a fibber
                                        cheesed off happy days well cobblers
                                        fanny around cup of char such
                                        </p>
                                </div>
                                </div>
                        </div>
                    </div>
                    <div className="features-stars">
                        <div className="features-rec1">
                            <img src="images/fea-shape/Shape 2.png" alt="">
                                </img>
                        </div>
                        <div className="features-rec2">
                            <img src="images/fea-shape/Shape 3 copy 3.png" alt="">
                                </img>
                        </div>
                            <div className="features-rec3">
                            <img src="images/fea-shape/Shape 3.png" alt="">
                                </img>
                        </div>
                        <div className="features-rec4">
                            <img src="images/fea-shape/Shape 4 copy.png" alt="">
                                </img>
                        </div>
                        <div className="features-rec5">
                            <img src="images/fea-shape/Shape 4.png" alt="">
                                </img>
                        </div>
                        <div className="features-rec6">
                            <img src="images/fea-shape/Shape 4 copy.png" alt="">
                                </img>
                        </div>
                    </div>
                </div>
        </div>
  </section>

    )
}

export default Features;
