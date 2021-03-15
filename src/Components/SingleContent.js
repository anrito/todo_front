import React, {useState} from 'react';


const SingleContent = ({notCompleted, completed}) => {
    const [dropDown, setDropDown] = useState(false);



    const dropContent = () => {
        setDropDown(!dropDown);
    }


    return(
        <>
            <div className="content">
                <div className="content-time">
                    <div className="icon"> {notCompleted} {completed}</div>
                        <div className="content-title">
                                <h2>Task Title</h2>
                                {dropDown && <p className="description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    In temporibus sunt odio esse mollitia commodi saepe rerum,
                                    fugiat veniam. Autem.
                                </p>}
                        </div>
                            <button onClick={dropContent} className="drop-btn">{dropDown?<ion-icon name="chevron-up-outline"></ion-icon>:<ion-icon name="chevron-down-outline"></ion-icon>}</button>
                </div>
            </div> 
        </>
    );
}


export default SingleContent;