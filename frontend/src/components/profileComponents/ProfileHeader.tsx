import { useEffect, useState } from 'react'
import { useAuth } from '../../context/authContext'
import Section from '../smallComponents/Section';
import axiosInstance from '../../utils/axiosInstance';
import { IResponse } from '../../types/interfaces';
import UploadModule from './uploadModule';
import EditProfileModule from './EditProfileModule';

const ProfileHeader = () => {
    const { user, login } = useAuth();
    const [showUpload, setShowUpload] = useState(false);
    const [showEditProfile, setShowEditProfile] = useState(false);
    const [imageUrl, setImageUrl] = useState<string | undefined>();



    useEffect(() => {
        setImageUrl(user?.profileImg);
    }, [user?.profileImg]);


    const handleUpload = async (file: File) => {
        if (!file) return;

        const formData = new FormData();
        formData.append("profileImg", file);
        formData.append("userId", user!._id)
        try {
            const response: IResponse = await axiosInstance.post("/img/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setImageUrl(response.data.user.profileImg);
            login(response.data.user)
            setShowUpload(false);
        } catch (error) {
            console.log("Error uploading image: ", error);
        }
    }
    const handleEditProfile = () => {

    }

    return (
        <>
            <Section className="profile__top">
                <img
                    src={imageUrl || "/images/defaultProfileImg.png"}
                    alt="Profile Picture"
                    className="profile__top__img"
                />
                <p className="profile__top__upload" onClick={() => setShowUpload(true)}>
                    Update Profile Image
                </p>
                <Section className="profile__top__info">
                    <p className="profile__top__info__name">{user?.userName}</p>
                    <p className="profile__top__info__email">{user?.email}</p>
                    <p className='profile__top__info__bio'>{user?.bio}</p>
                    <p className="profile__top__info__edit" onClick={() => setShowEditProfile(true)}>Edit Profile</p>
                </Section>
            </Section>
            {showUpload &&
                <UploadModule
                    onClose={() => setShowUpload(false)}
                    onUpload={handleUpload}
                    superClass={'profile'}
                />
            }
            {showEditProfile &&
                <EditProfileModule onClose={() => setShowEditProfile(false)} onEditProfile={handleEditProfile} />
            }
        </>
    );
}

export default ProfileHeader