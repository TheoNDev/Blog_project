import React from 'react'
import Section from '../smallComponents/Section'
import Button from '../smallComponents/Button'

const FooterCreateBlog = () => {
    return (
        <Section className={'create-blog__bottom-section'}>
            <Section className={"create-blog__bottom-section__schedule"}>
                <input type="date" className='create-blog__bottom-section__schedule__date' />
                <input type="time" name="" id="" className='create-blog__bottom-section__schedule__time' />
                <Button btnType={"button"} className="create-blog__bottom-section__schedule__btn">
                    Schedule Publishing
                </Button>
            </Section>
            <Section className={'create-blog__bottom-section__bottom'}>
                <Button btnType={"button"} className="create-blog__bottom-section__bottom__btn" >
                    Save as Draft
                </Button>
                <Button btnType={"button"} className="create-blog__bottom-section__bottom__btn">
                    Publish Now
                </Button>

            </Section>


        </Section>
    )
}

export default FooterCreateBlog