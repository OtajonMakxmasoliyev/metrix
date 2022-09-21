import { Add, AddOutlined, PlusOne, PlusOutlined } from '@mui/icons-material'
import React from 'react'
import Navbar from './Navbar'
import Navigation from './Navigation'
import Summary from './Summary'


import Bag from "../images/icons/navbar/light/Bag.png"
import Block from './block'

const OrderSummary = (props) => {

    function blocks(e, array) {
        e.map((x, index) => (
            array.push(<Block key={index} title={x.title} num={x.num} change={x.change} color={x.color} />)
        ))
        console.log("Ishlayapti");
    }


    const All_info = [
        { title: "All orders", num: 322 },
        { title: "Pending", num: 322 },
        { title: "Completed", num: 322 },
    ]
    let All = []
    blocks(All_info, All)

    const Cancel_info = [
        { title: "Canceled", num: 322, change: -20, },
        { title: "Returned", num: 322, },
        { title: "Damaged", num: 322, },
    ]

    let Cancel = []
    blocks(Cancel_info, Cancel)

    const Subscribe_info = [
        { title: "Abandoned Cart", num: 322, color: "#CC5F5F" },
        { title: "Customers", num: 322, },
    ]

    let Subscribe = []
    blocks(Subscribe_info, Subscribe)





    return (
        <div className='OrderSummary'>
            <Navigation name="Orders" pagination="/ orders" />
            <div className="OrderSummary_top">
                <div className="title">
                    <p>Orders Summary</p>
                </div>
                <button><AddOutlined /> Create a New Order</button>
            </div>
            <div className="OrderSummary_summaries">
                <Summary image={Bag} block={All} />
                <Summary image={Bag} block={Cancel} />
                <Summary image={Bag} block={Subscribe} />
            </div>
        </div>
    )
}

export default OrderSummary