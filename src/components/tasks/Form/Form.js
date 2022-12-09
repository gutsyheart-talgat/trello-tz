import React from 'react';
import style from './form.module.scss'
import x from './X.svg'
const Form = ({info,show,setShow,setInfo}) => {
    return (
        <div className={style.FormCont}>
            {info.map(i =>(
                <div className={style.Form}>
                    <div className={style.head}>
                        <h3>{i.title}</h3>
                        <button onClick={()=>setShow(false)}><img src={x}/></button>
                    </div>
                    <div className={style.inform}>
                        <label>
                            <p className={style.pass}>CONTENT :</p>
                            <p className={style.content}>{i.content}</p>
                        </label>
                        <label>
                            <p className={style.pass}>Number :</p>
                            <p className={style.content}>{i.number}</p>
                        </label>
                        <label>
                            <p className={style.pass}>STATUS :</p>
                            <input value={i.status} className={style.content} onChange={e=>setInfo(e.target.value)}/>
                        </label>
                        <label>
                            <p className={style.pass}>PTIORITY :</p>
                            <p className={i.priority ==="high priority" ? style.high : i.priority === "medium prority" ? style.medium : style.low}>{i.priority}</p>
                        </label>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Form;