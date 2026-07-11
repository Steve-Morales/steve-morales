import Navbar from "../components/Navbar";
import TableOfContents from "../components/TableOfContents";
import Footer from "../components/Footer";

export default function ProjectView({ imgSrc, sections, content }) {
    
    return (
        <div className="bg-gray-950 min-h-screen">
            <section className="flex flex-col min-h-screen relative">
                <Navbar />

                <div className="items-center">
                    <img alt="background" src={imgSrc ? imgSrc : "https://via.placeholder.com/900x600"} className="z-0 blur-md align-middle object-cover absolute h-[calc(100vh-64px)] w-full opacity-30" loading="lazy" />
                    <img alt="content" src={imgSrc ? imgSrc : "https://via.placeholder.com/900x600"} className="z-1 align-middle object-contain absolute h-[calc(100vh-64px)] w-full" loading="eager" />
                </div>
            </section>

            <div className="container mx-auto bg-gray-950 relative z-10">
                <div className="grid grid-cols-12 gap-4 py-8">
                    <div className="col-span-1"></div>
                    <div className="col-span-10 sm:col-span-8">
                        {content}
                    </div>
                    <div className="hidden col-span-1 sm:col-span-3 sm:inline">
                        <TableOfContents sections={sections}/>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
}