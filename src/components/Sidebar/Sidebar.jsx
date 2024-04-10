import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'

const Sidebar = () => {

  const [extended, setextended] = useState(false)
  const {onSent, prevPrompt, setprevPrompt, newChat} = useContext(Context)
  const loadPrompt = async (prompt) => {
    setprevPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <section className={`sidebar ${extended ? 'extended' : ''}`}>
      <div className="top">
        <button onClick={() => setextended(prev=>!prev)} className='menu'><img src={assets.menu_icon} alt="menu_icon" /></button>

        <div onClick={() => newChat()} className={`new-chat ${extended ? 'extended' : ''}`}>
          <img src={assets.plus_icon} alt="plus-icon" />
          {extended ? <p>NewChat</p> : null}
        </div>

        {extended ?
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompt.map((item, index) => (
              <div onClick={() => loadPrompt(item)} className="recent-entry">
                <img src={assets.message_icon} alt="message_icon" />
                <p>{item.slice(0,18)} ...</p>
              </div>
            ))}
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
