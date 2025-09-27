import React from 'react'
import { IoIosMenu } from "react-icons/io";
import './Header.css';


function LowerHeader() {
  return (
    <div className='lower-container'>


        <ul>
            <li>
                <IoIosMenu />
                    <p>All</p></li>
            <li>Today's Deals</li>
            <li>Costumer Service</li>
            <li>Registry</li>
            <li>Gift Cards</li>
            <li>Sell</li>
        </ul>
    </div>
  )
}

export default LowerHeader