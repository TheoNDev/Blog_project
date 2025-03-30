import { ReactNode } from "react";

interface sectionProps {
    children: ReactNode;
    className: string;
}

const Section = ({ children, className }: sectionProps) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default Section;