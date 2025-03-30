import { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import Section from '../smallComponents/Section';

interface ChangePasswordProps {
    superclass: string;
}


const ChangePassword = ({ superclass }: ChangePasswordProps) => {
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [oldPasswordInput, setOldPasswordInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [confirmPasswordInput, setConfirmPasswordInput] = useState("");

    const handleShowPassword = (type: string) => {
        if (type === "o") {
            setShowOldPassword(!showOldPassword)
        }
        if (type === "p") {
            setShowPassword(!showPassword);
        }
        if (type === "c") {
            setShowConfirmPassword(!showConfirmPassword);
        }
    }

    return (
        <form action="" method="post" className={`${superclass}__change-password`}>
            {showOldPassword ? (
                <Section className={`${superclass}__change-password__section`}>
                    <input
                        type="text"
                        value={oldPasswordInput}
                        onChange={e => setOldPasswordInput(e.target.value)}
                        required
                        placeholder="current password"
                        className={`${superclass}__change-password__section__input`}
                    />
                    <AiOutlineEyeInvisible className={`${superclass}__change-password__section__btn`} onClick={() => handleShowPassword("o")} />
                </Section>
            ) : (
                <Section className={`${superclass}__change-password__section`}>
                    <input
                        type="password"
                        value={oldPasswordInput}
                        onChange={e => setOldPasswordInput(e.target.value)}
                        required
                        placeholder="current password"
                        className={`${superclass}__change-password__section__input`}
                    />
                    <AiOutlineEye className={`${superclass}__change-password__section__btn`} onClick={() => handleShowPassword("o")} />
                </Section>
            )}

            {showPassword ? (
                <Section className={`${superclass}__change-password__section`}>
                    <input
                        type="text"
                        value={passwordInput}
                        onChange={e => setPasswordInput(e.target.value)}
                        required
                        placeholder="new password"
                        className={`${superclass}__change-password__section__input`}
                    />
                    <AiOutlineEyeInvisible className={`${superclass}__change-password__section__btn`} onClick={() => handleShowPassword("p")} />
                </Section>
            ) : (
                <Section className={`${superclass}__change-password__section`}>
                    <input
                        type="password"
                        value={passwordInput}
                        onChange={e => setPasswordInput(e.target.value)}
                        required
                        placeholder="new password"
                        className={`${superclass}__change-password__section__input`}
                    />
                    <AiOutlineEye className={`${superclass}__change-password__section__btn`} onClick={() => handleShowPassword("p")} />
                </Section>
            )}

            {showConfirmPassword ? (
                <Section className={`${superclass}__change-password__section`}>
                    <input
                        type="text"
                        value={confirmPasswordInput}
                        onChange={e => setConfirmPasswordInput(e.target.value)}
                        required
                        placeholder="confirm password"
                        className={`${superclass}__change-password__section__input`}
                    />
                    <AiOutlineEyeInvisible className={`${superclass}__change-password__section__btn`} onClick={() => handleShowPassword("c")} />
                </Section>
            ) : (
                <Section className={`${superclass}__change-password__section`}>
                    <input
                        type="password"
                        value={confirmPasswordInput}
                        onChange={e => setConfirmPasswordInput(e.target.value)}
                        required
                        placeholder="confirm password"
                        className={`${superclass}__change-password__section__input`}
                    />
                    <AiOutlineEye className={`${superclass}__change-password__section__btn`} onClick={() => handleShowPassword("c")} />
                </Section>
            )}

        </form>
    )
}

export default ChangePassword