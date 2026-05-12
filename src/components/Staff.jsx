import React from 'react'
import { SquarePen } from 'lucide-react'
import { Trash } from 'lucide-react'

const Staff = () => {
  return (
    <div className='staff-main p-8 w-full'>
        <div className='flex justify-between items-center'>
            <div className='staff-left text-3xl text-[#57473D] m-8'>
            <h1 >Staff Members</h1>
            </div>
         
            <div className="staff-right mr-5">
            <button className='bg-[#D39A23] rounded-lg w-40 h-12 text-white cursor-pointer'>+ Add Staff</button>
            </div>       
        </div>
        <div className="table">
         <table className="w-250  border-gray-300 m-10 rouded-lg ">
          <thead>
            <tr className='bg-[#f8edd5ce]'>
            <th className='border-0 p-5'>Name</th>
            <th className='border-0 p-5'>Roll</th>
            <th className='border-0 p-5'>Phone</th>
            <th className='border-0 p-5'>Status</th>
            <th className='border-0 p-5'>Action</th>
           </tr>
          </thead>
          <tbody>
            <tr>
                <td className=" p-5 text-center">Rahul Sharma</td>
                <td className=" p-5 text-center">Waiter</td>
                <td className=" p-5 text-center">9876543210</td>
                <td className=" p-5 text-center text-green-900">Active</td>
                <td className=" p-5 flex justify-center gap-5 text-center cursor-pointer">
                    <SquarePen /> <Trash />
                </td>
           </tr>
            
            <tr>
                <td className=" p-5 text-center">Priya Patel</td>
                <td className=" p-5 text-center">Waiter</td>
                <td className=" p-5 text-center">9876543210</td>
                <td className=" p-5 text-center text-green-900">Active</td>
                <td className=" p-5 flex justify-center gap-5 text-center cursor-pointer">
                    <SquarePen /> <Trash />
                </td>
           </tr>
            
            <tr>
                <td className=" p-5 text-center">Amit Kumar</td>
                <td className=" p-5 text-center">Chef</td>
                <td className=" p-5 text-center">9876543210</td>
                <td className=" p-5 text-center text-green-900">Active</td>
                <td className=" p-5 flex justify-center gap-5 text-center cursor-pointer">
                    <SquarePen /> <Trash />
                </td>
           </tr>
            
            <tr>
                <td className=" p-5 text-center">Neha Singh</td>
                <td className=" p-5 text-center">Cashier</td>
                <td className=" p-5 text-center">9876543210</td>
                <td className=" p-5 text-center text-red-700">Inactive</td>
                <td className=" p-5 flex justify-center gap-5 text-center cursor-pointer">
                    <SquarePen /> <Trash />
                </td>
           </tr>
            
            <tr>
                <td className=" p-5 text-center">Suresh Das</td>
                <td className=" p-5 text-center">Manager</td>
                <td className=" p-5 text-center">9876543210</td>
                <td className=" p-5 text-center text-green-900 ">Active</td>
                <td className=" p-5 flex justify-center gap-5 text-center cursor-pointer">
                    <SquarePen /> <Trash />
                </td>
           </tr>
            
           
          </tbody>
           
         </table>   
        </div>
    </div>
      
    
  )
}

export default Staff
