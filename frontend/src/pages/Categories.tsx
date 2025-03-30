
interface Icategories {
    category?: string;
}

const Categories = ({ category = "Categories" }: Icategories) => {
    return (
        <div>{category}</div>
    )
}

export default Categories