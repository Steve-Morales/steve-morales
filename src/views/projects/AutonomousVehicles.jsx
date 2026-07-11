import { useState } from "react";

import ProjectView from "../ProjectView";

import GroupPic from '../../assets/AutonomousVehiclesImages/group_picture_1.jpg';

import FilterImg from '../../assets/AutonomousVehiclesImages/program_screenshot.png';

export default function AutonomousVechicles() {

    const sections = [
        { id: 'overview-section', title: "Overview" },
        { id: 'the-team-section', title: "The Team" },
        { id: 'ros-linux-labor-section', title: "ROS, Linux, & Labor" },
        { id: 'computer-vision-section', title: "Computer Vision - The Final Project" },
        { id: 'project-wiki-section', title: "Project Wiki" },
    ];

    return (
        <>
            <ProjectView
                imgSrc={GroupPic}
                sections={sections}
                content={<Content />}
            />
        </>
    );
}

function Content() {
    const [projectLink, setProjectLink] = useState('https://guitar.ucsd.edu/maeece148/index.php/2022SummerTeam4');
    return (
        <>
            <div className="content-title-wrapper">
                <h1 className="content-title-h1">
                    Autonomous Vehicles - Robotics
                </h1>
            </div>



            <h1 id="overview-section" className="content-h1">
                Overview
            </h1>
            <p className="content-p">
                Teams in this class were pretty diverse, my team was composed of a mechanical engineer, electrical engineer, and a team member specializing cognitive science. Then of course there was me, a computer engineer. We each had special skill sets that would allow us to progress the next 5 weeks. Our mechanical engineer understood CAD software so we entrusted them in making our chassis. Our team member in cognitive science was able to help us understand machine learning concepts and helped debug software issues. As the computer engineer I took care of setting up our Jetson Nano, our micro controller, working with linux. Unfortunately, our electrical engineer left us after the first day with no replacement so collectively we were going to have to make up for it.
            </p>



            <h1 id='the-team-section' className="content-h1">
                The Team
            </h1>
            <p className="content-p">
                Teams in this class were pretty diverse, my team was composed of a mechanical engineer, electrical engineer, and a team member specializing cognitive science. Then of course there was me, a computer engineer. We each had special skill sets that would allow us to progress the next 5 weeks. Our mechanical engineer understood CAD software so we entrusted them in making our chassis. Our team member in cognitive science was able to help us understand machine learning concepts and helped debug software issues. As the computer engineer I took care of setting up our Jetson Nano, our micro controller, working with linux. Unfortunately, our electrical engineer left us after the first day with no replacement so collectively we were going to have to make up for it.
            </p>



            <h1 id='ros-linux-labor-section' className="content-h1">
                ROS, Linux, & Labor
            </h1>
            <p className="content-p">
                Understanding Linux commands was essential for this project. To connect and use the SBC (Jetson Nano) Linux is a prerequisite, a skill I've already acquired but sharpened throughout the duration of the course. Perhaps one of the things I loathed about this class, however, was learning ROS. My biggest gripe is constantly having to use the `source` command as we constantly updated parameters for the programs we were using. Putting aside my issues, I did come to understand the importance of ROS--an organized standard working with robotics. We put 20+ hours a week dedicated to labor intensive sessions so our car could autonomously drive on a track. Our sessions were always from evening to night (usually dragging to midnight) which made it absolutely difficult for our camera to recognize objects as the lighting conditions not only changed, but also was too dark for our camera to make out any objects. Unfortunately, flashlights didn't help. Eventually we did get it to work autonomously but it had trouble keeping itself within the lanes. To fix this, we used PIDs. Fortunately, our mechanical engineer was knowledgeable on the subject. Of course I too learned about it. In simple terms, for changing parts, like speed and turning, the change in rate for each part depends on the other to ensure there isn't too much or too little of one of the parts. After about two weeks, the fruits of our labor payed off and we finally had an autonomous vehicle.
            </p>



            <h1 id='computer-vision-section' className="content-h1">
                Computer Vision - The Final Project
            </h1>
            <p className="content-p">
                The last component of this course was harnessing the power of computer Vision. Specifically, we had to implement an idea or method that could improve computer vision by generating visual data that can enhance detection of objects or utilize given data from the vision of the computer. Some concepts included SLAM (Simultaneous Localization And Mapping), truck detection, and line detection. We choose to do our project on line detection, Specifically that of car lanes. To achieve this, we used the Open CV library and implemented Canny Filtering to detect edges (lines). The full details of our project can be found on this wiki:
            </p>
            <a 
            href="https://guitar.ucsd.edu/maeece148/index.php/2022SummerTeam4"
            id='project-wiki-section' 
            className="content-link content-p"
            onMouseEnter={(e) => setProjectLink("🔗" + "https://guitar.ucsd.edu/maeece148/index.php/2022SummerTeam4")}
                onMouseLeave={(e) => setProjectLink("Project Wiki")}
            >
                {projectLink}
            </a>
            <p className="content-p">
                I should make mention that a large portion of the program came from our cognitive science team member. The end result was a program that used parameters to enhance lane detection. The following is a screenshot of our program.
            </p>
            <img src={FilterImg} className="pb-12" alt="filter image" />
        </>
    );
}