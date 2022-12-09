import React from 'react';
import style from './project.module.scss'
import { useSelector , useDispatch} from 'react-redux';
import { addProjectAction,deleteProjectAction } from '../../store/projectReducer';
import { NavLink } from 'react-router-dom';
import buck from './buck.png'
const Projects = () => {
    const projects = useSelector(state=>state.projects.projects)
    const dispatch = useDispatch()
    const addProject =(title)=>{
        const id = Math.floor(Math.random() * 11)
        const project ={
            title,
            id:id,
            tasks:[]
        }
        
        const payload = {
            project,            
        }
           
        
        dispatch(addProjectAction(payload))
    }
    console.log(projects)
    return (
        <div className={style.project}>
            <div className={style.container}>
                <h1>TODO BOARD</h1>
                <p>Planning your projects</p>
                <div className={style.list}>
                    <h3>PROJECTS</h3>
                    <nav>
                        {
                            projects.map(p=>(
                                <div className={style.projTitle}>
                                    <NavLink className={style.link} to={`/tasks/${p.id}`}>
                                        <p>{p.title.toUpperCase()}</p>
                                        <button onClick={()=>dispatch(deleteProjectAction(p.id))}><img src={buck}/></button>
                                    </NavLink>
                                    
                                </div>
                            ))
                        }
                    </nav>
                    <button className={style.plus} onClick={()=>addProject(prompt())}>+</button>
                </div>
            </div>
        </div>
    );
};

export default Projects;