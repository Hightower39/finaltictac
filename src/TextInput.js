import {useState} from "react"
function TextInput(props) {
    console.log(props)
    const [text, setText] = useState('')
    
    function sendMessage(){
        if(text==='') return
        props.send(text)
        setText('')
    }
    
    function keyPressed(e){
        if(e.key==="Enter"){
            sendMessage()
        }

    }
    return <footer className="text-input">
            <input className="input"
                placeholder="write your message" 
                value={text}
                onChange={e=> setText(e.target.value)}
                onKeyPress={keyPressed}
            />
        <button onClick={sendMessage}  className="send-button">
        ⬆
        </button>
    </footer>
}

export default TextInput