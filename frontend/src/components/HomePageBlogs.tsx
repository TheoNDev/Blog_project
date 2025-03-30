
import Section from './smallComponents/Section'
import Button from './smallComponents/Button';
import "../styles/componentStyle/homePageBlogs.scss"

interface IHomePageBlogs {
    contentType: string;
}

const HomePageBlogs = ({ contentType }: IHomePageBlogs) => {


    return (
        <Section className={'homepage-blogs'}>
            <Section className={'homepage-blogs__top'}>
                <p className='homepage-blogs__top__title'>{contentType} blogs</p>
                <Section className={'homepage-blogs__top__blogs'}>
                    <p>No Blogs Available!</p>
                </Section>
            </Section>
            <Section className={'homepage-blogs__bottom'}>
                <Button btnType={'button'} className={'homepage-blogs__bottom__btn'}>
                    Write your own blog
                </Button>
            </Section>
        </Section>
    )
}

export default HomePageBlogs