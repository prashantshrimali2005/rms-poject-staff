import React from 'react'
import { Search } from 'lucide-react'
import { CalendarArrowUp } from 'lucide-react'
import {HandCoins} from 'lucide-react'
import { Table } from 'lucide-react'
import {SquareUserRound} from 'lucide-react'

const Dashboard = () => {
  return (
    <div>
      <div className="notification-panel">

      </div>

     <div className="search-panel m-10 mb-2">
        <div className="flex items-center bg-white rounded-xl border-2 border-[#7b5a11cf] px-4 shadow-[0_6px_20px_#D39A2350]">
          <Search className="text-gray-500" />
          <input
            type="text"
            placeholder="Search Here"
            className="w-full p-4"
          />
       </div>
    </div>
    
    <div className="all-cards grid grid-cols-4 mr-6">
    
      <div className="total-order-card  cursor-pointer m-8  w-72 h-40 p-4 border-2 border-[#7b5a11cf]  rounded-2xl flex justify-between shadow-[0_6px_40px_#D39A2350]">
        <div className="card-data">
          <h2 className='font-semibold text-2xl text-[#7b5a11cf] '>Total Orders</h2>
          <p className='mt-7 text-3xl font-semibold ml-1'>128</p>
        </div>        
        <div className="cart mt-14   mr-3 text-[#d49b21f9]">
          <CalendarArrowUp size={42}  />
        </div>
      </div>
    
    
      <div className="today-revenue-card  cursor-pointer m-8  w-72 h-40 p-4 border-2 border-[#7b5a11cf]  rounded-2xl flex justify-between shadow-[0_6px_40px_#D39A2350]">
        <div className="card-data">
          <h2 className='font-semibold text-2xl text-[#7b5a11cf] '>Today's Revenue</h2>
          <p className='mt-7 text-3xl font-semibold ml-1'>₹18,900</p>
        </div>        
        <div className="cart mt-14   mr-3 text-[#d49b21f9]">
          <HandCoins size={42}  />
        </div>
      </div>
    
    
      <div className="Active-table-card  cursor-pointer m-8  w-72 h-40 p-4 border-2 border-[#7b5a11cf]  rounded-2xl flex justify-between shadow-[0_6px_40px_#D39A2350]">
        <div className="card-data">
          <h2 className='font-semibold text-2xl text-[#7b5a11cf] '>Active Tables</h2>
          <p className='mt-7 text-3xl font-semibold ml-1'>12/20</p>
        </div>        
        <div className="cart mt-14   mr-3 text-[#d49b21f9]">
          <Table size={42}  />
        </div>
      </div>
    
    
      <div className="total-customer-card  cursor-pointer m-8  w-72 h-40 p-4 border-2 border-[#7b5a11cf]  rounded-2xl flex justify-between shadow-[0_6px_40px_#D39A2350]">
        <div className="card-data">
          <h2 className='font-semibold text-2xl text-[#7b5a11cf] '>Total Customers</h2>
          <p className='mt-7 text-3xl font-semibold ml-1'>200</p>
        </div>        
        <div className="cart mt-14   mr-3 text-[#d49b21f9]">
          <SquareUserRound  size={42}  />
        </div>
      </div>
    </div>
      

      {/* <div className="recent-order m-10 mb-2">
        <table className="w-full  border-gray-300 m-10 rouded-lg" >
          {/* <caption className='font-semibold text-2xl text-[#7b5a11cf] '>Recent Orders</caption> */}
          {/* <thead> */}
{/*             
              <th>Order Number</th>
              <th>Table no.</th>
              <th>Price</th>    
          </thead>
          <tbody>
            <tr>
              <td>#1024</td>
              <td>Table 4</td>
              <td>₹560</td>
            </tr>
          </tbody>
        </table> */}
      {/* </div> */} 
  </div>
  )
}

export default Dashboard
