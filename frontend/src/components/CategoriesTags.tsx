import Button from "./smallComponents/Button";
import Section from "./smallComponents/Section";
import "../styles/componentStyle/categories.scss";

interface Icategories {
    title: string;
}

const categories: Icategories[] = [
    { title: "Technology" },
    { title: "Lifestyle" },
    { title: "Travel" },
    { title: "Food" },
    { title: "Finance" },
    { title: "Education" },
    { title: "Entertainment" },
    { title: "Fashion & Beauty" },
    { title: "Health & Fitness" },
    { title: "DIY & Home" },
    { title: "Parenting" },
    { title: "Business & Entrepreneurship" },
    { title: "Science" },
    { title: "Sports" },
    { title: "Art & Creativity" },
    { title: "Opinion & Current Events" },
    { title: "Personal Stories" }
]


const CategoriesTags = () => {
    return (
        <Section className={"categories"}>
            <p className="categories__title">
                Blog Categories
            </p>
            <Section className={"categories__tags"}>
                {categories.map((category, i) => (
                    <Button btnType={"button"} key={i} className="categories__tags__tag">
                        {category.title}
                    </Button>
                ))}
            </Section>

        </Section>
    )
}

export default CategoriesTags