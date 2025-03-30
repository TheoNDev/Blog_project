import Button from "../smallComponents/Button"
import Section from "../smallComponents/Section"
import { useAuth } from "../../context/authContext"
import axiosInstance from "../../utils/axiosInstance"
import { useNavigate } from "react-router-dom"


const ProfileFooter = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        axiosInstance.get("/auth/logout")
            .then(response => {
                console.log("Logged out successfully", response);
                logout
                navigate("/login");
            })
            .catch(error => {
                console.error("Logout failed:", error);
            });
    }
    return (
        <Section className={"profile__bottom"}>

            <Button onClick={handleLogout} btnType={"button"} className="profile__bottom__btn">
                Log Out
            </Button>

        </Section>
    )
}

export default ProfileFooter