import React from 'react'

const Scoreboard = ({ scoresArr }) => {

    let id = 0;

    return (
        <div>
            <ul className='pagination'>
             {scoresArr.map((score) => (
                    <li key={id++} className='page-link'>
                        {score}
                    </li>   
                ))}
            </ul>
        </div>
    )
}

export default Scoreboard
