import Image from "next/image";

import './style.css';

interface CardProps {
    feature: Array<string>;
    type: string;
    typeColor: string;
    classNameBgGradient: string;
    classNameBorderGradient: string;
}

const Card = (props: CardProps) => {

    const { feature, type, typeColor, classNameBgGradient, classNameBorderGradient } = props;

    return (
        <div className={`w-full z-10 lg:w-[302px] p-[36px] lg:p-[16px] h-[545px] text-white bg-gradient-to-b ${classNameBgGradient} border ${classNameBorderGradient} rounded-[20px] flex flex-col items-center justify-between`}>
            <div className="w-full flex flex-col items-start lg:items-center">
                <div
                    className="text-[23px]"
                    style={{
                        color: `${typeColor}`
                    }}
                >
                    {type}
                </div>
                <div className="flex flex-row gap-[24px] lg:gap-0 lg:flex-col items-center mt-[26px]">
                    <div className="text-[51px]">Free</div>
                    <div className="">
                        <div className="text-[16px]">{type === 'Starter' ? 'Unlimited users' : 'per user/month'}</div>
                        <div className={`${type === 'Starter' ? 'text-[16px]' : 'text-xs opacity-55'}`}>{type !== 'Starter' ? 'billed monthly' : 'and guests'}</div>
                    </div>
                </div>
                <div className="mt-[26px] flex flex-col gap-[10px]">
                    {feature.map((item, index) => {
                        return (
                            <div
                                key={`feature-${index}`}
                                className="flex items-center gap-[10px]"
                            >
                                <Image
                                    width={25}
                                    height={40}
                                    src="/icons/iconCheck.svg"
                                    alt="icon-check"
                                />
                                <div className="text-sm">{item}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div
                style={{
                    backgroundColor: `${typeColor}`
                }}
                className="w-full h-[48px] font-semibold cursor-pointer text-black bg-white flex items-center justify-center rounded-lg"
            >
                Sign up today
            </div>
        </div>
    );
};

export default Card;