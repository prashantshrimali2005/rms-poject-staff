import React from 'react'
import Sidebar from './components/Sidebar'
import Staff from './components/Staff'

const App = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1">
        <Staff />
      </main>
    </div>
  )
}

export default App
