import React from 'react'
import { Row, Col, Form, ListGroup } from "react-bootstrap";
import { FaFacebook } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillGooglePlusCircle } from 'react-icons/ai';
import { FaPinterest } from 'react-icons/fa';
import { BsEnvelopeFill } from 'react-icons/bs';


 const Footer = () => {



    return (
<footer className="bottom">
   <div className="container box-1170">
       <div className="row">
           <div className="col-md-12">
               <div className="bottom-main">
                  <div className="row">
                     <div className="col-lg-6">
                        <div className="bottom-main-content">
                          <p className="bottom-main-content-pera">
                             @2018 Copyright,All Right Reserved by
                            <span>
                               <a href="#">Hamim Shariaear</a>
                            </span>
                         </p>
                        </div>
                     </div>
                     <div className="col-lg-6">
                         <ul className="list-unstyled list-inline social text-center">
                             <li className="list-inline-item"><a href="javascript:void();"><FaFacebook className=""/></a></li>
                             <li className="list-inline-item"><a href="javascript:void();"><AiOutlineTwitter className=""/></a></li>
                             <li className="list-inline-item"><a href="javascript:void();"><AiFillGooglePlusCircle className=""/></a></li>
                             <li className="list-inline-item"><a href="javascript:void();"><FaPinterest className=""/></a></li>
                             <li className="list-inline-item"><a href="javascript:void();" target="_blank"><BsEnvelopeFill className=""/></a></li>
                         </ul>
                     </div>
                  </div>
               </div>
           </div>
       </div>
   </div>
</footer>
    )
}

export default Footer