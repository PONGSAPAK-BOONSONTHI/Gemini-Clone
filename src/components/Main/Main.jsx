import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'
import cards from '../../data/cards.json'


const Main = () => {

  const { onSent, RecentPrompt, ShowResult, loading, ResultData, input, setinput } = useContext(Context)

  return (
    <div className='main'>

      <div className='nav'>
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user_icon" />
      </div>

      <div className='main-containar'>
        {!ShowResult ?
          <>
            <div className='greet'>
              <p><span>Hollo, Dev.</span></p>
              <p>How can I help you today?</p>
            </div>

            <div className='cards'>
              {cards.map((card, id) => (
                <div id='id' className='card'>
                  <p>{card.title}</p>
                  <img src={card.img} alt={card.img} />
                </div>
              ))}
            </div>
          </>
          : <div className='result'>
            <div className='result-title'>
              <img src={assets.user_icon} alt="user_icon" />
              <p>{RecentPrompt}</p>
            </div>
            <div className='result-data'>
              <img src={assets.gemini_icon} alt="gemini_icon" />
              {loading ?
                <div className='loader'>
                  <hr />
                  <hr />
                  <hr />
                </div>
                : <p dangerouslySetInnerHTML={{ __html: ResultData }}></p>
              }
            </div>
          </div>
        }

        <div className='main-bottom'>
          <div className='search-box'>
            <input onChange={(e) => setinput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
            <div>
              <img src={assets.gallery_icon} alt="gallery_icon" />
              <img src={assets.mic_icon} alt="mic_icon" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="send_icon" />
            </div>
          </div>
          <p className='bottom-info'>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>

      </div>

    </div>
  )
}

export default Main