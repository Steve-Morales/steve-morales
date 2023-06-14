import Main from '../../assets/AutoJober/auto_jober_main.gif';
import EventImage from '../../assets/AutoJober/auto_jober_participants.jpg';

import Link from "../../components/Link";
import ProjectView from "../ProjectView";

export default function AutoJober() {
    const sections = [
        { id: 'overview-section', title: "Overview" },
        { id: 'lead', title: "Tech Lead" },
        { id: 'addendum', title: "Addendum" },
        { id: 'event_img', title: "Event Image" },
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
                    Auto Jober
                </h1>
            </div>
            <h1 class="content-h1" id="overview-section">Overview</h1>
            <p class="content-p">This project entails creating a desktop application using webscraping to gather information about a website and then manipulate a website's input using the scraped information. I led a small team over the course of several weeks to create an application to automate applying to jobs using LinkedIn.</p>
            <p class="content-link content-p">
                <Link
                    text={"GitHub Repo"}
                    urlText={"https://github.com/Steve-Morales/Auto-Jober"}
                />
            </p>

            <p class="content-link content-p">
                <Link
                    text={"Project PDF"}
                    urlText={"https://github.com/Steve-Morales/Auto-Jober/blob/main/AUTO%20JOBER.pdf"}
                />
            </p>

            <h1 class="content-h1" id="lead">Tech Lead</h1>
            <p class="content-p">This was the first time I've led a software project before and the challenge was quite daunting. Fortunately, I knew this was a golden opportunity to not be afraid to make mistakes and learn what it takes to lead a group.</p>
            <p class="content-p">Early on, it seemed the hardest part would be to come up with a feasible project idea. One of the key challenges of this role would be to effectively manage the team members, including their tasks and workload. I would need to ensure that each team member is working on the right tasks, and that they have the support and resources they need to complete their work. Fortunately, we were able to designate time to meet up 3 times throughout the quarter. This gave us an opportunity to ensure we had a cohesive program as we broke up into two small sub-teams.</p>
            <p class="content-p">I was not anticipating that I would need a strong grasp not only in concepts but as well as understanding written code from both sub-teams. One of my biggest failures was understanding how to use Git/Github. Our final demo did not work as intended because we weren't able to properly push updates from a team member's computer. As a tech lead, I learned the importance of understanding technologies and tools.</p>
            <h1 class="content-h1" id="addendum">Addendum</h1>
            <p class="content-p">Here I want to give context to the project and cover what went wrong throughout the weeks. I want to note that I am not trying to defame anyone, but rather reflect on the mistakes and to a small extent give an excuse for, what I consider, a poor finish.</p>
            <p class="content-p">This project comes from a quarterly event hosted by IEEE at UC San Diego (where I am a student at). The way it works is that everyone applies to take part in the event where the application asks about experience and reasoning to join. Then through some process, applicants who get to join the event are put into groups of 4 to 6. I'm not entirely sure if groups are random, regardless, all teams get access to a mentor whom can guide them. An amazing resource in the off chance that everyone in a team is really inexperienced or lost. In the off chance that all your team members leave you or if you are too small of a team, the staff (people in charge or helping with event) will put you into a different team. I applied for the Fall 2021 when COVID was still a thing.</p>
            <p class="content-p">The way it typically works is that we get up until the end of the quarter to showcase, however, because of COVID restrictions I believe there were issues with booking a room as there was talk that restricts would become tight again. To ensure we got the chance to showcase our projects, they decided to move the showcase sooner than expected. In the end, there the over time, in weeks was roughly 6.</p>
            <p class="content-p">The event is broken by 3 total meetups, 2 for a coding session and 1 for a showcase. Yet, my team was quite inexperienced perhaps much more than I was. However, I could not always take the wheel as I knew it was important for them to learn and not have an over reliance on me. This is not to say I always had the answers, but I need my team mates to be just as resourceful as I was. This meant learning their respective Python libraries.</p>
            <p class="content-p">In the end, the inexperience and lack of time made it really difficult to finish strong.</p>
            <h1 class="content-h1" id="event_img">Event Image</h1>
            <div class="pb-12">
                <img src={EventImage}/>
            </div>
        </>
    );
}