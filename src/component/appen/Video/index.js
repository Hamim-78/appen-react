import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { FaPlay } from 'react-icons/fa';

const Video = () => {


   const [play, setPlay] = useState(false)


   return (
      <section>
         <div class="video">
            <div class="container">
               <div class="row">
                  <div class="col-md-12 align-items-center">
                     <div class="awesome-stars">
                        <div class="awesome-rec1">
                           <img src="images/fea-shape/Shape2.png" alt="">
                           </img>
                        </div>
                        <div class="awesome-rec2">
                           <img src="images/video/Rectangle3.png" alt="">
                           </img>
                        </div>
                        <div class="awesome-rec3">
                           <img src="images/video/Rectangle4copy2.png" alt="">
                           </img>
                        </div>
                        <div class="awesome-rec4">
                           <img src="images/video/Shape1copy3.png" alt="">
                           </img>
                        </div>
                        <div class="awesome-rec5">
                           <img src="images/video/Shape4copy.png" alt="">
                           </img>
                        </div>
                        <div class="awesome-rec6">
                           <img src="images/video/Shape3copy3.png" alt="">
                           </img>
                        </div>
                        <div class="awesome-rec7">
                           <img src="images/video/Shape3copy.png" alt="">
                           </img>
                        </div>
                        <div class="awesome-rec8">
                           <img src="images/video/Shape3.png" alt="">
                           </img>
                        </div>
                        <div class="awesome-rec9">
                           <img src="images/video/Shape4copy3.png" alt="">
                           </img>
                        </div>
                     </div>
                     <div class="video-main">

                        {play == true ? <div>
                           <div class="video-main-item-icon">
                              <FaPlay onClick={() => setPlay(false)} className="video-main-item-icon-design" />
                              <a class="play-btn video-main-item-icon-button" title="This is a video" href=""></a>
                           </div>
                           <ReactPlayer
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
                              <div class="overlay-video">
                              </div>
                              <div class="video-main-item">
                                 <h2 class="video-main-item-title">
                                    View Our App Tutorial
                                 </h2>
                                 <p class="video-main-item-pera">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. LoremIpsum
                                    has
                                 </p>
                                 <div class="video-main-item-icon">
                                    <FaPlay onClick={() => setPlay(true)} className="video-main-item-icon-design" />
                                    <a class="play-btn video-main-item-icon-button" title="This is a video" href=""></a>
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
