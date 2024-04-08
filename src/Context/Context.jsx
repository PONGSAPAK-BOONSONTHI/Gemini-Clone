import { createContext, useState } from "react";
import runChat from "../config/Gemini";

export const Context = createContext()

const ContextProvider = (props) => {
    const [input, setinput] = useState("")
    const [RecentPrompt, setRecentPrompt] = useState("")
    const [prevPrompt, setprevPrompt] = useState([])
    const [ShowResult,  setShowResult] = useState(false)
    const [loading, setloading] = useState(false)
    const [ResultData, setResultData] =useState("")

    const delayPara = (index, nextWord) => {
        setTimeout(function() {
            setResultData(prev => prev+nextWord)
        },75*index)

    }

    const onSent = async (prompt) => {
        setResultData("")
        setloading(true)
        setShowResult(true)
        setRecentPrompt(input)
        const response = await runChat(input)
        let ResponseArray = response.split("**")
        let newRespons 
        for(let i =0 ; i < ResponseArray.length; i++)
        {
            if (i ===0 || i%2 !==1) {
                newRespons += ResponseArray[i]
            }
            else {
                newRespons += "<b>"+ResponseArray[i]+"</b>"
            }
        }
        let newRespons2 = newRespons.split("*").join("</br>")
        let newResponseArray = newRespons2.split(" ")
        for(let i=0; i < newResponseArray.length; i++)
        {
            const nextWord = newResponseArray[i]
            delayPara(i,nextWord + " ") 
        }

        // setResultData(newRespons2)
        setloading(false)
        setinput("")
    }

    const contextValue = {
        prevPrompt,
        setprevPrompt,
        onSent,
        setRecentPrompt,
        RecentPrompt,
        ShowResult,
        loading,
        ResultData,
        input,
        setinput
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider