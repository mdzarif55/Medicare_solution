import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import { dummyOrders } from '../../assets/assets'

const Orders = () => {
    const { currency } = useAppContext()
    const [orders, setOrders] = useState([])

    const fetchOrders = async () => {
        setOrders(dummyOrders)
    }

    useEffect(() => {
        fetchOrders()
    }, [])

    return (
        <div className='no-scrollbar flex-1 h-[95vh] overflow-y-scroll'>
            <div className="md:p-10 p-4 space-y-4">
                <h2 className="text-lg font-medium">Orders List</h2>

                {orders.map((order, index) => (
                    <div key={index} className="flex flex-col md:items-center md:flex-row gap-5 justify-between p-5 max-w-4xl rounded-md border border-gray-300">

                        {/* Product Images and Titles - Column wise */}
                        <div className="flex flex-col gap-3 max-w-80">
                            {order.items.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <img
                                        className="w-12 h-12 object-cover border rounded"
                                        src={item.product.image[0]}
                                        alt={item.product.name[0]}
                                    />
                                    <p className="text-sm font-medium">
                                        {item.product.name} <span className="text-primary">x{item.quantity}</span>
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Address */}
                        <div className="text-sm md:text-base text-black/60">
                            <p>{order.address.firstName} {order.address.lastName}</p>
                            <p>{order.address.street}, {order.address.city}</p>
                            <p>{order.address.state}, {order.address.zipcode}, {order.address.country}</p>
                        </div>

                        {/* Phone */}
                        <p className="text-sm md:text-base text-black/60">{order.address.phone}</p>

                        {/* Amount */}
                        <p className="font-medium text-lg my-auto">
                            {currency}{order.amount}
                        </p>

                        {/* Payment Info */}
                        <div className="flex flex-col text-sm md:text-base text-black/60">
                            <p>Method: {order.paymentType}</p>
                            <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                            <p>Payment: {order.isPaid ? "Paid" : "Pending"}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Orders
