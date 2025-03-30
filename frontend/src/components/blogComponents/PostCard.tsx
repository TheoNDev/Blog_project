import { IPost } from "../../types/interfaces"
import Section from "../smallComponents/Section"

interface PostCardProps {
    post: IPost;
}


const PostCard = ({ post }: PostCardProps) => {



    return (
        <>
            <p>{post.title}</p>
            <Section className={""}>
                <p>{post.author.userName}</p>
                <p>{post.createdAt.getTime()}</p>
            </Section>
            <p>{post.content}</p>
            <Section className={""}>
                <p>Comments</p>
                <p>{post.likes.length}</p>
            </Section>
            <Section className={""}>
                {post.comments.map((comment) => (
                    <Section className={""}>
                        <img src={comment.user.profileImg} alt="" />
                        <p>{comment.user.userName}</p>
                        <p>{comment.comment}</p>
                        <Section className={""}>
                            <p>{comment.likes.length}</p>
                            <p>{comment.createdAt.getTime()}</p>
                        </Section>
                    </Section>
                ))}
            </Section>

        </>
    )
}

export default PostCard