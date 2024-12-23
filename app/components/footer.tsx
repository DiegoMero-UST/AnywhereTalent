import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <section className="border-box bg-[#fdf8f3] pt-10 pb-10 grid grid-cols-3">
             <div className="flex flex-col items-center">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        width={200}
                        height={200}
                        alt="logo_footer"
                        className="cursor-pointer"
                    />    
                </Link>
                <Link href="https://www.linkedin.com/company/anywhere-talent/">
                    <img src="https://cdn.prod.website-files.com/66e84fbba763c640a1c7496e/66f2ef63cce721959468bcb8_icons8-linkedin%20(1).svg" alt="Linkedin" width={30} height={30}/>
                </Link>
             </div>
             <div className="flex flex-col items-center justify-center pb-10 static">
                <img src="https://cdn.prod.website-files.com/66e84fbba763c640a1c7496e/6751c5839db504bd15192bab_eos.png" alt="EOS_img"/>
             </div>
             <div className="relative justify-center flex flex-col pl-40 pb-10 ">
                <div>
                    <Link href="/about">About us</Link>
                </div>
                <div>
                    <Link href="/blog">Blog</Link>
                </div>
                <div>
                    <Link href="/contact">Contact us</Link>
                </div>
             </div>
        </section>
    );
}