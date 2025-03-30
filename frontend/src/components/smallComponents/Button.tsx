import { ReactNode } from "react";

interface buttonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    btnType: "submit" | "button";
}



const Button = ({ children, className, onClick, btnType }: buttonProps) => {



    return (
        <button type={btnType} className={className} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;