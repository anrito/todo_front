import React from 'react';

const Content = () => {


    return(
        <section className="content-section">
            <div className="recent-tasks">
                <h3>Recent Tasks (7)</h3>
                <button className="task-btn">+ New Task</button>
            </div>
            <div className="grid-container">
                <div className="grid-item">
                    <div className="single-content">
                        <div className="cont-notification">
                            <div className="notification">Due in 3 days</div>
                            <div className="dots">...</div>
                        </div>
                        <div className="header-text">
                            <h2>Lorem Task Title</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                In sapiente blanditiis expedita adipisci voluptatum debitis, 
                                optio quaerat fuga. Ab quod animi minima ullam corrupti 
                                fuga sint magni praesentium aliquam optio!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="single-content">
                        <div className="cont-notification">
                            <div className="notification">Due in 3 days</div>
                            <div className="dots">...</div>
                        </div>
                        <div className="header-text">
                            <h2>Lorem Task Title</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                In sapiente blanditiis expedita adipisci voluptatum debitis, 
                                optio quaerat fuga. Ab quod animi minima ullam corrupti 
                                fuga sint magni praesentium aliquam optio!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="single-content">
                        <div className="cont-notification">
                            <div className="notification">Due in 3 days</div>
                            <div className="dots">...</div>
                        </div>
                        <div className="header-text">
                            <h2>Lorem Task Title</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                In sapiente blanditiis expedita adipisci voluptatum debitis, 
                                optio quaerat fuga. Ab quod animi minima ullam corrupti 
                                fuga sint magni praesentium aliquam optio!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Content;