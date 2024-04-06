import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'

const Sidebar = () => {

  const [extended, setextended] = useState(false)

  return (
    <section className={`sidebar ${extended ? 'extended' : ''}`}>
      <div className="top">
        <button onClick={() => setextended(prev=>!prev)} className='menu'><img src={assets.menu_icon} alt="menu_icon" /></button>

        <div className={`new-chat ${extended ? 'extended' : ''}`}>
          <img src={assets.plus_icon} alt="plus-icon" />
          {extended ? <p>NewChat</p> : null}
        </div>

        {extended ?
          <div className={`recent ${extended ? 'extended' : ''}`}>
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="message-icon" />
              <p>What is react ...</p>
            </div>
          </div>
          : null
        }
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="question_icon" />
          {extended ? <p>Help</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="history_icon" />
          {extended ? <p>Actinity</p> : null}

        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Setting</p> : null}
        </div>

      </div>
    </section>
  )
}

export default Sidebar
