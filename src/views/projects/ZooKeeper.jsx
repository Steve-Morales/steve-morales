import ProjectView from "../ProjectView";

import AppImg from '../../assets/ZooKeeper/zoo_keeper_app_demo.png'

import Link from "../../components/Link";

export default function ZooKeeper() {
    const sections = [
        { id: 'overview-section', title: "Overview" },
        { id: 'learning-section', title: "Learning New Tools" },
        { id: 'agile-section', title: "Agile" },
        { id: 'graphs-section', title: "Graphs & Databases" },
        { id: 'lead-section', title: "Being A Tech Lead" },
    ];

    return (
        <>
            <ProjectView
                imgSrc={AppImg}
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
                    Zoo Keeper
                </h1>
            </div>
            <h1 id='overview-section' class="content-h1">Overview</h1>
            <p class="content-p">This is a project focused class where we learned principles to design, build, and deliver software for a customer. To clarify, our customer was our professor, nonetheless, he behaved like a customer. Using the principles of Agile, we ensure the customer of an expected product at the deadline. Additionally, we learn design patterns to enable us to write elegant, simple, and readable code. And of course, the work is broken down for a team of six, where I led the team.
            </p>
            <p class="content-p">
                <Link text={"GitHub Repo"} urlText={"https://github.com/CSE-110-Spring-2022/zooseeker-cse-110-team-7"} />
            </p>

            <h1 id="learning-section" class="content-h1">Learning New Tools</h1>
            <p class="content-p">Android Studio has so many things that one must learn to get started. The goal of learning new tools isn't to master it right off the bat, rather, it's to understand the fundamentals which we can build on top of. Over the course of a couple weeks we learned how to add and use UI such as buttons, text boxes, etc., and we also learned how to use the Android framework to add functionality to our application. One of the cool things about the Android framework is the ability to integrate Google's APIs and products. For example, google maps can be easily integrated into our application with a few lines of code. Moreover, it also gives us ease of access to the Android OS making it easy to add alarms, alerts, and even multithread.</p>

            <p class="content-p">As powerful as Android Studio is, perhaps one of the most powerful tools I learned throughout this project is Git/Github. I was already familiar with this tool, but it was nice to really sharpen my knowledge and fully utilize the abilities of Github. One of the newest things I learned about Github is branching, pull requests, and continuous integrated testing. Branching allowed us to work on features separately and continuous integrated testing ensured quality assurance (so that the new feature wouldn't break our app). Pull requests allowed us to merge new features onto our application. I got to work on setting up the Github Actions CLI, although as simple as it may seem, it can be confusing. For example, one of the actions we had to perform was ensuring our application would build and compile, but every time it would run the action an error would error despite the fact it would run on our own computers. After hours of research, it required creating a new file before running the action as the error stemmed from having a pre-existing file which shouldn't be part of the repository.</p>

            <h1 id="agile-section" class="content-h1">Agile</h1>
            <p class="content-p">An interesting aspect of this project was the efficiency of our planning. Agile methodologies enforced rapid development centered around the customer through "iterations", a fancy term for checking in with the customer and our current product. At the beginning stages of our project, we created user stories, tasks, and a burndown chart.</p>

            <p class="content-p">User stories are a way for both developers and customers to understand what needs be done. As an example, the customer may want some texting functionality so the story may be "When I open up the app, I want to be able to click a button that says 'Write To' and begin typing a message". This let's the developer know what the customer wants step by step. This can then be broken down into tasks. Tasks refers to programmatic functionalities that are involved in the user stories. Continuing off from the example user story, a task can be "adding a UI button with 'Write To' text" and another task can be "move to screen 2 and have a text box appear with keyboard ready". These tasks are then given a rating (between 1 and 5) of how long it would take which are then assigned to team members, usually in pairs of two for pair programming.</p>

            <p class="content-p">This is when we create a burndown chart, an indication of time left and how much needs to be completed. Although the burndown chart is linear, realistically, it's going to look more like steps where sometime it's below the linear line (which is good) and other times it's above it (which is bad).</p>

            <p class="content-p">At the end of the month, we had an iteration with our customer and they, of course, wanted to add, remove, and also alter some of the pre-existing features. We restart the process of Agile and continue working on application, this is how Agile works.</p>

            <h1 id="graphs-section" class="content-h1">Graphs & Databases</h1>
            <p class="content-p">One of the most difficult challenges for this project was using graphs alongside a (remote) database and the Android framework. Here, I applied design patterns. Namely, I used a Singleton  to make sure we didn't have multiple instances of our graph and database. This ensures everyone works with the same shared object and all updates/modifications are applied. Moreover, the use of interfaces was utilized especially since the Android framework did a lot of the heavy lifting by abstracting various methods and keeping a simple and elegant design.</p>

            <p class="content-p">For the database, we used Room, a database object mapping library for local databases. It's quite similar to SQL and, in fact, uses a lot of the same features and commands like SQL. It was an interesting challenge to create SQL commands that gave us developers what we needed while not having so many commands that we would need some reference sheet. Additionally, using the Chain of Command design pattern, we were able to minimize the number of commands as we could receive information in the form of an object and chain another method/command to get different information.</p>

            <p class="content-p">Graphs were easier to work with as the Android framework had a built-in library for graphs. However, the way we represented our graphs was not what library can use. To rectify this, we used and adapter pattern which takes in our current representation of the graph and adapts it so that methods and information that the library needs can be accessed without us having to rewrite the entire graph class we created for it. This then gave us ease to work with the library, we used the library's implementation of Dijkstra to find cheap paths for users.</p>

            <h1 id="lead-section" class="content-h1">Being A Tech Lead</h1>
            <p class="content-p">I decided to step up to the plate and lead my peers on this project. First and foremost, I must say that this was difficult and at times I felt I had more on my plate than I could chew. In other words, I felt overwhelmed various times throughout the project. However, I learned a lot from it. One of the main things I learned was how to coordinate and communicate with people. Two very important factors that play a very important role in ensuring that our team doesn't collapse in on itself. As the entirety of the team is composed to students, you could probably imagine that we were all busy. Most of the time we all couldn't meet. To combat this issue I met half the team at one time and the other at another time. However, this also presented another issue where I had to sacrifice my own time. This led to a different way of meeting. Instead I would present a document of things that needed to be done and how they can be implemented with additional resource they can look at for additional help. It by no means was very specific, but time efficiency improved. Then we would all decide to meet one day out of the two weeks to discuss what has been accomplished and what needs to be accomplished.</p>

            <p class="content-p">Of course, there were times were a pair needed additional help, this is where learned how to communicate effectively. The last thing I would want my team members to feel is embarrassed or useless. Instead of delegating a pair a new task and giving their current task to another pair that can easily solve, we communicated why they were having issues and potential fixes. Fortunately problems never got big enough where the whole team needed to be present. Moreover, we had a Discord server (a better version of Slack in my opinion) where we organized our chats and resources. This streamlined an intuitive communication process.</p>

            <p class="content-p">Interestingly I had a good grasp on implementing tasks despite all us being novices to Android Studio. Being a tech lead is very stressful but is very rewarding when efforts pay off. I would definitely do it again if I could.</p>

        </>
    );
}