import Blog from '../../components/Blogs/BlogMain'
import Header from '../../components/HomePage/Header'
import BlogFooter from '../../components/Blogs/BlogFooter'

export default function Blogs() {
    return (
        <div stylestyle={{
            backgroundImage: `url('https://tailwindui.com/img/beams-home@95.jpg')`,
            backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh', width: '100vw'
        }}>
            <Header/>
            <Blog/>
            <BlogFooter/>
        </div>
    )
}