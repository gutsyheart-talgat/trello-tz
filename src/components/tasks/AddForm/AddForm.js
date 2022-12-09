import React, { useState } from 'react';
import { addTaskAction } from '../../../store/projectReducer';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import style from './add.module.scss'
const AddForm = ({show,setShow}) => {
    const [state,setState] = useState({
        id:Math.floor(Math.random() * 11),
        title:'',
        content:'',
        number:'',
        status:"queue",
        priority:''

    })
    const handleChange = (e)=>{
        const target = e.target;
        const value = target.value
        const name = target.name;
        setState({...state,
            [name]:value
        })
    }
    const dispatch = useDispatch()
    const params = useParams()
    const projects = useSelector(state=>state.projects.projects)
    const pr = projects.filter(p=> p.id == params.id)
    const taske = pr.map(p=>p.tasks)
    const [arrTask,setArrTask]=useState(taske)
    const [arrPr,setArrPr] = useState(pr.flat())
    const addTask =(task)=>{
        setArrTask([arrTask.map(t=>t.push(task))])

        setArrPr(arrPr.map(p=>({...p, tasks:arrTask}))) 
        dispatch(addTaskAction(arrPr))
    }
    const handleSubmit = (e)=>{
        addTask(state)
        e.preventDefault()
        setShow(false)
    }
    return (
        <div className={style.add}>
            <form className={style.form} onSubmit={(e)=>handleSubmit(e)}>
                <label>
                    <p className={style.pass}>TITLE :</p>
                    <input value={state.title} name="title" onChange={(e)=>handleChange(e)}/>
                </label>
                <label>
                    <p className={style.pass}>CONTENT :</p>
                    <input value={state.content} name='content' onChange={(e)=>handleChange(e)}/>
                </label>
                <label>
                    <p className={style.pass}>Number :</p>
                    <input value={state.number} type="number" name='number' onChange={(e)=>handleChange(e)}/>
                </label>
                <label>
                    <p className={style.pass}>PRIORITY :</p>
                    <div name="priority" className={style.priorityDiv} onChange={e=>handleChange(e)} >
                        <label>
                            <p>high</p>
                            <input type="radio" value="high priority" name="priority" className={style.priority}/>
                        </label>
                        <label>
                            <p>medium</p>
                            <input type="radio" value="medium priority" name="priority" className={style.priority}/>
                        </label>
                        <label>
                            <p>low</p>
                            <input type="radio" value="low priority" name="priority" className={style.priority}/>
                        </label>
                    </div>
                </label>
                <button type='submit' className={style.addBtn}>add</button>
            </form>
            
        </div>
    );
};

export default AddForm;