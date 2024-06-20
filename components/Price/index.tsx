import Card from "./Card";

const Price = () => {
    return (
        <div
            className="w-[940px] mx-[20px] lg:mx-0 z-0 max-w-[940px] py-[30px] flex flex-col gap-10 lg:gap-0 lg:flex-row items-center justify-between"
        >
            <Card
                gradientFrom="rgba(66,66,66,0)"
                gradientTo="rgba(112,112,178,20)"
                border="#7351C8"
                borderOpacity="0.6"
                type="Starter"
                typeColor="#ffffff"
                feature={['Unlimited  users', 'All integrations and APIs', '50 threads', '500 chat messages', 'SOC2 + GDPR compliance']}
                />
            <Card
                gradientFrom="rgba(66,66,66,0)"
                gradientTo="rgba(34,103,46,30)"
                border="#70FF88"
                borderOpacity="0.3"
                type="Professional"
                typeColor="#6FFF88"
                feature={['Unlimited  users', 'All integrations and APIs', 'Unlimited threads & chats', 'SOC2 + GDPR compliance']}
            />
            <Card
                gradientFrom="rgba(66,66,66,0)"
                gradientTo="rgba(8,124,140,30)"
                border="#75EFFF"
                borderOpacity="0.6"
                type="Organization"
                typeColor="#75EFFF"
                feature={['Unlimited  users', 'All integrations and APIs', 'SOC2 + GDPR compliance', 'Unlimited threads & chats', 'Advanced invitation controls for members', 'SCIM', 'SSO']}
            />
        </div>
    );
};

export default Price;