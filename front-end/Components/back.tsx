import React from 'react'
import Image from 'next/image';
import arrow from './images/leftArrow.png';
import Button from 'react-bootstrap/Button';
import './backbutton.css';

const Back = () => {
return(
    <Button id='backButton' href="/dashboard">
        <Image 
        alt = "Back arrow"
        src={arrow}
        width={30} 
        />
    </Button>
)

}

export default Back