export default function Content() {
    return (
        <section id="Content" className="h-full pt-28 gap-30 bg-cyan-700 text-white">
            <div className="pt-5" data-aos="fade-up">
                <p className="text-6xl italic font-bold text-center ">What do we offer?</p>
            </div>
            <div className="grid grid-cols-3 gap-20 p-28 pb-36" data-aos="fade-up">
                <div className="border-1 border-b-cyan-700 border-[#61d1ca] rounded-t-3xl bg-gradient-to-b from-[#4bb9b4] to-[#0000] pb-16 flex flex-col gap-5">
                    <div className="p-2.5 pt-5">
                        <img src="/help_img.webp" alt="help" className="w-24 h-24 rounded-3xl mx-auto" />
                    </div>
                    <div className="flex flex-col justify-content p-2 gap-2 flex flex-col gap-5">
                        <p className="text-4xl italic font-bold text-center">Affordable Help:</p>
                        <div>
                            <p className="text-base text-2xl text-center p-2">Save 50–70% compared to hiring a full-time employee with talented virtual assistants.</p>
                        </div>
                    </div>
                </div>
                <div className="border-1 border-b-cyan-700 border-[#61d1ca] rounded-t-3xl bg-gradient-to-b from-[#4bb9b4] to-[#0000] flex flex-col gap-5">
                    <div className="p-2.5 pt-5">
                        <img src="/effective_img.jpg" alt="effective" className="w-24 h-24 rounded-3xl mx-auto" />
                    </div>
                    <div className="flex flex-col justify-content p-2 gap-2 flex flex-col gap-5">
                        <p className="text-4xl italic font-bold text-center">Quick and Effective:</p>
                        <div>
                            <p className="text-base text-2xl text-center p-2">Get customized support that helps you jump right in and gets you the best result.</p>
                        </div>
                    </div>
                </div>
                <div className="border-1 border-b-cyan-700 border-[#61d1ca] rounded-t-3xl bg-gradient-to-b from-[#4bb9b4] to-[#0000] flex flex-col gap-5">
                    <div className="p-2.5 pt-5">
                        <img src="/adaptable_img.jpg" alt="adaptable" className="w-24 h-24 rounded-3xl mx-auto" />
                    </div>
                    <div className="flex flex-col justify-content p-2 gap-2 flex flex-col gap-5">
                        <p className="text-4xl  italic font-bold text-center">Adaptable and Easy:</p>
                        <div>
                            <p className="text-base text-2xl text-center p-2">Scale your support up or down as needed, with no long-term contracts or extra costs.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center flex-col h-full bg-[url(../public/collage_image.jpg)] bg-cover bg-no-repeat bg-fixed text-white p-32">
                <h1 className="text-6xl italic font-bold text-center p-5" data-aos="fade-up">Transform your hiring strategy</h1>
                <div className="p-5 pt-10 text-3xl text-justify text-center w-[900px]" data-aos="fade-up">
                    <p>Our agency specializes in sourcing top-tier professionals from around the world at significantly lower costs than traditional U.S. hires. Ready to build a winning team?</p>
                </div>
                <div className="pl-20 p-10 text-3xl text-justify text-center w-[500px]" data-aos="fade-up">
                    <p>Schedule a call with us now:</p>
                </div>
                <div  data-aos="fade-up">
                    <button className="transition easy-in-out bg-[#0A8D94] hover:-translate-y-1 hover:scale-110 hover:bg-[#4bb9b4] rounded-3xl p-5 hover:shadow-2xl shadow-lg text-4xl text-white w-[500px]">Book discovery call</button>
                </div>
            </div>
        </section>
    );
}