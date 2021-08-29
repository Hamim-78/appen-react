import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { DiApple } from 'react-icons/di';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import Banner from '../../component/appen/Banner';
import Features from '../../component/appen/Features';
import Awesomefeatures from '../../component/appen/Awesomefeatures';
import Video from '../../component/appen/Video';
import Screenshot from '../../component/appen/Screenshot';
import Testimonial from '../../component/appen/Testimonial';
// import Testimonial from '../../component/appen/Testimonial';
// import CustomCarousel from '../../component/appen/customCarousel'

const Appen = () => {



    return (
        <div>
            <Banner />
            <Features />
            <Awesomefeatures />
            <Video />
            <Screenshot />
            <Testimonial />
            {/* <CustomCarousel /> */}
        </div>
    )
}

export default Appen;
