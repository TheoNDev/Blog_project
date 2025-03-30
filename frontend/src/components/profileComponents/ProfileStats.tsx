
import { useEffect, useState } from 'react'
import { useAuth } from '../../context/authContext'
import Section from '../smallComponents/Section'

const ProfileStats = () => {
    const [commentAmount, setCommentAmount] = useState(0);
    const [likeAmount, setLikeAmount] = useState(0);
    const [postAmount, setPostAmount] = useState(0);
    const { user } = useAuth()

    useEffect(() => {
        const commentedAmount = user!.commentedPosts.length;
        setCommentAmount(commentedAmount);

        const likedAmount = user!.likedPosts.length;
        setLikeAmount(likedAmount);

        const postsAmount = user!.createdPosts.length;
        setPostAmount(postsAmount);
    }, [])


    return (
        <Section className={'profile__stats'}>
            <p className='profile__stats__title'>Profile Stats</p>
            <Section className={'profile__stats__holder'}>
                <Section className={'profile__stats__holder__section'}>
                    <p className='profile__stats__holder__section__text'>Liked Posts</p>
                    <p className='profile__stats__holder__section__text'>{likeAmount}</p>
                </Section>
                <Section className={'profile__stats__holder__section'}>
                    <p className='profile__stats__holder__section__text'>Commented Posts</p>
                    <p className='profile__stats__holder__section__text'>{commentAmount}</p>
                </Section>
                <Section className={'profile__stats__holder__section'}>
                    <p className='profile__stats__holder__section__text'>Posts Created</p>
                    <p className='profile__stats__holder__section__text'>{postAmount}</p>
                </Section>
            </Section>
        </Section>
    )
}

export default ProfileStats