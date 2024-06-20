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
            className={`w-full h-fit rounded-[20px] ${classBgGradient} border border-[#6168FA] border-opacity-40 flex items-center justify-between p-[24px]`}
        >
            <div className="flex flex-col">
                <div className={`text-[31px] font-light ${classTextGradient}`}>
                    {title}
                </div>
                <div className="text-white text-[16px] mt-3">
                    {description}
                </div>
                <div className='text-white text-[16px] mt-[27px]'>
                    {note}
                </div>
            </div>
            <div className={`h-[48px] min-w-[248px] w-[248px] ${classBtnGradient} rounded-lg text-sm font-semibold flex items-center justify-center`}>
                Contact sales
            </div>
        </div>
    );
};

export default ContactCard;