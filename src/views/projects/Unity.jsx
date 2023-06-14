import InspectorImg from '../../assets/Unity2DMovement/unity_2d_movement_inspector.png';
import Main from '../../assets/Unity2DMovement/unity_2d_movement_main.gif';

import Link from "../../components/Link";
import ProjectView from "../ProjectView";

export default function Unity() {
    const sections = [
        { id: 'overview-section', title: "Overview" },
        { id: 'script', title: "The Script" },
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
                    Unity 2D Movement Script
                </h1>
            </div>

            <h1 class="content-h1" id="overview-section">Overview</h1>
            <p class="content-p">This small project is just one file which allows for simple flexibility for novice programmers. Unity calls individual programs, such as controlling movement, scripts. The script I created allows for 2D sprites to be move left, right, and up.</p>
            <p class="content-link content-p">
                <Link
                    text={"GitHub Repo"}
                    urlText={"https://github.com/Steve-Morales/2D-PlayerMovement-Unity"}
                />
            </p>
            <h1 class="content-h1" id="script">The Script</h1>
            <p class="content-p">Since the purpose of the script is to help novices, I made sure to parameterize various things such as speed, number of jumps, and the amount of force for a jump. These parameters can be changed through the GUI rather than than the code itself. This was accomplished by using Unity's `[SerializeField]`. For those familiar with Unity may question my decision to make fields private rather than public. This is to ensure OOP (Object Oriented Principles) are followed. Of course, the script can be edited to have getter methods if needed, but this still ensured OOP are followed.</p>
            <div>
                <img src={InspectorImg}/>
            </div>
            <p class="content-p">I also ensure to abstract flipping the sprite. This is to say, when the user moves left, the sprite would continue facing right when it should be facing left, so I ensure the sprite is facing the direction the player moves in. This eliminates confusion regarding animations to a small extent.</p>
            <p class="content-p">I make sure to include a README file which explains requirements to ensure the script works properly.</p>
        </>
    );
}