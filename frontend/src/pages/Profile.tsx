import ProfileFooter from '../components/profileComponents/ProfileFooter';
import ProfileHeader from '../components/profileComponents/ProfileHeader'
import ProfilePosts from '../components/profileComponents/ProfilePosts';
import ProfileStats from '../components/profileComponents/ProfileStats';
import Section from '../components/smallComponents/Section';
import "../styles/componentStyle/profile.scss";
const Profile = () => {
    return (
        <Section className={'profile'}>
            <ProfileHeader />
            <ProfileFooter />
            <ProfileStats />
            <ProfilePosts />

        </Section>
    )
}

export default Profile