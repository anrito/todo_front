import React from 'react';



const Header = () => {


    return (

        <div>
            <header>



                <div className="search">

                    <i className="fa fa-search" aria-hidden="true"></i>

                    <input type="text" name="" placeholder="Search..." />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>

                </div>


                <div className="userImage">
                    <p>Name Surname</p>

                    <a href="!#"><img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="img" /></a>
                    <a href="!#"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                    </svg></a>

                </div>











            </header>
        </div>
    );
}






export default Header;