import React from 'react';
import buck from '../buck.png'
import style from '../task.module.scss'
const Task = ({t,s,show,deleteTask}) => {
    return (
        <div className={style.statusTitle}>
            <div onClick={()=>show(t.id,s.tasks)}>
                <p>{t.title.toUpperCase()}</p>
                <p className={` ${t.priority ==="high priority" ? style.high : t.priority === "medium priority" ? style.medium : style.low}`}>{t.priority}</p>                                                                   
            </div>
            <button onClick={()=>deleteTask(t.id)}><img src={buck}/></button>                                        
        </div>
    );
};

export default Task;