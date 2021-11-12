import React, { Component } from 'react';
import "./Home.css"
import Logo from "./logo.jpg"
class Home extends Component {
    render() {
        return (
            <body className="Home">
                <div>
                    <div className="Header">
                    <h1> Home </h1>
                    <img className="logo" src={Logo} alt=""/> 
                    </div>
                    <div className="Description1">
                    <h3>About This Site</h3>
                    <p>Our GPA wiki site takes in data from Professor Wade Fagen-Ulmschneider's UIUC grade visualization charts and returns a chart of the GPAs of all classes at the University of Illinois
                        at Urbana-Champaign. There is also a feedback section where users can submit feedback about the website and its different
                        components. To see the GPA data, click the "GPA Tool" button in the drop-down menu, scroll through the many graphs on that
                        page and look for your class or another class you may be interested in. In the future, expect to see a section where you can
                        read and submit reviews about different classes as well as their average GPAs.
                    </p>
                </div>
                <div className="Description2">
                    <h3>Our Goals</h3>
                    <p>Our goal for this site is to offer students insight into the difficulty level and workload of different classes offered at UIUC
                        so that they can create balanced schedules. We hope that students will benefit from our GPA tool and that we can help manage the
                        stress levels associated with taking many difficult classes at once. In the near future, we will incorporate personal testemonies from
                        students who have taken certain classes in the past to indicate enjoyability. All in all, our mission is to help UIUC students create
                        class schedules so that they are not overwhelmed by their workload.
                    </p>
                </div>
                </div>
            </body>
        );
    }
}

export default Home;