import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { FaCube } from 'react-icons/fa';
import { FaRegClone } from 'react-icons/fa';
import { BsFillLockFill } from 'react-icons/bs';

const Featuresitem  = ( { title , logo }) => {

    return (
      <div className="features-item text-center">
         <div className="features-item-box">
         <FaCube className="features-item-box-icon" />
         </div>
          <div className="features-item-main">
              <h2 className="features-item-main-title">
                  {title}
              </h2>
              <p className="features-item-main-pera">
                 Fanny around cup of char such a fibber
                 cheesed off happy days well cobblers
                 fanny around cup of char such
              </p>
          </div>
      </div>
    )
}

export default Featuresitem;