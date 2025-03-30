import { ReactNode } from "react";

interface articleProps {
    children: ReactNode;
    className: string;
}

const Article = ({ children, className }: articleProps) => {
    return (
        <article className={className}>
            {children}
        </article>
    )
}

export default Article;