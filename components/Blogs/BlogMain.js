
const posts = [
    {
      id: 1,
      title: 'Introduction to Clustering',
      href: '#',
      description:
        'Clustering is a process of grouping similar objects together and dissimilar objects apart. It is a type of unsupervised learning, which means that there is no target variable to predict. ',
      date: 'Mar 21, 2023',
      datetime: '2020-03-16',
      category: { title: 'Intermediate', href: '#' },
      author: {
        name: 'Zoya Jamadar',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://media.licdn.com/dms/image/D4D03AQFYRHyTvugMvA/profile-displayphoto-shrink_800_800/0/1666628980018?e=2147483647&v=beta&t=Zi6dzSHjlmKLsH5JxehLv2DKy4t1rZw4kAl5JjFOLLY',
      },
    },
    {
        id: 2,
        title: 'Leverage AI with AIMetrix',
        href: '#',
        description:
          'AIMetrix is a powerful tool that uses machine learning to help Data Science community wih model infrences, model deployment, model monitoring and model explainability.It\'s simple to use and easy to integrate with your existing workflow.A',
        date: 'Mar 21, 2023',
        datetime: '2020-03-16',
        category: { title: 'Intermediate', href: '#' },
        author: {
          name: 'Zoya Jamadar',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://media.licdn.com/dms/image/D4D03AQFYRHyTvugMvA/profile-displayphoto-shrink_800_800/0/1666628980018?e=2147483647&v=beta&t=Zi6dzSHjlmKLsH5JxehLv2DKy4t1rZw4kAl5JjFOLLY',
        },
      },
      {
      id: 1,
      title: 'Introduction to Machine Learning',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 21, 2023',
      datetime: '2020-03-16',
      category: { title: 'Intermediate', href: '#' },
      author: {
        name: 'Zoya Jamadar',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://media.licdn.com/dms/image/D4D03AQFYRHyTvugMvA/profile-displayphoto-shrink_800_800/0/1666628980018?e=2147483647&v=beta&t=Zi6dzSHjlmKLsH5JxehLv2DKy4t1rZw4kAl5JjFOLLY',
      },
    },
    // More posts...
  ]
  
  export default function Blog() {
    return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">🚨 Site under maintenance</h2>
          <h3>We will be back in a week </h3> <br/><br/>
          
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Top picks of the week</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn what's trending in the AI community.
            </p>
          </div>

          <section className="bg-white dark:bg-gray-900 py-10">
            <div className="flex justify-right">
                <div className="px-2">
                <div
                    className="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img
                    className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg px-2"
                    src="https://developers.google.com/static/machine-learning/clustering/images/Clustered.png"
                    alt="" />
                    <div className="flex flex-col justify-start p-6">
                                <article >
                        
                        <div className="flex justify-between items-center mb-5 text-gray-500">
                            <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                                Article
                            </span>
                            <span className="text-sm">14 days ago</span>
                        </div>
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">Introduction to Clustering </a></h2>
                        <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Clustering is a process of grouping similar objects together and dissimilar objects apart. It is a type of unsupervised learning, which means that there is no target variable to predict. </p>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                                <img className="w-7 h-7 rounded-full" src="https://media.licdn.com/dms/image/D4D03AQFYRHyTvugMvA/profile-displayphoto-shrink_800_800/0/1666628980018?e=2147483647&v=beta&t=Zi6dzSHjlmKLsH5JxehLv2DKy4t1rZw4kAl5JjFOLLY" alt="Bonnie Green avatar" />
                                <span className="font-medium dark:text-white">
                                    Zoya Jamadar
                                </span>
                            </div>
                            <a href="#" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                                Read more
                                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </a>
                        </div>
                    </article>  
                    </div>
                </div>
                </div>
                <div className="px-2">
                <div
                    className="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img
                    className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg px-2"
                    src="https://developers.google.com/static/machine-learning/clustering/images/Clustered.png"
                    alt="" />
                    <div className="flex flex-col justify-start p-6">
                                <article >
                        
                        <div className="flex justify-between items-center mb-5 text-gray-500">
                            <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                                Article
                            </span>
                            <span className="text-sm">14 days ago</span>
                        </div>
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">Introduction to Clustering </a></h2>
                        <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Clustering is a process of grouping similar objects together and dissimilar objects apart. It is a type of unsupervised learning, which means that there is no target variable to predict. </p>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                                <img className="w-7 h-7 rounded-full" src="https://media.licdn.com/dms/image/D4D03AQFYRHyTvugMvA/profile-displayphoto-shrink_800_800/0/1666628980018?e=2147483647&v=beta&t=Zi6dzSHjlmKLsH5JxehLv2DKy4t1rZw4kAl5JjFOLLY" alt="Bonnie Green avatar" />
                                <span className="font-medium dark:text-white">
                                    Zoya Jamadar
                                </span>
                            </div>
                            <a href="#" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                                Read more
                                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </a>
                        </div>
                    </article>  
                    </div>
                </div>
                </div>

            </div>
          </section>
          <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
          <div>
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Blog</h2>
                <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
        </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-yellow-200 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className=" mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">{post.description}</p>
                </div>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        Continue reading <span aria-hidden="true">→</span>
                    </a>
                </div>
              </article>
            ))}
          </div>
        </div>
        <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
       
      </div>
    )
  }
  