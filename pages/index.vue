<template>
    <section class='flex gap-6 w-full items-center py-12 bg-white dotted-bg'>
        <div class='flex flex-col md:flex-row max-w-7xl mx-auto'>
            <img src='https://illustrations.popsy.co/amber/idea-launch.svg' alt='sample-image' class='w-auto h-[80vh] object-contain'>
            <div class='hero-text flex md:flex-col flex-row gap-4 items-center justify-center w-full'>
                <div class='text-gray-700 text-[3em] font-bold text-center font-exo'>Your Gateway to Tailored <br/> E-Commerce Excellence!</div>
                <p class='text-center text-gray-600'>We don't just build websites, we create digital experiences that resonate with your brand identity and captivate your audience.</p>
                <div class="flex items-center gap-5 mt-4 relative w-full justify-center">
                    <img src="/images/arrow.png" alt="arrow-shape" class="absolute left-2 top-12 h-20">
                    <button class='rounded-xl px-10 py-3 text-white bg-gradient-to-br from-zinc-600 to-zinc-900 hover:bg-gradient-to-bl'>Get Start Today</button>
                    <button class='rounded-xl px-10 py-3 text-white bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-500 hover:bg-gradient-to-bl'>Contact Us</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Our service -->
    <section class="w-full py-12">
        <div class="max-w-7xl mx-auto">
            <div class="section-header text-center">
                <h2 class="text-[3.5em] text-gray-800 font-exo">We provide effective <br/> development solutions</h2>
            </div>
            <div class="grid grid-cols-2 gap-6 mt-12">
                <div class="border-2 rounded-[25px] border-gray-800 overflow-clip">
                    <div class="relative cursor-pointer p-10 rounded-[20px] flex flex-col hover:bg-amber-300 transition duration-700 ease-in-out border-r-8 border-b-8 border-transparent hover:border-gray-800 h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-gray-800" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect width="13" height="13" x=".5" y=".5" rx="1"/><path d="M.5 4h13M4 7l1.5 1.5L4 10m4.5-1.5h2"/></g></svg>
                        <h3 class="text-gray-800 text-2xl font-semibold mt-10 mb-4"> E-Commerce Website Development</h3>
                        <p class="text-gray-800">Unlock the full potential of your online business with our custom e-commerce website development services. Tailored to your brand, our websites combine stunning design with seamless functionality, ensuring a standout presence in the digital marketplace.</p>
                    </div>
                </div>
                <div class="border-2 rounded-[25px] border-gray-800 overflow-clip">
                    <div class="relative cursor-pointer p-10 rounded-[20px] flex flex-col hover:bg-amber-300 transition duration-700 ease-in-out border-r-8 border-b-8 border-transparent hover:border-gray-800 h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-gray-800" viewBox="0 0 32 32"><path fill="currentColor" d="M17 24h4v4h-4zm7 0h4v4h-4zm-7-7h4v4h-4zm7 0h4v4h-4z"/><path fill="currentColor" d="M28 11h-6V7c0-1.7-1.3-3-3-3h-6c-1.7 0-3 1.3-3 3v4H4c-.6 0-1 .4-1 1v.2l1.9 12.1c.1 1 1 1.7 2 1.7H15v-2H6.9L5.2 13H28zM12 7c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v4h-8z"/></svg>
                        <h3 class="text-gray-800 text-2xl font-semibold mt-10 mb-4">E-Commerce Cataloging</h3>
                        <p class="text-gray-800">Maximize your product visibility and conversion rates with our expert e-commerce cataloging services. We meticulously optimize product listings, ensuring your offerings shine on platforms like Amazon and Flipkart.</p>
                    </div>
                </div>
                <div class="border-2 rounded-[25px] border-gray-800 overflow-clip">
                    <div class="relative cursor-pointer p-10 rounded-[20px] flex flex-col hover:bg-amber-300 transition duration-700 ease-in-out border-r-8 border-b-8 border-transparent hover:border-gray-800 h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-gray-800" viewBox="0 0 24 24"><path d="M15.93 17.09c-.18.16-.43.17-.63.06c-.89-.74-1.05-1.08-1.54-1.79c-1.47 1.5-2.51 1.95-4.42 1.95c-2.25 0-4.01-1.39-4.01-4.17c0-2.18 1.17-3.64 2.86-4.38c1.46-.64 3.49-.76 5.04-.93V7.5c0-.66.05-1.41-.33-1.96c-.32-.49-.95-.7-1.5-.7c-1.02 0-1.93.53-2.15 1.61c-.05.24-.25.48-.47.49l-2.6-.28c-.22-.05-.46-.22-.4-.56c.6-3.15 3.45-4.1 6-4.1c1.3 0 3 .35 4.03 1.33C17.11 4.55 17 6.18 17 7.95v4.17c0 1.25.5 1.81 1 2.48c.17.25.21.54 0 .71l-2.06 1.78h-.01m-2.7-6.53V10c-1.94 0-3.99.39-3.99 2.67c0 1.16.61 1.95 1.63 1.95c.76 0 1.43-.47 1.86-1.22c.52-.93.5-1.8.5-2.84m6.93 8.98C18 21.14 14.82 22 12.1 22c-3.81 0-7.25-1.41-9.85-3.76c-.2-.18-.02-.43.25-.29c2.78 1.63 6.25 2.61 9.83 2.61c2.41 0 5.07-.5 7.51-1.53c.37-.16.66.24.32.51m.91-1.04c-.28-.36-1.85-.17-2.57-.08c-.19.02-.22-.16-.03-.3c1.24-.88 3.29-.62 3.53-.33c.24.3-.07 2.35-1.24 3.32c-.18.16-.35.07-.26-.11c.26-.67.85-2.14.57-2.5z" fill="currentColor"/></svg>
                        <h3 class="text-gray-800 text-2xl font-semibold mt-10 mb-4">Amazon & Flipkart Account Management</h3>
                        <p class="text-gray-800">Let us handle the complexities of account management on major e-commerce platforms. From setup to ongoing optimization, we ensure your presence on Amazon and Flipkart is not just maintained but thrives.</p>
                    </div>
                </div>
                <div class="border-2 rounded-[25px] border-gray-800 overflow-clip">
                    <div class="relative cursor-pointer p-10 rounded-[20px] flex flex-col hover:bg-amber-300 transition duration-700 ease-in-out border-r-8 border-b-8 border-transparent hover:border-gray-800 h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-gray-800" viewBox="0 0 24 24"><path fill="currentColor" d="M12.25 1.47c-.7-.05-1.43.11-2.08.49a3.656 3.656 0 0 0-1.35 5l7.34 12.7c1.01 1.76 3.25 2.34 5.01 1.34c1.75-1 2.33-3.25 1.33-5L15.18 3.3a3.695 3.695 0 0 0-2.93-1.83M6.82 6.76L1.5 16a3.67 3.67 0 0 0-.5 1.83a3.67 3.67 0 0 0 3.67 3.67a3.67 3.67 0 0 0 3.17-1.84v.01L11 14.19c-1.35-2.3-2.73-4.59-3.97-6.96c-.08-.15-.15-.31-.2-.47ZL16.4 5Z"/></svg>
                        <h3 class="text-gray-800 text-2xl font-semibold mt-10 mb-4">Advertising Optimization</h3>
                        <p class="text-gray-800">Amplify your reach and impact with our advertising optimization services. We craft and fine-tune strategic advertising campaigns to enhance visibility and drive targeted traffic to your products.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Us  -->
    <section class="w-full py-20 bg-gray-950">
        <div class="flex items-center gap-12 max-w-7xl mx-auto">
            <div class="w-full">
                <h2 class="text-[3em] font-exo font-bold text-gray-100">Let's start a project together</h2>
                <p class="mt-3 font-exo">Unlock the full potential of your online business with RunMyEcom. Whether you're starting from scratch or looking to enhance your current presence, we're here to guide you. Let's embark on a journey of digital success together.</p>
                <h3 class="text-amber-600 font-bold mt-6">Send us an email:</h3>
                <p>hello[at]runmyecom.com</p>
                <div class="flex items-center gap-3 mt-12 social-links">
                    <a href="#" class="border rounded-full p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"/></svg>
                    </a>
                    <a href="#" class="border rounded-full p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 256 256"><path fill="currentColor" d="M176 24H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56m-48 152a48 48 0 1 1 48-48a48.05 48.05 0 0 1-48 48m60-96a12 12 0 1 1 12-12a12 12 0 0 1-12 12m-28 48a32 32 0 1 1-32-32a32 32 0 0 1 32 32"/></svg>
                    </a>
                    <a href="#" class="border rounded-full p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"/></svg>
                    </a>
                    <a href="#" class="border rounded-full p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24"><circle cx="4.983" cy="5.009" r="2.188" fill="currentColor"/><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" fill="currentColor"/></svg>
                    </a>
                </div>
            </div>
            <div class="contact-form w-full">
                <h3 class="font-bold font-exo mb-6">Send us a message</h3>
                <form class="flex flex-col gap-6">
                    <input type="text" placeholder="Your name" class="border rounded-full p-4 w-full bg-gray-950">
                    <input type="email" placeholder="Your email address" class="border rounded-full p-4 w-full bg-gray-950">
                    <input type="text" placeholder="+088-334-2355" class="border rounded-full p-4 w-full bg-gray-950">
                    <textarea rows="6" placeholder="Write your messsage here..." class="border rounded-3xl p-4 w-full bg-gray-950"></textarea>
                    <button class="flex items-center justify-between w-full p-1 rounded-full bg-gradient-to-bl from-yellow-400 via-orange-400 to-orange-500 hover:bg-gradient-to-br group">
                        <span class="pl-5">Send message</span>
                        <span class="bg-gray-950 rounded-full p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 group-hover:scale-150 transition duration-700 ease-in-out" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M11.821.098a1.62 1.62 0 0 1 2.077 2.076l-3.574 10.712a1.62 1.62 0 0 1-1.168 1.069a1.599 1.599 0 0 1-1.52-.434l-1.918-1.909l-2.014 1.042a.5.5 0 0 1-.73-.457l.083-3.184l7.045-5.117a.625.625 0 1 0-.735-1.012L2.203 8.088l-1.73-1.73a1.6 1.6 0 0 1-.437-1.447a1.62 1.62 0 0 1 1.069-1.238h.003L11.82.097Z" clip-rule="evenodd"/></svg>
                        </span>
                    </button>
                </form>
            </div>
        </div>
    </section>

</template>

<script setup>

</script>

<style>

</style>