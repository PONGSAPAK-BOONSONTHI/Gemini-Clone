import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="top">
        <button className='menu'><img src={assets.menu_icon} alt="menu_icon" /></button>

        <div className="new-chat">
          <img src={assets.plus_icon} alt="plus-icon" />
          <p>NewChat</p>
        </div>

        <div className="recent">
          <p className="recent-title">Recent</p>
          <div className="recent-entry">
            <img src={assets.message_icon} alt="message-icon" />
            <p>What is react ...</p>
          </div>
        </div>
        
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="question_icon" />
          <p>Help</p>
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="history_icon" />
          <p>Actinity</p>
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          <p>Setting</p>
        </div>

      </div>
    </section>
  )
}

export default Sidebar
