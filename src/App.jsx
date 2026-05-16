import React from 'react'
import Sidebar from './components/Sidebar'
import Staff from './pages/Staff'
import Dashboard from './pages/Dashboard'
import { Routes, Route } from 'react-router-dom'
import TablesPage from './pages/TablesPage'

const App = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="ml-55 min-h-screen p-6 md:p-8">
         <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/table" element={<TablesPage/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
