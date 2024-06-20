import Image from "next/image";

const Header = () => {
    return (
        <div
            className="w-full h-full shadow-xl drop-shadow-xl rounded-[20px] border-white border border-opacity-10 text-white flex items-center justify-between px-[40px] mb-[30px]"
        >
            <div className="flex items-center gap-[40px] text-sm">
                <div className="cursor-pointer">Gallery</div>
                <div className="flex items-center gap-[4px] cursor-pointer">
                    Solution
                    <Image
                        width={13}
                        height={22}
                        alt="plus-icon"
                        src="/icons/iconPlus.svg"
                    />
                </div>
                <div className="cursor-pointer">Pricing</div>
            </div>
            <div className="cursor-pointer">
                <Image
                    width={98}
                    height={38}
                    alt="thread"
                    src='/icons/iconThreads.svg'
                />
            </div>
            <div className="flex items-center gap-[36px] text-sm">
                <div className="cursor-pointer">Log In</div>
                <div
                    className="w-[94px] h-[40px] flex items-center justify-center bg-gradient-to-b from-[#7D66F5] to-[#4A29C2] rounded-[12px] cursor-pointer"
                >
                    Sign Up
                </div>
            </div>
        </div>
    );
};

export default Header;