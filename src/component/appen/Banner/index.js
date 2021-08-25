import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { DiApple } from 'react-icons/di';
import { AiOutlinePlayCircle } from 'react-icons/ai';

const Banner = () => {



    return (
        <section id="banner">
            <div className="banner">
                <div className="textoverplay">
                    <div className="container">
                        <div className="banner-main">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                    <h1 className="banner-main-title">
                                        App Just <br></br>
                                        What Your Needed
                                    </h1>
                                    <p className="banner-main-pera">
                                        anky gormless cheeky bugger he nicked it golly gosh a arse
                                        show off show off pick your nose
                                    </p>
                                    <div className="row banner-main-button">
                                        <button className="normal-btn btn-lg banner-main-button-apple">
                                            <DiApple className="banner-main-button-apple-icon" />
                                            <span className="banner-main-button-apple-icon-title">
                                                App store
                                            </span>
                                        </button>
                                        <button className="normal-btn btn-lg banner-main-button-play">
                                            <AiOutlinePlayCircle className="banner-main-button-play-icon" />
                                            <span className="banner-main-button-play-icon-title">
                                                Google play
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 phonex">
                                    <div className="animate">
                                        <img class="img-fluid phone" src="images/iphone.png" alt="">
                                        </img>
                                    </div>
                                </div>
                            </div>
                            <div class="stars">
                                <div class="rec">
                                    <img class="img-fluid" src="images/banner/shape/Rectangle 18 copy 3.png" alt="">
                                    </img>
                                </div>
                                <div class="rec2">
                                    <img src="images/banner/shape/Rectangle 3.png" alt="">
                                    </img>
                                </div>
                                <div class="rec3">
                                    <img class="img-fluid" src="images/banner/shape/Shape 1.png" alt="">
                                    </img>
                                </div>
                                <div class="rec4">
                                    <img class="img-fluid" src="images/banner/shape/Shape 2.png" alt="">
                                    </img>
                                </div>
                                <div class="rec5">
                                    <img class="img-fluid" src="images/banner/shape/Shape 3 copy.png" alt="">
                                    </img>
                                </div>
                                <div class="rec6">
                                    <img class="img-fluid" src="images/banner/shape/Shape 3.png" alt="">
                                    </img>
                                </div>
                                <div class="rec7">
                                    <img class="img-fluid" src="images/banner/shape/Shape 4 copy 2.png" alt="">
                                    </img>
                                </div>
                                <div class="rec8">
                                    <img class="img-fluid" src="images/banner/shape/Shape 4 copy 3.png" alt="">
                                    </img>
                                </div>
                                <div class="rec9">
                                    <img class="img-fluid" src="images/banner/shape/Shape 4 copy.png" alt="">
                                    </img>
                                </div>
                                <div class="rec10">
                                    <img class="img-fluid" src="images/banner/shape/Shape 4.png" alt="">
                                    </img>
                                </div>
                                <div class="rec11">
                                    <img class="img-fluid" src="images/banner/shape/Shape 5.png" alt="">
                                    </img>
                                </div>
                                <div class="rec12">
                                    <img class="img-fluid" src="images/banner/shape/Rectangle 18 copy 3.png" alt="">
                                    </img>
                                </div>
                                <div class="rec13">
                                    <img class="img-fluid" src="images/banner/shape/Rectangle 18 copy 3.png" alt="">
                                    </img>
                                </div>
                                <div class="rec14">
                                    <img class="img-fluid" src="images/banner/shape/Rectangle 18 copy 3.png" alt="">
                                    </img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;
