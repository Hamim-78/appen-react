import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { DiApple } from 'react-icons/di';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import Banner from '../../component/appen/Banner';
import Features from '../../component/appen/Features';
import Awesomefeatures from '../../component/appen/Awesomefeatures';
// import CustomCarousel from '../../component/appen/customCarousel'

const Appen = () => {



    return (
        <div>
            <Banner />
            <Features />
            <Awesomefeatures />
            {/* <CustomCarousel /> */}
        </div>
    )
}

export default Appen;
