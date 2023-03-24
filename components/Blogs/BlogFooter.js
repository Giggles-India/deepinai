export default function BlogFooter() {
    return(
        <div>
            <footer className="flex justify-center px-4 text-gray-100 bg-gray-800">
                    <div className="container py-6">
                        <h1 className="text-center text-lg text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Subscribe to our newsletter
                        </h1>

                        <div className="flex justify-center mt-6">
                        <div className="mt-6 flex max-w-md gap-x-4 ">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className="flex-none rounded-md bg-indigo-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                Subscribe
                            </button>
                        </div>

                        </div>

                        <hr className="h-px mt-6 bg-gray-700 border-none"/>

                        <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
                            <div>
                                <a href="#" className="text-xl font-bold">DeepIntoAI</a>
                            </div>
                            <div className="flex mt-4 md:m-0">
                                <div className="-mx-4">
                                <a href="#" className="px-4 text-sm">About</a>
                                <a href="#" className="px-4 text-sm">Blog</a>
                                <a href="#" className="px-4 text-sm">News</a>
                                <a href="#" className="px-4 text-sm">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
            </footer>
        </div>
    )
}