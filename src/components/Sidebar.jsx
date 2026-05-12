import React from 'react'
import logo from '../assets/logo.png'
import {House} from 'lucide-react'
import {Table} from 'lucide-react'
import { NotepadText } from 'lucide-react'
import { SquareMenu } from 'lucide-react'
import {UserRound} from 'lucide-react'
import {ChartNoAxesCombined} from 'lucide-react'
import { Bolt } from 'lucide-react'
import {ReceiptIndianRupee} from 'lucide-react'

const Sidebar = () => {
  return (
    <>
            <div className=' bg-[#f8edd5ce] w-60  min-h-screen '>
            <ul className='text-xl p-2 text-[#675F50]   leading-12'>
              
              <div className='flex justify-center'>
                <img src={logo} alt="logo" className='w-30  cursor-pointer rounded-full mb-10' />
              </div>
              
                <li>
                  <a href="#"  className='flex items-center gap-2 p-2 rounded-lg hover:bg-[#F9E4C0] hover:border-b-2 transition-all duration-50'> 
                    <House /><span>Dashboard</span>
                   </a>
                </li>
                <li>
                  <a href="#" className='flex items-center gap-2 p-2 rounded-lg  hover:bg-[#F9E4C0] hover:border-b-2 transition-all duration-50'>
                    <Table /><span>Tables</span>
                  </a>
                </li>
                <li>
                  <a href="#" className='flex items-center gap-2 p-2 rounded-lg hover:bg-[#F9E4C0] hover:border-b-2 transition-all duration-50'>
                    <NotepadText /> <span>Orders</span>
                  </a>
                </li>
                <li>
                  <a href="#" className='flex items-center gap-2 p-2 rounded-lg  hover:bg-[#F9E4C0] hover:border-b-2 transition-all duration-50'>
                      <SquareMenu /> <span>Menu</span>
                  </a>
                </li>
                <li>
                  <a href="#" className='flex items-center gap-2 p-2 rounded-lg  hover:bg-[#F9E4C0] hover:border-b-2 transition-all duration-50'>
                   <UserRound /> <span>Staff</span>
                  </a>
                </li>
                  <li>
                  <a href="#" className='flex items-center gap-2 p-2 rounded-lg  hover:bg-[#F9E4C0] hover:border-b-2 transition-all duration-50'>
                   <ReceiptIndianRupee /> <span>Billing</span>
                  </a>
                </li>
                <li>
                  <a href="#" className='flex items-center gap-2 p-2 rounded-lg  hover:bg-[#F9E4C0] hover:border-b-2 transition-all duration-50'>
                   <ChartNoAxesCombined /> <span>Report</span>
                  </a>
                </li>
                <li>
                  <a href="#" className='flex items-center gap-2 p-2 rounded-lg  hover:bg-[#F9E4C0] hover:border-b-2 transition-all duration-50'>
                    <Bolt /> <span>Settings</span>
                  </a>
                </li>
            </ul>
            </div>
      </>          
       
  )
}

export default Sidebar
