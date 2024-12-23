import Image from "next/image";


export default function Home() {
    return (
        <section className="p-20 flex flex-col gap-10 items-center h-[87vh]">
            <h2 className="text-6xl font-bold text-center">Our latest blog articles</h2>
            <p className="text-2xl text-center">Stay updated with the latest insights and strategies <br />shaping the future of remote talent and business solution</p>
            <div data-aos="flip-up">
                <ul className="flex p-10 gap-28 justify-center text-center">
                    <li className="flex flex-1 flex-col gap-5 items-center text-justify border border-[#4bb9b4] rounded-3xl p-5 transition easy-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-2xl cursor-pointer bg-gradient-to-b from-[#4bb9b4] to-[#0000] shadow-xl">
                        <div className="relative w-full h-64">
                            <Image
                                src="/blog1.png"
                                fill
                                alt="blog1"
                                className="rounded-xl"
                            />
                        </div>
                        <h3 className="text-2xl text-center font-bold">How to pick a Virtual Assistant that is best for your Company</h3>
                        <h4 className="text-lg text-red-500 font-bold">Read more</h4>
                    </li>
                    <li className="flex flex-1 flex-col gap-5 items-center text-justify border border-[#4bb9b4] rounded-3xl p-5 transition easy-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-2xl cursor-pointer bg-gradient-to-b from-[#4bb9b4] to-[#0000] shadow-xl">
                        <div className="relative w-full h-64">
                            <Image
                                src="/blog2.png"
                                fill
                                alt="blog2"
                                className="rounded-xl"
                            />
                        </div>
                        <h3 className="text-2xl text-center font-bold">Ten tools every Virtual Assistant should know about</h3>
                        <h4 className="text-lg text-red-500 font-bold">Read more</h4>
                    </li>
                    <li className="flex flex-1 flex-col gap-5 items-center text-justify border border-[#4bb9b4] rounded-3xl p-5 transition easy-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-2xl cursor-pointer bg-gradient-to-b from-[#4bb9b4] to-[#0000] shadow-xl">
                        <div className="relative w-full h-64">
                            <Image
                                src="/blog3.png"
                                fill
                                alt="blog3"
                                className="rounded-xl"
                            />
                        </div>
                        <h3 className="text-2xl text-center font-bold">How to build a global Remote Workforce</h3>
                        <h4 className="text-lg text-red-500 font-bold">Read more</h4>
                    </li>
                </ul>
            </div>
        </section>
    );
}