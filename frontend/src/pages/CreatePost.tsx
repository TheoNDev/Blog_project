import BlogForm from "../components/createBlogComponents/BlogForm"
import FooterCreateBlog from "../components/createBlogComponents/FooterCreateBlog"
import HeaderCreateBlog from "../components/createBlogComponents/HeaderCreateBlog"
import Section from "../components/smallComponents/Section"
import "../styles/componentStyle/createBlogPost.scss"

const CreatePost = () => {

    return (
        <Section className={"create-blog"}>
            <HeaderCreateBlog />
            <BlogForm />
            <FooterCreateBlog />
        </Section >
    )
}

export default CreatePost