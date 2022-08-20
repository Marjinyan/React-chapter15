import styles from './style.module.css'
import {useState} from 'react'

const ToDoForm = ({onAdd}) => {
    const [text, setText] = useState("")

    return <form onSubmit={(e) => {
            e.preventDefault()
            if(!text.trim()){
                return
            }
            onAdd({
                id: Date.now() + "-" + parseInt(Math.random() * 1E9),
                text,
                timeAdded: Date.now(),
                timeCompleted: null,
                done: false
            })
            setText("")
        }}>
            <input
                type="text"
                value = {text}
                className = {styles.control}
                onChange = {e => setText(e.target.value)}
            />
            <button>save</button>
    </form>
}
export default ToDoForm