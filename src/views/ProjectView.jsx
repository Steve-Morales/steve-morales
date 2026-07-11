import Navbar from "../components/Navbar";
import TableOfContents from "../components/TableOfContents";
import Footer from "../components/Footer";

export default function ProjectView({ imgSrc, sections, content }) {
    
    return (
        <>
            <section className="flex flex-col min-h-screen">
                <Navbar />

                <div className="items-center">
                    <img alt="background" src={imgSrc ? imgSrc : "https://via.placeholder.com/900x600"} className="z-0 blur-md align-middle object-cover absolute h-[calc(100vh-64px)] w-full" />
                    <img alt="content" src={imgSrc ? imgSrc : "https://via.placeholder.com/900x600"} className="z-1 align-middle object-contain absolute h-[calc(100vh-64px)] w-full" />
                </div>
            </section>

            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-1"></div>
                    <div className="col-span-10 sm:col-span-8">
                        {/* Your content goes here */}
                        {content}
                    </div>
                    <div className="hidden col-span-1 sm:col-span-3 sm:inline">
                        <TableOfContents sections={sections}/>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}