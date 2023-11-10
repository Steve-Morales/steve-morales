import Main from '../../assets/MyCountry/my_country.gif';

import Link from "../../components/Link";
import ProjectView from "../ProjectView";


export default function MyCountry() {
    const sections = [
        { id: 'overview-section', title: "Overview" },
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
                    My Country
                </h1>
                <p className='content-subtitle'>
                    Country Information At Your Tips
                </p>
                <p className='content-date'>
                    November 2023 - November 2023
                </p>
            </div>

            <h1 id='overview-section' className='content-h1'>
                Overview
            </h1>
            <p className='content-p'>
                The goal of this project is to utilize an API to display information to the user.
                Specifically, a user can search information about any country.
                However, to make things both interesting and challenging, the user has different ways to search for a country.
            </p>
            <p className='content-p'>
                <Link
                    text={'My Country Project'}
                    urlText={"https://mycountry-project.netlify.app/"}
                />
            </p>

            <h1 id='challenges-section' className='content-h1'>
                Challenges and Solutions
            </h1>
            <p className='content-p'>
                The first challenge of this project was understanding how API returns information.
                Hence, the first step in solving that challenge was to read the documentation.
                Next, I looked at the result as a JSON file to understand the structure of the data.
                Lastly, once I understood the structure, I created a separate JavaScript file that had various functions to parse the received data.

            </p>
            <p className='content-p'>
                One of the biggest challenges I faced with the project was structuring React States.
                I first noticed this problem when I wanted to update the results as soon as the user changes the type of search.
                The reason this problem occurred is due to the results only updating when there was a change in the search bar.
                To solve this issue, I used a useEffect hook which used a dependency of the radio buttons (search options) states which would call the search function on the change of state.
                The next state management issue occurred when adding a spinner component (one of these <img src='https://media.tenor.com/OzAxe6-8KvkAAAAC/blue_spinner.gif' width={'30rem'} className='inline' />).
                I wanted the spinner component to be shown only when the information was still loading.
                Sounds simple enough, but the main issue was determining when to update the state to show the spinner component.
                I used the same solution as last time with a useEffect hook, but created a new function that checks for a condition before updating the state.
            </p>

            <h1 id='impact-section' className='content-h1'>
                Impact and Achievements
            </h1>
            <p className='content-p'>
                The website leveraging the Rest Countries API has made a profound impact by providing users with a dynamic and engaging platform to explore comprehensive information about countries worldwide. Through innovative search functionalities, users can delve into a rich database, not only searching by conventional methods like country names but also exploring unique and challenging criteria. This approach has not only made the user experience interesting but has also posed a delightful challenge to those seeking specific information. The achievement lies in seamlessly integrating API capabilities to deliver real-time, accurate data, fostering a deeper understanding of global demographics. This project has not only empowered users with diverse search options but has also demonstrated the potential of API integration in creating interactive and informative web experiences.
            </p>

            <h1 id='lessons-section' className='content-h1'>
                Lessons Learned and Future Applications
            </h1>
            <p className='content-p'>
                The project provided invaluable lessons that underscore the importance of meticulous documentation review when dealing with API integration. The initial challenge of comprehending the information returned by the API was effectively addressed by diving into the provided documentation. This underscored the critical role of thorough research and understanding of API functionalities. The examination of the API's response in the form of a JSON file further illuminated the structure of the data, facilitating a deeper grasp of its intricacies. The creation of a dedicated JavaScript file with specialized functions for parsing the received data emerged as a pivotal solution, emphasizing the significance of structured and modular coding practices. Moving forward, these lessons serve as a solid foundation for future applications, highlighting the necessity of methodical API exploration, documentation comprehension, and streamlined data processing for enhanced project success.
            </p>
        </>
    );
}