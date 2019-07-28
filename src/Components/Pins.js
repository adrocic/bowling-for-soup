import React from 'react'

const Pins = ({ addScore }) => {

    const pinsArr = [1,2,3,4,5,6,7,8,9,10];

    return (
        <div>
            <ul className='pagination'>
                {pinsArr.map((pins) => (
                    <li key={pins} className='page-item'>
                        <a onClick={() => addScore(pins)} className='page-link'>
                            {pins}
                        </a>
                    </li>   
                ))}
            </ul>
            
        </div>
    )
}

export default Pins
