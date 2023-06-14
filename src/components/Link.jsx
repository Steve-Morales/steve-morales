import { useState } from "react";

export default function Link({text, urlText})
{
    const [url, setUrl] = useState(text);

    return(
        <>
        <a 
            href={urlText}
            id='project-wiki-section' 
            className="content-link content-p"
            onMouseEnter={(e) => setUrl("🔗" + urlText)}
                onMouseLeave={(e) => setUrl(text)}
            >
                {url}
            </a>
        </>
    );
}