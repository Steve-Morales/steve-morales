import { useState } from "react";

export default function IconLink({ icon_component, url, link_text, hover_text }) {

    const [text, setText] = useState(link_text ? link_text : "Link Text");

    return (
        <div className="flex flex-col justify-center items-center p-2">
            {icon_component ? icon_component : <img src={'https://via.placeholder.com/300x200'} className='w-3/12' />}
            <a
                href={url ? url : '#'}
                onMouseEnter={(e) => setText("🔗" + (hover_text ? hover_text : "https://www.example.com"))}
                onMouseLeave={(e) => setText(link_text ? link_text : "Link Text")}
                className="text-indigo-700 underline font-extrabold"
            >
                {text}
            </a>
        </div>
    );
}