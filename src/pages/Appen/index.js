import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { DiApple } from 'react-icons/di';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import Banner from '../../component/appen/banner';
import CustomCarousel from '../../component/appen/customCarousel'

const Appen = () => {



    return (
        <div>
            <Banner />
            <CustomCarousel />
        </div>
    )
}

export default Appen;
