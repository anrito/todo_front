import React, {useState} from 'react';
import SingleContent from './SingleContent';

const Content = () => {
const [completed] = useState(<ion-icon name="checkmark-done-outline" className="completed-icon"></ion-icon>);
const [notCompleted] = useState(<ion-icon name="alert-circle-outline" className="not-completed-icon"></ion-icon>)

    return(
        <section className="section">
        <div className="task-cont">
            <button className="btn">+ New Task</button>
        </div>
        <div className="content-cont">
            <h3>In Progress - 4</h3>
                <SingleContent notCompleted={notCompleted}/>
                <SingleContent notCompleted={notCompleted}/>
                <div className="arrow-down"><ion-icon name="chevron-down-outline"></ion-icon></div>
            <h3 className="completed">Completed - 3</h3>
                <SingleContent completed={completed}/>
        </div>
    </section>
    );
}


export default Content;