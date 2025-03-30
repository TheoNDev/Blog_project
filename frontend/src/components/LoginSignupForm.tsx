import Section from "./smallComponents/Section";
import Button from "./smallComponents/Button";
import { useNavigate } from "react-router-dom";
import "../styles/componentStyle/loginSignupForm.scss";

interface logInOrSignupProps {
    sectionClassName: string;
    formClassName: string;
    formType: "login" | "signup";
    onSubmit: (formData: { userName?: string, passWord: string, email: string }) => void;
    errorP?: boolean;
    errorE?: boolean;
}

const LogInOrSignup = ({ sectionClassName, formClassName, formType, onSubmit, errorP, errorE }: logInOrSignupProps) => {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const userName = formType === "signup" ? (formData.get("username") as string) : undefined;

        const passWord = formData.get("password") as string;
        console.log(userName);

        onSubmit({ userName, passWord, email })

    }

    const handleFormSwitch = (path: string) => {
        navigate(path);
    }


    return (
        <Section className={sectionClassName}>
            <p className={`${sectionClassName}__title`}>{formType === "login" ? "Login" : "Sign Up"}</p>

            <form onSubmit={handleSubmit} className={`${sectionClassName}__${formClassName}`}>


                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                    className={`${sectionClassName}__${formClassName}__input`}
                />
                {!errorE && formType === "login" && <p className="error">User not found</p>}
                {formType === "signup" && (
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username"
                        required
                        className={`${sectionClassName}__${formClassName}__input`}
                    />
                )}
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                    className={`${sectionClassName}__${formClassName}__input`}
                />
                {!errorP && formType === "login" && <p className="error">Password invalid</p>}

                <Button
                    btnType={"submit"}
                    className={`${sectionClassName}__${formClassName}__submitBtn`}
                >
                    {formType === "login" ? "Login" : "Sign Up"}
                </Button>

                <div className={`${sectionClassName}__${formClassName}__switchForm`}>

                    {formType === "login" ? (
                        <span> Don't have an account?</span>
                    ) : (
                        <span> Already have an account? </span>
                    )}
                    <Button
                        className={`${sectionClassName}__${formClassName}__switchForm__switch`}
                        btnType="button"
                        onClick={() => handleFormSwitch(formType === "login" ? "/signup" : "/login")}
                    >
                        {formType === "login" ? (
                            <p> Sign up </p>
                        ) : (
                            <p>Log in</p>
                        )}
                    </Button>
                    here.

                </div>
            </form>
        </Section >
    )
}

export default LogInOrSignup;