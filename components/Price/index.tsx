import Card from "./Card";

const Price = () => {
    return (
        <div
            className="w-[940px] mx-[20px] lg:mx-0 max-w-[940px] py-[30px] flex flex-col gap-10 lg:gap-0 lg:flex-row items-center justify-between"
        >
            <Card
                classNameBgGradient="first-card-bg"
                classNameBorderGradient="first-card-border"
                type="Starter"
                typeColor="#ffffff"
                feature={['Unlimited  users', 'All integrations and APIs', '50 threads', '500 chat messages', 'SOC2 + GDPR compliance']}
                />
            <Card
                classNameBgGradient="second-card-bg"
                classNameBorderGradient="second-card-border"
                type="Professional"
                typeColor="#6FFF88"
                feature={['Unlimited  users', 'All integrations and APIs', 'Unlimited threads & chats', 'SOC2 + GDPR compliance']}
            />
            <Card
                classNameBgGradient="third-card-bg"
                classNameBorderGradient="third-card-border"
                type="Organization"
                typeColor="#75EFFF"
                feature={['Unlimited  users', 'All integrations and APIs', 'SOC2 + GDPR compliance', 'Unlimited threads & chats', 'Advanced invitation controls for members', 'SCIM', 'SSO']}
            />
        </div>
    );
};

export default Price;