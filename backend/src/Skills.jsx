import React from 'react'

export default function Skills() {
    return (
        <div id='skill'>
            <div>
                <h2 style={{ color: '#ffbb00' }} >Skills</h2>
                <div className="logo ">
                    <div className="dot"></div>
                    <div className="line"></div>
                </div>
                <h2 className='text-center' style={{ color: '#ffbb00' }}>Technical Skills</h2>
                <div className="con">
                    <li>
                        <div className="py">
                            <h3>Python</h3>
                            <h3>85%</h3>
                        </div>
                        <div className="bar python"></div>
                    </li>

                    <li>
                        <div className="django">
                            <h3>Django</h3>
                            <h3>80%</h3>
                        </div>
                        <div className="bar django"></div>
                    </li>

                    <li>
                        <div className="flask">
                            <h3>Flask</h3>
                            <h3>80%</h3>
                        </div>
                        <div className="bar flask"></div>
                    </li>

                    <li>
                        <div className="js">
                            <h3>JavaScript</h3>
                            <h3>70%</h3>
                        </div>
                        <div className="bar js"></div>
                    </li>

                    <li>
                        <div className="react">
                            <h3>React</h3>
                            <h3>75%</h3>
                        </div>
                        <div className="bar react"></div>
                    </li>

                    <li>
                        <div className="sql">
                            <h3>MySQL</h3>
                            <h3>85%</h3>
                        </div>
                        <div className="bar sql"></div>
                    </li>

                </div>
            </div>
        </div>
    )
}
