import Header from "@/components/HomePage/Header"
import BlogFooter from "@/components/Blogs/BlogFooter"


export default function SampleBlogs() {
    return(
        <div style={{
            backgroundImage: `url('https://tailwindui.com/img/beams-home@95.jpg')`,
            backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',  width: '100vw'
        }} className="h-fit">
            <Header/>
            <div>

            <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 ">
            <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                    <header className="mb-4 lg:mb-6 not-format">
                        <address className="flex items-center mb-6 not-italic">
                            
                        </address>
                        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">Introducion to Clustering Techniques</h1>
                        <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                <img className="mr-4 w-16 h-16 rounded-full" src="https://media.licdn.com/dms/image/D4D03AQFYRHyTvugMvA/profile-displayphoto-shrink_800_800/0/1666628980018?e=2147483647&v=beta&t=Zi6dzSHjlmKLsH5JxehLv2DKy4t1rZw4kAl5JjFOLLY" alt="Jese Leos" />
                                <div>
                                    <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">Zoya Jamadar</a>
                                    <p className="text-base font-light text-gray-500 dark:text-gray-400">Student, Artificial Intelligence and Data Science</p>
                                    <p className="text-base font-light text-gray-500 dark:text-gray-400"><time pubdate datetime="2022-02-08" title="February 8th, 2022">Mar. 21, 2023</time></p>
                                </div>
                            </div>
                    </header>
                    <figure><img src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png" alt=""/>
                        <figcaption>Digital art by Anonymous</figcaption>
                    </figure>
                    

                </article>
            </div>
            </main>

            <aside aria-label="Related articles" className="py-8 lg:py-24 bg-gray-150 dark:bg-gray-100">
            <div className="px-4 mx-auto max-w-screen-xl">
                <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">Related articles</h2>
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                    <article className="max-w-xs">
                        <a href="#">
                            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png" className="mb-5 rounded-lg" alt="Image 1"/>
                        </a>
                        <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                            <a href="#">Our first office</a>
                        </h2>
                        <p className="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                        <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                            Read in 2 minutes
                        </a>
                    </article>
                    <article className="max-w-xs">
                        <a href="#">
                            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png" className="mb-5 rounded-lg" alt="Image 2"/>
                        </a>
                        <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                            <a href="#">Enterprise design tips</a>
                        </h2>
                        <p className="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                        <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                            Read in 12 minutes
                        </a>
                    </article>
                    <article className="max-w-xs">
                        <a href="#">
                            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png" className="mb-5 rounded-lg" alt="Image 3"/>
                        </a>
                        <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                            <a href="#">We partnered with Google</a>
                        </h2>
                        <p className="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                        <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                            Read in 8 minutes
                        </a>
                    </article>
                    <article className="max-w-xs">
                        <a href="#">
                            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png" className="mb-5 rounded-lg" alt="Image 4"/>
                        </a>
                        <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                            <a href="#">Our first project with React</a>
                        </h2>
                        <p className="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                        <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                            Read in 4 minutes
                        </a>
                    </article>
                </div>
            </div>
            </aside>
            </div>   
            <BlogFooter/>
        </div>
    )
}