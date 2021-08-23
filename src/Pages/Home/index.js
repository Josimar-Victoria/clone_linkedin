import React from 'react'
import { Feed } from '../../Components/Feed'
import { Sidebar } from '../../Components/Sidebar'
import { Widgets } from '../../Components/Widgets'
import '../../App.css'

export const Home = () => {
    return (
        <div className="wrapper">
            <Sidebar />
              <Feed/>
            <Widgets/>
      </div>
    )
}
