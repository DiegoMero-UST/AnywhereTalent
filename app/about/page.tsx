import Image from "next/image";
import CoreValues from "../components/coreValues";

export default function Home() {
    return (
        <section>
            <div className="flex flex-col items-center p-36 gap-20">
                <h2 className="text-6xl font-bold" data-aos="fade-up">About Us</h2>
                <p className="text-3xl text-justify" data-aos="fade-up">
                    Anywhere Talent began with two brothers, Aamir and Asif, who saw an opportunity to transform how businesses access talent. In 2015, faced with a major challenge in their entrepreneurial journey, they reimagined the possibilities of remote work. Their vision became clear after traveling to the Philippines, where they met the first members of their remote team. Seeing the dedication and potential of these individuals firsthand, they knew this approach wasn’t just a solution for the moment—it was the future.
                </p>
                <p className="text-3xl text-justify" data-aos="fade-up">
                    By fully embracing remote work, Aamir and Asif built two thriving businesses generating nearly $30 million in annual gross receipts. This success cemented their belief in the power of global talent and its ability to reshape how businesses operate.
                </p>
                <Image
                    src="/ourteam.png"
                    width={750}
                    height={750}
                    alt="Team"
                    className="rounded-3xl"
                    data-aos="fade-up"
                />
                <p className="text-3xl text-justify" data-aos="fade-up">
                    Today, Anywhere Talent bridges the gap between businesses and global talent. We use cutting-edge AI tools to streamline operations and tailor training, ensuring talent is equipped to meet specific business needs. Our focus is on creating seamless collaborations that help businesses achieve more while reducing inefficiencies.
                </p>
                <p className="text-3xl text-justify" data-aos="fade-up">
                    Our approach integrates advanced technology with a human touch. From simplifying workflows to tackling repetitive tasks, we provide tools and processes that empower teams to focus on what matters most. With an emphasis on adaptability and growth, we aim to make remote collaboration a cornerstone of business success.
                </p>
                <p className="text-3xl text-justify" data-aos="fade-up">
                    At Anywhere Talent, we’re not just connecting businesses with talent—we’re building partnerships that unlock potential and drive growth.
                </p>
            </div>
            <div className="flex flex-col items-center gap-20">
                <h2 className="text-5xl" data-aos="fade-up">Your Strategic Partner In Growth</h2>
                <ul className="flex gap-32">
                    <li className="flex flex-col items-center p-20 rounded-3xl bg-gradient-to-b from-[#4bb9b4] to-[#0000] w-42" data-aos="fade-right"> 
                        <h3 className="text-5xl">100%</h3>
                        <h4 className="text-3xl">satisfied customers</h4>
                    </li>
                    <li className="flex flex-col p-20 items-center rounded-3xl bg-gradient-to-b from-[#4bb9b4] to-[#0000] w-42" data-aos="fade-up">
                        <h3 className="text-5xl">5</h3>
                        <h4 className="text-3xl">Countries</h4>
                    </li>
                    <li className="flex flex-col p-20 items-center rounded-3xl bg-gradient-to-b from-[#4bb9b4] to-[#0000] w-42" data-aos="fade-left">
                        <h3 className="text-5xl">40</h3>
                        <h4 className="text-3xl">employees worldwide</h4>
                    </li>
                </ul>
            </div>
            <CoreValues />
        </section>
    );
}