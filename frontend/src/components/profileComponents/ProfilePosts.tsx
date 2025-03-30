
import Section from '../smallComponents/Section'
import { useAuth } from '../../context/authContext'

const ProfilePosts = () => {
    const { user } = useAuth();

    return (
        <Section className={"profile__posts"}>
            <p className='profile__posts__title'>Profile Posts</p>
            {
                user!.createdPosts!.length > 0 ? (
                    user!.createdPosts!.map((post, i) => (
                        <Section
                            key={i}
                            className={"profile__posts__post"}>
                            <p className='profile__posts__post__tilte'>{post.title}</p>
                            <Section className={'profile__posts__post__author-date'}>
                                <p className='profile__posts__post__author-date__author'>{post.author.userName}</p>
                                <p className='profile__posts__post__author-date__date'>{post.createdAt.getTime()}</p>
                            </Section>
                            <p className='profile__posts__post__content'>{post.content}</p>
                        </Section>

                    ))
                ) : (
                    <p className='profile__posts__no-posts'>No Posts Made</p>
                )
            }
        </Section>
    )
}

export default ProfilePosts