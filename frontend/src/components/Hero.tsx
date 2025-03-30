import Section from './smallComponents/Section'
import Button from './smallComponents/Button'
import "../styles/componentStyle/hero.scss"

const Hero = () => {
    return (
        <Section className={'hero'}>
            <p className='hero__title'>
                Share Your Stories with the World!
            </p>
            <p className='hero__underTitle'>
                Write, share, and connect with a community of passionate writers.
            </p>
            <Button btnType={'button'} className='hero__btn'>
                Start writing
            </Button>
        </Section>
    )
}

export default Hero