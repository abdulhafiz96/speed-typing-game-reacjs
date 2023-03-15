import {useState, useEffect, useRef} from 'react'
// no need to import React as there is no jsx in this file(logic) only
function useSpeedGame(counter = 15){
    const [text, setText] = useState("")
    const [time, setTime] = useState(10)
    const [countDown, setCountDown] = useState(time)
    const [isRunning, setIsRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const textareaRef = useRef(null)


    function countWords(str) {
        const arr = str.split(' ');

        return arr.filter(word => word !== '').length
    }

    function increaseTime() {
        setTime(time => time + 1)
    }

    function decreaseTime() {
        setTime(time => time - 1)
    }
    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }

    useEffect(() => {

        if (countDown > 0 && isRunning) {
            setTimeout(() => {
                setCountDown(time => time - 1)
            }, 1000)}
        else if (countDown === 0) {
            endGame()
        }


    }, [countDown, isRunning])


    function startGame() {
        setIsRunning(true)
        setCountDown(time)
        setText("")
        setWordCount(0)
        textareaRef.current.disabled = false
        textareaRef.current.focus();
    }

    function endGame() {
        setIsRunning(false)
        setWordCount(countWords(text))
    }
    return {isRunning, text, textareaRef, handleChange, countDown, startGame, wordCount, time, increaseTime, decreaseTime}
}

export default useSpeedGame