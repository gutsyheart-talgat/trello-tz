import React, { useState } from 'react';
import style from './task.module.scss'
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTaskAction } from '../../store/projectReducer';
import arrow from './BackArrow.png'
import Form from './Form/Form';
import AddForm from './AddForm/AddForm';
import Task from './dnd/Task';

const Tasks = () => {
    const dispatch = useDispatch()
    
    const params = useParams()
    const projects = useSelector(state=>state.projects.projects)
    const pr = projects.filter(p=> p.id == params.id)
    const taske = pr.map(p=>p.tasks)
    const [arrTask,setArrTask]=useState(taske)
    console.log(arrTask)
    const statuses = [{
        status: "queue",
        icon: "⭕️",
        color: "#EB5A46",
        tasks:arrTask.flat()
        
    }, {
        status: "development",
        icon: "🔆️",
        color: "#00C2E0",
        tasks:[]
        
    },  {
        status: "done",
        icon: "✅",
        color: "#3981DE",
        tasks:[]
        
    }];
    const [arrPr,setArrPr] = useState(pr.flat())
    const [showForm,setShowForm] = useState(false)
    const [addForm, setAddForm] = useState(false)
    const [taskId,setTaskId] = useState(0)
    const [taskInfo,setTaskInfo] = useState()
    const show =(IdTask,Tasks)=>{
        setTaskId(IdTask)
        setTaskInfo(
           Tasks.filter(t=>t.id === IdTask)
        )
        setShowForm(true)     
    }
    const deleteTask = (tid) =>{
        const arr = arrTask.map(tas=>tas.filter(t=>t.id !== tid))
        setArrTask(arr)
        setArrPr(arrPr.map(p=>({...p, tasks:arr})))
        const payload ={
            id:params.id,
            arr:arr.flat()
        }
        dispatch(deleteTaskAction(payload))
    }
    
    return(
        <div className={style.task}>
            <button className={style.plus} onClick={()=>setAddForm(true)}>+</button>
            <header>
                {pr.map(p=>(
                    <div className={`${style.container} `}>
                        <NavLink to='/' className={style.arrow}><img src={arrow}/></NavLink>
                        <p>{p.title.toUpperCase()}</p>
                    </div>))}
            </header>
            <div className={style.container}>
                <div className={style.statuses}>
                    {statuses.map(s=>(
                        <div key={s.status} className={style.status}>
                            <h3>{s.status.toUpperCase()}</h3>
                                {s.tasks.map(t=>(
                                    <Task t={t} s={s} show={show} deleteTask={deleteTask}/>
                                ))}
                        </div>
                    ))}
                    {showForm ? (<Form info={taskInfo} setInfo={setTaskInfo} show={showForm} setShow={setShowForm}/>):null}
                    {addForm ? (<AddForm show={addForm} setShow={setAddForm} />):null}
                </div>
            </div>
        </div>
    )
};


export default Tasks;