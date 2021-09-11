import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { FaPlay } from 'react-icons/fa';
import { FaRegStopCircle } from 'react-icons/fa';

const Video = () => {


   const [play, setPlay] = useState(false)


   return (
      <section>
         <div className="video">
            <div class="container">
               <div class="row">
                  <div className="col-md-12 align-items-center">
                     <div className="awesome-stars">
                        <div className="awesome-rec1">
                           <img src="images/fea-shape/Shape2.png" alt="">
                           </img>
                        </div>
                        <div className="awesome-rec2">
                           <img src="images/video/Rectangle3.png" alt="">
                           </img>
                        </div>
                        <div className="awesome-rec3">
                           <img src="images/video/Rectangle4copy2.png" alt="">
                           </img>
                        </div>
                        <div className="awesome-rec4">
                           <img src="images/video/Shape1copy3.png" alt="">
                           </img>
                        </div>
                        <div className="awesome-rec5">
                           <img src="images/video/Shape4copy.png" alt="">
                           </img>
                        </div>
                        <div className="awesome-rec6">
                           <img src="images/video/Shape3copy3.png" alt="">
                           </img>
                        </div>
                        <div className="awesome-rec7">
                           <img src="images/video/Shape3copy.png" alt="">
                           </img>
                        </div>
                        <div className="awesome-rec8">
                           <img src="images/video/Shape3.png" alt="">
                           </img>
                        </div>
                        <div className="awesome-rec9">
                           <img src="images/video/Shape4copy3.png" alt="">
                           </img>
                        </div>
                     </div>
                     <div class="video-main">

                        {play == true ? <div>
                           <div className="video-main-item-stop">
                              <FaRegStopCircle onClick={() => setPlay(false)} className="video-main-item-stop-icon" />
                              <a className="play-btn video-main-item-icon-button" title="This is a video" href=""></a>
                           </div>
                           <ReactPlayer
                           className="video-main-design"
                              playing={play}
                              config={{
                                 youtube: {
                                    playerVars: { showinfo: 0, controls: 1 }
                                 }
                              }}
                              url='https://www.youtube.com/watch?v=d9IKg-nizhQ' />
                        </div>
                           :
                           <div>
                              <div className="overlay-video">
                              </div>
                              <div className="video-main-item">
                                 <h2 className="video-main-item-title">
                                    View Our App Tutorial
                                 </h2>
                                 <p className="video-main-item-pera">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. LoremIpsum
                                    has
                                 </p>
                                 <div class="video-main-item-icon">
                                    <FaPlay onClick={() => setPlay(true)} className="video-main-item-icon-design" />
                                    <a className="play-btn video-main-item-icon-button" title="This is a video" href=""></a>
                                 </div>
                              </div>
                           </div>
                        }

                     </div>

                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Video;