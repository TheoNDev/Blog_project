import { useState } from 'react';
import LogInOrSignup from '../components/LoginSignupForm'
import axiosInstance from '../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { IResponse } from '../types/interfaces';



const LogInPage = () => {
    const [errorP, setErrorP] = useState(true);
    const [errorE, setErrorE] = useState(true);

    const { login } = useAuth();

    const navigate = useNavigate();

    const handleSubmit = async (formData: { email: string, passWord: string }) => {
        console.log("Submitting form data: ", formData)

        try {
            const response: IResponse = await axiosInstance.post('/auth/login', formData, { withCredentials: true });

            console.log('Login successful: ', response);
            login(response.data.user);
            navigate("/");

        } catch (error: any) {
            if (error.response.status === 401) {
                setErrorP(false)
            } else if (error.response.status === 404) {
                setErrorE(false)
            }

        }
    }
    return (

        <>

            <LogInOrSignup
                sectionClassName={'section'}
                formClassName={'form'}
                formType={'login'}
                onSubmit={handleSubmit}
                errorP={errorP}
                errorE={errorE}
            />
        </>
    )
}

export default LogInPage