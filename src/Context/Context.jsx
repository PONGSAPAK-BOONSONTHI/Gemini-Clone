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

    const newChat = () => {
        setloading(false)
        setShowResult(false)
    }

    const onSent = async (prompt) => {

        setResultData("")
        setloading(true)
        setShowResult(true)
        let response
        if (prompt !== undefined) {
            response = await runChat(prompt)
            setRecentPrompt(prompt)
        }
        else {
            setprevPrompt(prev => [...prev,input])
            setRecentPrompt(input)
            response = await runChat(input)
        }

        let ResponseArray = response.split("**")
        let newResponse = ""

        for(let i = 0 ; i < ResponseArray.length; i++)
        {
            if (i === 0 || i%2 !==1) {
                newResponse += ResponseArray[i]
            }
            else {
                newResponse += "<b>"+ResponseArray[i]+"</b>"
            }
        }

        let newRespons2 = newResponse.split("*").join("</br>")
        let newResponseArray = newRespons2.split(" ")

        for(let i = 0; i < newResponseArray.length; i++)
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
        setinput,
        newChat
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider