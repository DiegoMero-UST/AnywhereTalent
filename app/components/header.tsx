import Image from "next/image";

export default function Header() {
    return (
        <section className="relative flex h-[87vh] origin-top">
            <Image
                src='/workaholics.png'
                sizes="100vw"
                className="pt-20"
                width={1000}
                height={500}
                alt="Header"
            />
            <div className="flex items-center flex-col pt-28 -ml-24 gap-20" data-aos="fade-up">
                <h1 className="text-6xl italic font-bold text-center w-[900px]">Hire the Best, ANYWHERE</h1>
                <h2 className="text-4xl text-justify text-center w-[900px]">Anywhere connects businesses with top-tier global talent, enabling companies to scale efficiently and effectively. Whether you need skilled virtual assistants, strategic growth consultants, or specialized support, we’re here to help you build a team that drives your success anywhere in the world.</h2>
                <button className="transition easy-in-out bg-[#0A8D94] hover:-translate-y-1 hover:scale-110 hover:bg-[#4bb9b4] hover:shadow-2xl rounded-3xl p-5 text-4xl text-white w-[500px] shadow-lg">Book discovery call</button>
            </div>
        </section>
    );
}