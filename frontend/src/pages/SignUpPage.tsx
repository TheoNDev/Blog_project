import { useState } from 'react';
import LogInOrSignup from '../components/LoginSignupForm'
import axiosInstance from '../utils/axiosInstance';
import { IResponse } from '../types/interfaces';
import { useNavigate } from 'react-router-dom';


const SignUpPage = () => {
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const handleSumbit = async (formData: { userName?: string, passWord: string; email: string }) => {
        console.log("Submitting form data:", formData);

        try {
            const response: IResponse = await axiosInstance.post('/auth/signup', formData);


            console.log('Registration successful: ', response.data);

            navigate("/login")
        } catch (error: any) {
            setError(error.response?.data?.message || 'Something went wrong');
        }
    }

    return (
        <>
            {error && <div className="error">{error}</div>}
            <LogInOrSignup
                sectionClassName={'section'}
                formClassName={'form'}
                formType={'signup'}
                onSubmit={handleSumbit} />
        </>

    )
}

export default SignUpPage