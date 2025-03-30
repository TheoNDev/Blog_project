import Hero from '../components/Hero'
import HomePageBlogs from '../components/HomePageBlogs'
import CategoriesTags from '../components/CategoriesTags'

const Home = () => {
    return (
        <>
            <Hero />
            <HomePageBlogs contentType={'Featured'} />
            <CategoriesTags />
            <HomePageBlogs contentType={'Recent'} />
        </>
    )
}

export default Home