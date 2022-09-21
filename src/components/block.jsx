import React from 'react'

const Block = (props) => {
    return (
        <div className='block'>
            <p style={{ color: `${props.color}` }}>{props.title}</p>
            <div className="block_display">
                <span className='num'>{props.num}</span>
                {props.change && <span style={props.change < 0 ? { color: "#CC5F5F" } : null}>{props.change}%</span>}
            </div>
        </div >
    )
}

export default Block