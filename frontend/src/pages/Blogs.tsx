import { useEffect, useState } from "react"
import axiosInstance from "../utils/axiosInstance"
import { IPost } from "../types/interfaces"
import Section from "../components/smallComponents/Section";
import PostCard from "../components/blogComponents/PostCard";

const Blogs = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        const getPosts = async () => {

            const response = await axiosInstance.get("/posts/")
            setPosts(response.data);

        }

        getPosts();

    }, [])
    return (
        <Section className={""}>

            {posts.length > 0 ? (
                posts.map((post) => (
                    <Section key={post._id} className={""}>
                        <PostCard post={post} />
                    </Section>
                ))
            ) : (
                <p>No blog Posts made!</p>
            )}

        </Section>
    )
}

export default Blogs