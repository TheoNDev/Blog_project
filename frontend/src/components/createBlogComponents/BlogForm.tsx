import { useState } from "react"
import Button from "../smallComponents/Button"
import Section from "../smallComponents/Section"
import TextEditor from "./TextEditor"
import { MdClose } from "react-icons/md"
import { log } from "console"


const BlogForm = () => {
    const [tags, setTags] = useState<string[]>([]);
    const [tag, setTag] = useState("");
    const [categories, setCategories] = useState<string[]>([]);
    const [category, setCategory] = useState("");

    const addTag = () => {
        tags.push(tag);
        setTags(tags);
        setTag("");
    }
    const removeTag = (tag: string) => {
        const updatedTags = tags.filter((t) => t !== tag);
        setTags(updatedTags);
    }
    const addCategory = () => {
        categories.push(category);
        setCategories(categories);
        setCategory("");
    }
    const removeCategory = (category: string) => {
        const updatedCategories = categories.filter((c) => c !== category);
        setCategories(updatedCategories);
    }

    return (
        <Section className={"create-blog__middle-section"}>
            <form action="" className="create-blog__middle-section__form">
                <Section className={"create-blog__middle-section__form__top"}>
                    <input type="text" className="create-blog__middle-section__form__top__title" placeholder="Blog Title" />
                    <input type="text" className="create-blog__middle-section__form__top__slug" placeholder="Url - Name" />

                    <Section className={"create-blog__middle-section__form__top__categories-tags"}>
                        <input type="text" className="create-blog__middle-section__form__top__categories-tags__input" placeholder="Add Category" value={category} onChange={e => setCategory(e.target.value)} />
                        <Button btnType={"button"} className="create-blog__middle-section__form__top__categories-tags__btn" onClick={() => addCategory()}>Add Category</Button>
                    </Section>

                    <Section className={"create-blog__middle-section__form__top__categories-tags"}>
                        <input type="text" className="create-blog__middle-section__form__top__categories-tags__input" placeholder="Create Tag" value={tag} onChange={e => setTag(e.target.value)} />
                        <Button btnType={"button"} className="create-blog__middle-section__form__top__categories-tags__btn" onClick={() => addTag()}>Add Tag</Button>
                    </Section>
                </Section>
                <Section className={"create-blog__middle-section__form__middle"}>
                    <Section className={"create-blog__middle-section__form__middle__selected-categories-tags"}>
                        <p className="create-blog__middle-section__form__middle__selected-categories-tags__title">Categories -</p>
                        <Section className={"create-blog__middle-section__form__middle__selected-categories-tags__categories-tags"}>
                            {categories.length > 0 && (
                                categories.map((category, i) => (
                                    <p key={i} className="create-blog__middle-section__form__middle__selected-categories-tags__categories-tags__category-tag">
                                        {category}
                                        <MdClose onClick={() => removeCategory(category)} className="create-blog__middle-section__form__middle__selected-categories-tags__categories-tags__category-tag__remove" />
                                    </p>
                                ))
                            )}
                        </Section>
                    </Section>
                    <Section className={"create-blog__middle-section__form__middle__selected-categories-tags"}>
                        <p className="create-blog__middle-section__form__middle__selected-categories-tags__title">Tags -</p>
                        <Section className={"create-blog__middle-section__form__middle__selected-categories-tags__categories-tags"} >
                            {tags.length > 0 && (
                                tags.map((tag, i) => (
                                    <p key={i} className="create-blog__middle-section__form__middle__selected-categories-tags__categories-tags__category-tag">
                                        {tag}
                                        <MdClose onClick={() => removeTag(tag)} className="create-blog__middle-section__form__middle__selected-categories-tags__categories-tags__category-tag__remove" />
                                    </p>
                                ))
                            )}
                        </Section>
                    </Section>
                </Section>
                <TextEditor value={""} className="create-blog__middle-section__form__text-editor" onChange={function (content: string): void {
                    throw new Error("Function not implemented.")
                }} />
            </form>
        </Section>
    )
}

export default BlogForm