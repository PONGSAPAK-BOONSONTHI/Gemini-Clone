import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div>
        <img className="menu" src={assets.menu_icon} alt="menu_icon" />

        <div className="new-Chat">
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
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="history_icon" />
          <p>Actinity</p>
        </div>
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          <p>Setting</p>
        </div>
      </div>
    </section>
  )
}

export default Sidebar
