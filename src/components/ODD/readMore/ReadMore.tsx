import { useState } from "react";

// styles
import styles from './styles.module.css';

const ReadMore = ({ children }: {children: React.ReactNode}) => {

    const text = children as string;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    const shortText=text.slice(0, text.split("</p>", 2).join("</p>").length+4);

    return (
        <div>
            <div className={`text-gray ${styles.description}`} 
            dangerouslySetInnerHTML={{__html: isReadMore ? shortText : text}}>
            </div>
            <p
            className="mx-auto mb-4 mt-6 text-blue cursor-pointer w-fit"
                onClick={toggleReadMore}
            >
                {isReadMore ? <span>Read More &#8675;</span> : <span>Read less &#8673;</span>}
            </p>
        </div>
    );
};

export default ReadMore;