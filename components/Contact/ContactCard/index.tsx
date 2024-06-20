import './styles.css';

interface ContactCardProps {
    classTextGradient: string;
    classBgGradient: string;
    classBtnGradient: string;
    title: string;
    description: string;
    note: string;
}

const ContactCard = (props: ContactCardProps) => {

    const { classBgGradient, classTextGradient, title, description, note, classBtnGradient } = props;

    return (
        <div
            style={{
                borderStyle: 'inset'
            }}
            className={`w-full h-fit rounded-[20px] ${classBgGradient} border border-[#6168FA] border-opacity-40 flex flex-col md:flex-row items-center justify-between p-[24px]`}
        >
            <div className="w-full md:w-autoflex flex-col">
                <div className={`text-[31px] font-light ${classTextGradient}`}>
                    {title}
                </div>
                <div className="text-white text-[16px] mt-3">
                    {description}
                </div>
                <div className='text-white text-[16px] mb-[36px] mt-[36px] md:mb-0'>
                    {note}
                </div>
            </div>
            <div className={`h-[48px] w-full md:min-w-[248px] md:w-[248px] ${classBtnGradient} rounded-lg text-sm font-semibold flex items-center justify-center`}>
                Contact sales
            </div>
        </div>
    );
};

export default ContactCard;