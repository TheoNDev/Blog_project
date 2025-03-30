
import { IUser } from "../../types/interfaces";
import Section from "../smallComponents/Section"
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { VscChevronDown, VscChevronUp, VscClose } from "react-icons/vsc";
import PersonalInfo from "./PersonalInfo";
import ChangePassword from "./ChangePassword";
import PrivacySettings from "./PrivacySettings";
import Button from "../smallComponents/Button";

interface EditProfileModuleProps {
    onClose: () => void;
    onEditProfile: (user: IUser) => void;
}

const EditProfileModule = ({ onClose, onEditProfile }: EditProfileModuleProps) => {
    const [showEditUserInfo, setShowEditUserInfo] = useState(false);
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [showPrivacySettings, setShowPrivacySettings] = useState(false);
    const { user } = useAuth();

    const handleShowDrop = (type: string) => {
        if (type === "user") {
            setShowEditUserInfo(!showEditUserInfo)
        }
        if (type === "pass") {
            setShowChangePassword(!showChangePassword)
        }
        if (type === "priv") {
            setShowPrivacySettings(!showPrivacySettings)
        }
    }

    return (
        <Section className={"profile__edit-profile"}>
            <Section className={"profile__edit-profile__header"}>
                <img src={user?.profileImg} alt="" className="profile__edit-profile__header__img" />
                <p className="profile__edit-profile__header__title">Edit Profile</p>
                <VscClose className="profile__edit-profile__header__close" onClick={onClose} />
            </Section>
            <Section className={"profile__edit-profile__section"}>
                <Section className={"profile__edit-profile__section__sub"}>
                    <p className={"profile__edit-profile__section__sub__title"}>Edit Personal Info</p>
                    {showEditUserInfo ? (
                        <VscChevronUp
                            onClick={() => handleShowDrop("user")}
                            className="profile__edit-profile__section__sub__btn"
                        />
                    ) : (
                        <VscChevronDown
                            onClick={() => handleShowDrop("user")}
                            className="profile__edit-profile__section__sub__btn"
                        />
                    )}
                </Section>
                {showEditUserInfo && <PersonalInfo onEditPersonalInfo={onEditProfile} superclass={"profile__edit-profile__section"} />}
            </Section>
            <Section className={"profile__edit-profile__section"}>
                <Section className={"profile__edit-profile__section__sub"}>
                    <p className={"profile__edit-profile__section__sub__title"}>Change Password</p>
                    {showChangePassword ? (
                        <VscChevronUp
                            onClick={() => handleShowDrop("pass")}
                            className="profile__edit-profile__section__sub__btn"
                        />
                    ) : (
                        <VscChevronDown
                            onClick={() => handleShowDrop("pass")}
                            className="profile__edit-profile__section__sub__btn"
                        />
                    )}
                </Section>
                {showChangePassword && <ChangePassword superclass={"profile__edit-profile__section"} />}
            </Section>
            <Section className={"profile__edit-profile__section"}>
                <Section className={"profile__edit-profile__section__sub"}>
                    <p className={"profile__edit-profile__section__sub__title"}>Privacy Settings</p>
                    {showPrivacySettings ? (
                        <VscChevronUp
                            onClick={() => handleShowDrop("priv")}
                            className="profile__edit-profile__section__sub__btn"
                        />
                    ) : (
                        <VscChevronDown
                            onClick={() => handleShowDrop("priv")}
                            className="profile__edit-profile__section__sub__btn"
                        />
                    )}
                </Section>
                {showPrivacySettings && <PrivacySettings superclass={"profile__edit-profile__section"} />}
            </Section>
            <Section className={"profile__edit-profile__handle"}>
                <Button btnType={"button"} className={"profile__edit-profile__handle__btn"}>Save Changes</Button>
                <Button btnType={"button"} className={"profile__edit-profile__handle__btn"}>Cancel</Button>
            </Section>
            <Button btnType={"button"} className={"profile__edit-profile__btn"}>Delete Account</Button>
        </Section>
    )
}

export default EditProfileModule