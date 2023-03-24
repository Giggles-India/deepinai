import Header from '../components/HomePage/Header'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);

    return(
    <div style={{backgroundImage:`url('https://tailwindui.com/img/beams-home@95.jpg')`,
      backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh', width: '100vw'}} >
        <Header />
        <section data-aos="zoom-out">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="flex flex-col items-center w-full max-w-2xl px-4 py-8 mx-auto text-center bg-white rounded-lg shadow-xl justify-start">
                    <h1 class="text-2xl font-bold text-gray-900">Contact Us</h1>
                    <p class="mt-4 text-gray-500">We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.</p>
                    <form class="flex flex-col items-center justify-center w-full mt-8 space-y-4">
                        <div class="flex flex-col w-full justify-start ">
                            {/* <label class=" text-sm font-medium text-gray-500">Name</label> */}
                            <input class="w-full px-4 py-2 mt-2 text-gray-900 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none" type="text" placeholder="Your Name" />
                            {/* <label class="text-sm font-medium text-gray-500">Email</label> */}
                            <input class="w-full px-4 py-2 mt-2 text-gray-900 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none" type="email" placeholder="Your Email"/>
                            {/* <label class="text-sm font-medium text-gray-500">Message</label> */}
                            <textarea class="w-full px-4 py-2 mt-2 text-gray-900 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none" placeholder="Your message here..."></textarea>
                            <button class="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>


                            

    </div>
    )
}