import Image from "next/image";

interface CardProps {
    gradientFrom: string;
    gradientTo: string;
    border: string;
    borderOpacity: string;
    feature: Array<string>;
    type: string;
    typeColor: string;
}

const Card = (props: CardProps) => {

    const { gradientFrom, gradientTo, border, borderOpacity, feature, type, typeColor } = props;

    const bgGradient = `from-[${gradientFrom}] to-[${gradientTo}]`;
    const borderRender = `border-[${border}] border-opacity-[${borderOpacity}]`

    return (
        <div className={`w-[302px] z-20 p-[16px] h-[545px] text-white bg-gradient-to-b ${bgGradient} border ${borderRender} rounded-[20px] flex flex-col items-center justify-between`}>
            <div className="flex flex-col items-center">
                <div
                    className="text-[19px]"
                    style={{
                        color: `${typeColor}`
                    }}
                >
                    {type}
                </div>
                <div className="text-[51px] mt-[26px]">Free</div>
                <div className="">
                    <div className="text-[16px]">{type === 'Starter' ? 'Unlimited users' : 'per user/month'}</div>
                    <div className={`${type === 'Starter' ? 'text-[16px]' : 'text-xs opacity-55'}`}>{type !== 'Starter' ? 'billed monthly' : 'and guests'}</div>
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