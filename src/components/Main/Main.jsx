import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'


const Main = () => {

  const { onSent, RecentPrompt, ShowResult, loading, ResultData, input, setinput } = useContext(Context)

  return (
    <div className='main'>

      <div className='nav'>
        <p>Genini</p>
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
              <div className='card'>
                <p>Suggest beautiful places to see on upcoming road trip</p>
                <img src={assets.compass_icon} alt="compass_icon" />
              </div>
              <div className='card'>
                <p>Briefly summarize this concapt: urban planning</p>
                <img src={assets.bulb_icon} alt="bulb_icon" />
              </div>
              <div className='card'>
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="message_icon" />
              </div>
              <div className='card'>
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="code_icon" />
              </div>
            </div>
          </>
          : <div className='result'>
            <div className='result-title'>
              <img src={assets.user_icon} alt="user_icon" />
              <p>{RecentPrompt}</p>
            </div>
            <div className='result-data'>
              <img src={assets.gemini_icon} alt="gemini_icon" />
              {/* <div className='loader'>
                <hr />
                <hr />
                <hr />
              </div> */}
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