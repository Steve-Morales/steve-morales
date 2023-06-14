import ProjectView from "../ProjectView";

import Main from '../../assets/DelivAero/delivAero_main.gif';

import Link from "../../components/Link";

export default function delivAero() {
    const sections = [
        { id: 'overview-section', title: "Overview" },
        { id: 'vue', title: "Learning VueJS" },
        { id: 'big_three', title: "The Big Three (HTML, CSS, & JavaScript)" },
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
                    delivAero
                </h1>
            </div>

            <h1 id="overview-section" class="content-h1">Overview</h1>
            <p class="content-p">In this project, I learn the fundamentals of web-development to create a simple static website for an organization/club. In the process I take a glance at the importance of front-end development and unlock a new fear, centering a div. Additionally, I used Bulma, a component framework for Vue, to create the layout of the website.</p>
            <p class="content-p">
                <Link
                    text={"GitHub Repo"}
                    urlText={"https://github.com/Steve-Morales/delivAERO-Website"}
                />
            </p>
            <p class="content-p">
                <Link
                    text={"Live Website"}
                    urlText={"https://steve-morales.github.io/delivAERO-Website/"}
                />
            </p>




            <h1 id="vue" class="content-h1">Learning VueJS</h1>
            <p class="content-p">Before I was tasked with this project I've already attempted to learn web-development a few years prior. Unfortunately I was unable to learn ReactJS all those years ago. However, since then, I've been honing my programming skills which gave me the confidence to revisit my failure and make another attempt. Although not ReactJS, Vue is a relatively new tool friendly to beginners. Considering the website did not need to be extremely elaborate, I choose a simple tool (Vue).</p>
            <p class="content-p">Vue, like React, is a framework primarily focused on component based applications. Components are similar to objects in programming languages but the purpose is to have a generic template which can be reused throughout the application. Once I understood components, it became easy to plan out and construct the layout of the website. However, unlike React, it does not have hooks but for this project it did not matter and in fact made it easier to learn Vue.</p>
            <p class="content-p">However, I soon learned that creating nice looking components or functional components for that matter, can be quite time consuming. This is when I came across Bulma, a framework containing ready to use front-end components. This supplemented my poor css knowledge and allowed me to focus on functionality and design. An important aspect learning Vue is understanding the node package manager (npm). Using npm, it allows me to run and see the current website and also install packages and dependencies with ease. Moreover, scripts can be defined in the package JSON file and be ran using npm.</p>
            <h1 id="big_three" class="content-h1">The Big Three (HTML, CSS, &amp; JavaScript)</h1>
            <p class="content-p">HTML, CSS, and JavaScript are all essential technologies for building web applications. They allow for a user interface and adds interactivity to the application.</p>
            <p class="content-p">HTML defines the structure and content of a web page. It provides a way to semantically organize the content on a page. This was easy to learn, but takes a while to memorize most of the common and uncommon tags used.</p>
            <p class="content-p">CSS, on the other hand, defines the styling of a web page. It allows me to control things like the font, color, and layout of a page, making it possible to create visually appealing and consistent designs. This is harder when compared to HTML as not only do you need to memorize many properties, but it can also become complicated when animations or nested layouts are part of the application. Fortunately, the worst part was centering items, but that became easier using Bulma.</p>
            <p class="content-p">JavaScript adds interactivity to the application, typically event driven. It makes it possible to create dynamic and interactive user experience, such as the multiple carousels I've implemented ont the website.</p>
            <p class="content-p">Together, these technologies are essential for web development. They create a well-structured and visually appealing user interface, and add interactive and dynamic functionality to the application. This increased my understanding by abstracting and removing the parts of web development that would either be too confusing for a beginner or too time consuming.</p>
        </>
    );
}