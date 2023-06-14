import Main from '../../assets/Otto/otto_demo.png';

import ProjectView from '../ProjectView';
import Link from '../../components/Link';

export default function Otto() {
    const sections = [
        { id: 'overview-section', title: "Overview" },
        { id: 'libs', title: "Tkinter & Pyautogui" },
        { id: 'design', title: "Design" },
        { id: 'wil', title: "What I Learned" },
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
                    Otto
                </h1>
            </div>

            <h1 class="content-h1" id="overview-section">Overview</h1>
            <p class="content-p">The initial purpose of this application was to download online textbooks. However, I came to realize the tool I initially created was far more useful if I generalize my code a little more. In this project I used Python to quickly create an Window OS application which automates user input with the help of Tkinter and Pyautogui libraries.</p>
            <p class="content-link content-p">
                <Link text="GitHub Repo" urlText={"https://github.com/Steve-Morales/Otto"}/>
            </p>
            <h1 class="content-h1" id="libs">Tkinter & Pyautogui</h1>
            <p class="content-p">At this point of time, I hardly ever used Python. However, a lot of same concepts from C++ can be applied to new languages which helped in rapidly creating the application.</p>
            <p class="content-p">Tkinter is a library which helps create GUIs. It is relatively intuitive, but like my experience in Python, I have no idea how to use it. I referenced the documentation heavily and learned simple concepts like creating buttons and event handling. After hours messing about. I started to flesh out my GUI. However, as soon as I began I realized that I needed to implement a lot of the even handling.</p>
            <p class="content-p">Pyautogui is a library which can automate user input. This was perhaps the simplest of the two libraries. Of course, I had to reference documentation heavily as well, but implementation was way easier.</p>
            <p class="content-p">Once I implemented all the event handling, I then continued on finishing the GUI. However, I then realized repeating input would be more difficult than initially anticipated.</p>
            <h1 class="content-h1" id="design">Design</h1>
            <p class="content-p">The design I came up with is quite simple. Instead of creating a "step" object, it creates a loop object where it contains all the steps to be repeated and how many times (iterations) it should be looped for. This way, from the array of steps the user wants to take, when it comes across a loop object, it will loop through all steps contained within the loop. A simple and functional approach if I do say so myself.</p>
            <h1 class="content-h1" id="wil">What I Learned</h1>
            <p class="content-p">Python is a very powerful tool for prototyping and seeing ideas come to life. There are so many libraries out there which can aid in prototyping. Moreover, learning new languages is easier than I thought, in fairness however, Python is a really beginner friendly language, but even so, I think a lot of the concepts from C++ heavily apply to learning new programming languages.</p>

        </>
    );
}