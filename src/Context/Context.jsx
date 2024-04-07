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


    const onSent = async (prompt) => {
        setResultData("")
        setloading("")
        setShowResult(true)
        setRecentPrompt(input)
        const response = await runChat(input)
        setResultData(response)
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