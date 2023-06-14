import Main from '../../assets/MARVIN/marvin_demo.gif';

import Link from "../../components/Link";
import ProjectView from "../ProjectView";


export default function Marvin()
{
    const sections = [
        { id: 'overview-section', title: "Overview" },
        { id: 'role-section', title: "Role in the Project" },
        { id: 'challenges-section', title: "Challenges and Solutions" },
        { id: 'impact-section', title: "Impact and Achievements" },
        { id: 'lessons-section', title: "Lessons Learned and Future Applications" },
    ];

    return (
        <>
            <ProjectView
                imgSrc={Main}
                sections={sections}
                content={<Content />}
            />
        </>
    );
}

function Content() {
    return (
        <>
            <div className="content-title-wrapper">
                <h1 className="content-title-h1">
                    M.A.R.V.I.N
                </h1>
                <p className='content-subtitle'>
                    Medical Augmented Reality Visualizer for Intuitive Navigation
                </p>
                <p className='content-date'>
                    April 2023 - June 2023
                </p>
            </div>

            <h1 id='overview-section' className='content-h1'>
                Overview
            </h1>
            <p className='content-p'>
                The field of surgical procedures faces challenges related to limited visualization of a patient's internal anatomy during surgeries, leading to increased risks and complications. To address this problem, the project aims to leverage Augmented Reality (AR) technology, specifically using Microsoft Hololens as a medium, to provide surgeons with real-time data and 3D organ modeling during surgical procedures. By doing so, the project seeks to improve surgical precision, reduce complications, and ultimately enhance patient outcomes. This innovative approach not only benefits surgeons by improving their ability to visualize anatomy but also has the potential to increase access to quality healthcare and facilitate remote guidance from surgeons worldwide. The project aligns with the sponsor's mission to advance healthcare delivery and improve patient outcomes while offering economic benefits such as cost savings and increased efficiency in surgical procedures.
            </p>
            <p className='content-p'>
                Compared to existing solutions like traditional surgical navigation systems or other VR/AR technologies, the Hololens technology stands out for its hands-free and intuitive interface, providing real-time information without interfering with the surgeon's workflow. Traditional systems may have limitations in accuracy, require cumbersome equipment, or lack real-time feedback and communication capabilities. In contrast, the project offers a comprehensive and accurate solution that bridges the gap between medical education globally, improving surgical procedures, and benefiting medical professionals and patients alike. With its potential to revolutionize healthcare delivery and inspire further innovation in the industry, this project holds significant importance and addresses the limitations of current anatomical visualization methods.
            </p>
            <p className='content-p'>
            <Link
                text={"M.A.R.V.I.N Slides"}
                urlText={"https://docs.google.com/presentation/d/1j_NpgbEH2CC8YHEa9jQia-UKpQuQhkgB5btfOyXTS4I/edit?usp=sharing"}
            />
            </p>
            <p className='content-p'>
            <Link
                text={"M.A.R.V.I.N Report"}
                urlText={"https://docs.google.com/document/d/17a3l5X2nWCL1UGxf7b0cTkHhc6jciAj1QbGBiS8RSLY/edit?usp=sharing"}
            />
            </p>


            <h1 id='role-section' className='content-h1'>
                Role in the Project
            </h1>
            <p className='content-p'>
            As a team leader, my primary responsibility was to lead the development of applications for the Hololens. I worked closely with our mentor, who is a surgeon, to understand their requirements and translate them into practical solutions. My role involved overseeing the development process, coordinating team members, and ensuring that the technological aspects of the project were feasible.
            </p>

            <h1 id='challenges-section' className='content-h1'>
            Challenges and Solutions
            </h1>
            <p className='content-p'>
            One of the technical challenges we faced was setting up and deploying the application, which required extensive research and seeking help from the developer community. Another challenge was the limited computation power of the Hololens, resulting in noticeable lag during video streaming. To overcome this, we optimized the application and explored ways to improve performance.
            </p>

            <h1 id='impact-section' className='content-h1'>
            Impact and Achievements
            </h1>
            <p className='content-p'>
            The project made a significant impact in terms of innovation in the XR space and improving healthcare equity. By leveraging XR/AR technology, the project aimed to enhance surgical procedures and provide equitable access to quality healthcare. The biggest achievement was successfully developing a prototype, considering the complexity of the project and the unfamiliarity with the technology. The project also provided valuable lessons in communication, particularly in effectively explaining technical concepts to non-technical stakeholders.
            </p>

            <h1 id='lessons-section' className='content-h1'>
            Lessons Learned and Future Applications
            </h1>
            <p className='content-p'>
            One of the key lessons learned from the project was the importance of effective communication, especially when working with non-technical sponsors or stakeholders. The project's success in achieving a prototype has provided valuable experience in working with XR technology, which can be applied to future projects in the healthcare or XR fields. Additionally, the project highlighted the need to prioritize user experience in future iterations, considering the trade-offs made to prioritize functionality in the current version.
            </p>

         </>
    );
}