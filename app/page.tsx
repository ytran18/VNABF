import Image from "next/image";

import Header from "@/components/Header";
import Price from "@/components/Price";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <div className="w-screen flex flex-col items-center relative overflow-hidden">
            <div className="w-full h-[336px] flex flex-col items-center bg-gradient-to-b from-[#7715f9] to-[#d63dff]">
                <div className="w-full ld:w-[1108px] h-[80px] mt-0 ld:mt-[20px]">
                    <Header />
                    <div className="flex z-10 relative flex-col items-center">
                        <div className="text-[39px] text-[#EFEFF1]">Pricing</div>
                        <div className="w-[340px] text-[23px] text-white text-center">
                            Use Threads for free with your whole team or upgrade to 
                            enable even more features.
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute z-0">
                <Image
                    src="/icons/header-bg.svg"
                    alt="header-bg"
                    className="!max-w-none scale-100 3xl:scale-125"
                    width={2586}
                    height={490}
                />
            </div>
            <div className="w-full bg-gradient-to-b from-[#261F49] to-[#0A0517] flex justify-center pb-[48px]">
                <Price />
            </div>
            <div className="w-full bg-[#0A0517] flex justify-center pb-10">
                <Contact />
            </div>
        </div>
    );
}
