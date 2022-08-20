import ToDoForm from '../ToDoForm'
import ToDoItem from '../ToDoItem'
import styles from './style.module.css'

const ToDoList = ({ data, done, ...props }) => {
    return <div className={styles.container}>
        <ToDoForm onAdd={props.onAdd} />
        <div className={styles.parent}>
            {
                data.map((item, index) =>
                    <ToDoItem 
                        key={item.id}
                        task={item}
                        onComplete={props.onComplete}
                        onCancel = {props.onCancel}
                    />
                )
            }
        </div>
        {data.length > 0 && <h3>{done}/{data.length}</h3>}
    </div>
}
export default ToDoList