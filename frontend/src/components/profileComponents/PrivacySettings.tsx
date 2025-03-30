import Switch from 'react-switch'
import Section from '../smallComponents/Section'
import { useState } from 'react';

interface PrivacySettingsProps {
    superclass: string;
}

const PrivacySettings = ({ superclass }: PrivacySettingsProps) => {
    const [publicPrivate, setPublicPrivate] = useState(false);
    const [allowComments, setAllowComments] = useState(false);

    return (
        <Section className={`${superclass}__sub-section`}>
            <Section className={`${superclass}__sub-section__holder`}>
                <p className={`${superclass}__sub-section__holder__title`}>profile visibility (private/public)</p>
                <Switch className={`${superclass}__sub-section__holder__switch`} onChange={() => setPublicPrivate(!publicPrivate)} checked={publicPrivate} />
            </Section>
            <Section className={`${superclass}__sub-section__holder`}>
                <p className={`${superclass}__sub-section__holder__title`}>Allow Comments</p>
                <Switch className={`${superclass}__sub-section__holder__switch`} onChange={() => setAllowComments(!allowComments)} checked={allowComments} />
            </Section>
        </Section>
    )
}

export default PrivacySettings