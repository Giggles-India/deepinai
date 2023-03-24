import Header from '../components/HomePage/Header'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import shahid from '../../assets/shahid.png'


export default function Package() {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);
  return (
    <div style={{backgroundImage:`url('https://tailwindui.com/img/beams-home@95.jpg')`,
      backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh', width: '100vw'}} >
    <Header/>    
    <center>
    <header className="mb-4 lg:mb-6 not-format" data-aos="fade-up">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl py-10" >Introducing Analytics for AI</h2>
              

            <div className="flex justify-center py-10">
                <div className="bg-gray-900 rounded-lg overflow-hidden w-full max-w-md">
                    <div className="flex justify-start bg-gray-800 px-2 py-2">
                    <button className="bg-red-500 hover:bg-red-600 rounded-full w-3 h-3 focus:outline-none"></button>
                    <button className="bg-yellow-500 hover:bg-yellow-600 rounded-full w-3 h-3 focus:outline-none ml-2"></button>
                    <button className="bg-green-500 hover:bg-green-600 rounded-full w-3 h-3 focus:outline-none ml-2"></button>
                    </div>
                    <pre className="text-gray-200 font-mono text-sm overflow-x-auto text-left p-6"><code className="text-gray-400"># Install dependencies</code><br/>
                    <code className="text-yellow-400">$ pip3 install AImetrix</code>
                    </pre>
                </div>
            </div>

              <h3 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl py-2">Meet the Team</h3>
              <center>
                <address className="text-xl font-light text-gray-500 dark:text-gray-400 not-italic py-10">
                    <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white px-5 py-5">
                        <img className="mr-4 w-16 h-16 rounded-full" src="https://media.licdn.com/dms/image/C4E03AQGKay05KQw7qw/profile-displayphoto-shrink_800_800/0/1641565228412?e=2147483647&v=beta&t=l92o2Cf3w-6DKv2WPNLLOoEU4nDlpiFnDMIcn0cnGpI" alt="Shahid Shaikh"/>
                        <div>
                            <a href="https://www.linkedin.com/in/shahid-shaikh-5231816/" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">Shahid Shaikh</a>
                            <p className="text-base font-light text-gray-500 dark:text-gray-400">Stratergic Lead, DeepInAI</p>
                            <p className="text-base font-light text-gray-500 dark:text-gray-400"><time pubdate="true" dateTime="2022-02-08" title="February 8th, 2022">Mar. 19, 2023</time></p>
                        </div>
                    </div>
                    <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white px-5 py-5">
                        <img className="mr-4 w-16 h-16 rounded-full" src="https://media.licdn.com/dms/image/D4D03AQFYRHyTvugMvA/profile-displayphoto-shrink_800_800/0/1666628980018?e=2147483647&v=beta&t=Zi6dzSHjlmKLsH5JxehLv2DKy4t1rZw4kAl5JjFOLLY" alt="Jese Leos"/>
                        <div>
                            <a href="https://www.linkedin.com/in/zoya-jamadar-56888b202/" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">Zoya Jamadar</a>
                            <p className="text-base font-light text-gray-500 dark:text-gray-400">Student Intern, DeepInAI</p>
                            <p className="text-base font-light text-gray-500 dark:text-gray-400"><time pubdate="rue" dateTime="2022-02-08" title="February 8th, 2022">Mar. 19, 2023</time></p>
                        </div>
                    </div>
                </address>
              </center>
              🚨 This package is under maintenance. Release will be available in April 2023
          </header>
          
    </center>
    
    </div>
  )
}
