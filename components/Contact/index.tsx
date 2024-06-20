import ContactCard from "./ContactCard";

const Contact = () => {
    return (
        <div className="w-[940px] max-w-[940px] flex flex-col gap-[48px]">
            <ContactCard
                note=""
                title="Are you a startup?"
                description="Get started with a discount on any plan."
                classBgGradient="first-bg-gradient"
                classBtnGradient="first-btn-gradient"
                classTextGradient="first-title-gradient"
                />
            <ContactCard
                note=""
                title="Threads Enterprise"
                description="For enterprises who want to scale with confidence, Threads Enterprise 
                offers advanced security, additional admin controls, dedicated customer 
                support, and more."
                classBgGradient="second-bg-gradient"
                classBtnGradient="second-btn-gradient"
                classTextGradient="second-title-gradient"
                />
            <ContactCard
                note="This plan is currently invite-only."
                title="Threads Community"
                description="Threads Community offers communities the same tools that Threads 
                Professional provides at a more achievable price point. "
                classBgGradient="third-bg-gradient"
                classBtnGradient="third-btn-gradient"
                classTextGradient="third-title-gradient"
            />
        </div>
    );
};

export default Contact;