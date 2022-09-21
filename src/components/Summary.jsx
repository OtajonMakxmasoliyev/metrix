import { ArrowDropDownOutlined, ChevronLeft } from '@mui/icons-material';
import React, { useState } from 'react'
import Block from './block';

const Summary = (props) => {
    let word;
    const [summary, setSummary] = useState(7)
    const [hide, setHide] = useState(false)

    switch (summary) {
        case 1:
            word = "Day"
            break;
        case 3:
            word = "3 Day"
            break;
        case 7:
            word = "Week"
            break;
        case 30:
            word = "Month"
            break;

        default:
            break;
    }

    return (
        <div className='Summary'>
            <div className="Summary_top">
                <img src={props.image} />
                <div className="buttons">
                    <button onClick={() => setHide(!hide)}>{word}<ChevronLeft style={hide ? { transform: "rotate(90deg)" } : { transform: "rotate(-90deg)" }} /></button>
                    <div className="buttons_hide" style={hide ? { display: "flex" } : { display: "none" }}>
                        <button onClick={() => setSummary(30)}>Month</button>
                        <button onClick={() => setSummary(7)}>Week</button>
                        <button onClick={() => setSummary(3)}>3 Day</button>
                        <button onClick={() => setSummary(1)}>Day</button>
                    </div>
                </div>

            </div>


            <div className="Summary_down">
                {
                    props.block
                }
            </div>
        </div>
    )
}

export default Summary