import { useState } from "react";

export default function IconLink({ icon_component, url, link_text, hover_text }) {

    const [text, setText] = useState(link_text ? link_text : "Link Text");

    return (
        <div className="flex flex-col justify-center items-center p-4 transition-transform hover:scale-110 duration-300">
            <div className="text-gray-400 hover:text-white transition-colors duration-300">
                {icon_component ? icon_component : <img alt="Icon" src={'https://via.placeholder.com/300x200'} className='w-3/12' />}
            </div>
            <a
                href={url ? url : '#'}
                onMouseEnter={(e) => setText(hover_text ? hover_text : "https://www.example.com")}
                onMouseLeave={(e) => setText(link_text ? link_text : "Link Text")}
                className="text-blue-400 hover:text-blue-300 underline font-bold mt-2 transition-colors duration-300"
            >
                {text}
            </a>
        </div>
    );
}