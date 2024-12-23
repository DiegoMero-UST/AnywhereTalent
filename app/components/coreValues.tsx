import Image from "next/image";

export default function CoreValues() {
    return (
        <section className="p-20 pt-48">
            <h2 className="text-center text-6xl font-bold" data-aos="fade-up">Our Core Values</h2>
            <div data-aos="flip-up">
                <ul className="flex p-20 gap-10 justify-center">
                    <li className="flex flex-col gap-10 items-center text-justify border border-[#4bb9b4] rounded-3xl p-5 transition easy-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-2xl cursor-pointer">
                        <Image
                            src="/value1.png"
                            width={75}
                            height={75}
                            alt="Value1"
                            className="rounded-xl"
                        />
                        <h3 className="text-xl text-center font-bold">Grow Together, Win Together</h3>
                        <h4 className="text-lg">We’re here to support, uplift, and inspire each other. When we thrive as a team, you benefit from unmatched dedication and expertise.</h4>
                    </li>
                    <li className="flex flex-col gap-10 items-center text-justify border border-[#4bb9b4] rounded-3xl p-5 transition easy-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-2xl cursor-pointer">
                        <Image
                            src="/value2.png"
                            width={75}
                            height={75}
                            alt="Value2"
                            className="rounded-xl"
                        />
                        <h3 className="text-xl text-center font-bold">Clear and Connected</h3>
                        <h4 className="text-lg">We believe great results come from great communication. You’ll always know where things stand, because we’re not just thorough—we’re transparent.</h4>
                    </li>
                    <li className="flex flex-col gap-10 items-center text-justify border border-[#4bb9b4] rounded-3xl p-5 transition easy-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-2xl cursor-pointer">
                        <Image
                            src="/value3.png"
                            width={75}
                            height={75}
                            alt="Value3"
                            className="rounded-xl"
                        />
                        <h3 className="text-xl text-center font-bold">Solutions First, Always</h3>
                        <h4 className="text-lg">Challenges are opportunities in disguise. We approach every task with creativity, resourcefulness, and a drive to deliver for you.</h4>
                    </li>
                    <li className="flex flex-col gap-10 items-center text-justify border border-[#4bb9b4] rounded-3xl p-5 transition easy-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-2xl cursor-pointer">
                        <Image
                            src="/value4.png"
                            width={75}
                            height={75}
                            alt="Value4"
                            className="rounded-xl"
                        />
                        <h3 className="text-xl text-center font-bold">Moments That Matter</h3>
                        <h4 className="text-lg">We don’t just get the job done—we leave a lasting impression. Your experience is as important to us as the results we deliver.</h4>
                    </li>
                    <li className="flex flex-col gap-10 items-center text-justify border border-[#4bb9b4] rounded-3xl p-5 transition easy-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-2xl cursor-pointer">
                        <Image
                            src="/value5.png"
                            width={75}
                            height={75}
                            alt="Value5"
                            className="rounded-xl"
                        />
                        <h3 className="text-xl text-center font-bold">Integrity Above All</h3>
                        <h4 className="text-lg">Doing the right thing isn’t optional—it’s who we are. You can count on us to act with honesty, accountability, and purpose.</h4>
                    </li>
                </ul>
            </div>
        </section>
    );
}



{/* <section className="p-32 flex flex-col gap-20 items-center">
            <div className="flex gap-5">
                <Image
                    src="/value1.png"
                    width={75}
                    height={75}
                    alt="Team"
                    className="rounded-xl"
                />
                <div>
                    <h2 className="text-2xl font-bold">Grow Together, Win Together</h2>
                    <p className="text-xl">We’re here to support, uplift, and inspire each other. <br />When we thrive as a team, you benefit from <br />unmatched dedication and expertise.</p>
                </div>
            </div>
            <div className="flex gap-20">
                <div className="flex gap-5">
                    <Image
                        src="/value2.png"
                        width={75}
                        height={75}
                        alt="Team"
                        className="rounded-xl"
                    />
                    <div>
                        <h2 className="text-2xl font-bold">Clear and Connected</h2>
                        <p className="text-xl">We believe great results come from great communication. <br /> You’ll always know where things stand, because we’re not just thorough—we’re transparent.</p>
                    </div>
                </div>
                <h2 className="text-5xl font-bold">Our Core Values</h2>
                <div className="flex gap-5">
                    <Image
                        src="/value3.png"
                        width={75}
                        height={75}
                        alt="Team"
                        className="rounded-xl"
                    />
                    <div>
                        <h2 className="text-2xl font-bold">Solutions First, Always</h2>
                        <p className="text-xl">Challenges are opportunities in disguise. <br /> We approach every task with creativity, resourcefulness, and a drive to deliver for you.</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-20 pl-40">
                <div className="flex gap-5">
                    <Image
                        src="/value4.png"
                        width={75}
                        height={75}
                        alt="Team"
                        className="rounded-xl"
                    />
                    <div>
                        <h2 className="text-2xl font-bold">Moments That Matter</h2>
                        <p className="text-xl">We don’t just get the job done—we leave a lasting impression. <br />Your experience is as important to us as the results we deliver.</p>
                    </div>
                </div>
                <div className="flex gap-5">
                    <Image
                        src="/value5.png"
                        width={75}
                        height={75}
                        alt="Team"
                        className="rounded-xl"
                    />
                    <div>
                        <h2 className="text-2xl font-bold">Integrity Above All</h2>
                        <p className="text-xl">Doing the right thing isn’t optional—it’s who we are. <br />You can count on us to act with honesty, accountability, and purpose.</p>
                    </div>
                </div>
            </div>
        </section> */}