import { useState } from 'react';
import Section from '../smallComponents/Section'
import { useAuth } from '../../context/authContext';

import { IUser } from '../../types/interfaces';


interface PersonalInfoProps {
    onEditPersonalInfo: (user: IUser) => void;
    superclass: string;
}

const PersonalInfo = ({ onEditPersonalInfo, superclass }: PersonalInfoProps) => {



    const { user } = useAuth();



    return (
        <Section className={`${superclass}__sub-section`}>
            <form action="" method="post" className={`${superclass}__sub-section__form`}>
                <input type="text" className={`${superclass}__sub-section__form__input`} placeholder='New Username' />
                <input type="text" className={`${superclass}__sub-section__form__input`} placeholder='New Email' />
                <textarea name="" id="" placeholder='New Bio' className={`${superclass}__sub-section__form__textarea`} />
            </form>
        </Section>
    )
}

export default PersonalInfo