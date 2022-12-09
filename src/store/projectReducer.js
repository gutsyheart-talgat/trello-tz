const initialState ={
    projects:[
        {
            id:11, 
            title:"kupi auto",
            tasks:[
                {
                    id: 11,
                    icon: "⭕️",
                    status: "queue",
                    title: "Human Interest Form",
                    content: "Fill out human interest distribution form",
                    number: 123331,
                    priority:"medium priority"
                }, 
                {
                    id: 12,
                    icon: "⭕️",
                    status: "queue",
                    title: "Purchase present",
                    content: "Get an anniversary gift",
                    number: 23412,
                    priority:"high priority"
                }, 
                {
                    id: 13,
                    icon: "⭕️",
                    status: "queue",
                    title: "Invest in investments",
                    content: "Call the bank to talk about investments",
                    number: 12344,
                    priority:"low priority"
                }, 
                {
                    id: 14,
                    icon: "⭕️",
                    status: "queue",
                    title: "Daily reading",
                    content: "Finish reading Intro to UI/UX",
                    number: 4325,
                    priority:"high priority"
                }
            ]
        },
        {
            id:12, 
            title:"kupi dom",
            tasks:[
                {
                    id: 11,
                    icon: "⭕️",
                    status: "queue",
                    title: "what a problem",
                    content: "Fill out human interest distribution form",
                    number: 456666,
                    priority:"high priority"
                }, 
                {
                    id: 12,
                    icon: "⭕️",
                    status: "queue",
                    title: "che hochew",
                    content: "Get an anniversary gift",
                    number: 110022,
                    priority:"low priority"
                }, 
                {
                    id: 13,
                    icon: "⭕️",
                    status: "queue",
                    title: "eeeuuuuu",
                    content: "Call the bank to talk about investments",
                    number: 1303030,
                    priority:"low priority"
                }, 
                {
                    id: 14,
                    icon: "⭕️",
                    status: "queue",
                    title: "asdff",
                    content: "Finish reading Intro to UI/UX",
                    number:9022,
                    priority:"medium priority"
                }
            ]
        },
        {
            id:13, 
            title:"kupi edu",
            tasks:[
                {
                    id: 11,
                    icon: "⭕️",
                    status: "queue",
                    title: "asdfasdfasdfasdf",
                    content: "Fill out human interest distribution form",
                    number:23899,
                    priority:"high priority"
                }, 
                {
                    id: 12,
                    icon: "⭕️",
                    status: "queue",
                    title: "asdffffdsdfrgfs",
                    content: "Get an anniversary gift",
                    number: 12334,
                    priority:"high priority"
                }, 
                {
                    id: 13,
                    icon: "⭕️",
                    status: "queue",
                    title: "asdfrfrfrfrfrfrf",
                    content: "Call the bank to talk about investments",
                    number: 10990123,
                    priority:"low priority"
                }, 
                {
                    id: 14,
                    icon: "⭕️",
                    status: "queue",
                    title: "asdfadsfdsf",
                    content: "Finish reading Intro to UI/UX",
                    number: 12333109,
                    priority:"low priority"
                }
            ]
        },
    ],
    
}
const ADD_PROJECT = "ADD_PROJECT"
const ADD_TASK = "ADD_TASK"
const DELETE_PROJECT = "DELETE_PROJECT"
const DELETE_TASK = "DELETE_TASK"
const DRAG = "DRAG"
export const projectReducer = (state=initialState,action) =>{
    
    switch(action.type){
        case ADD_PROJECT:
            return {...state,projects:[...state.projects,action.payload.project]}
        case DELETE_PROJECT:
            return {...state, projects:state.projects.filter(p=>p.id !== action.payload)}
        case ADD_TASK:
            return {...state,projects:state.projects.map(p=>(p.id==action.payload.id?p.tasks.push(action.payload.task):p))}
        case DELETE_TASK:
            return {...state,projects:state.projects.map(pr=>pr.id == action.payload.id? {...pr,tasks:action.payload.arr}:pr)}
        case DRAG: 
            return {...state,projects:state.projects.map(pr=>pr.id == action.payload.id? {...pr,tasks:action.payload.arr}:pr)}
        default:
            return state
    }
    
}
export const deleteTaskAction = (payload) => ({type:DELETE_TASK, payload})
export const deleteProjectAction = (payload) => ({type:DELETE_PROJECT,payload})
export const addTaskAction = (payload) => ({type:ADD_TASK,payload})
export const addProjectAction = (payload) => ({type:ADD_PROJECT,payload})