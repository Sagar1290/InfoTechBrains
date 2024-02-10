const Footer = () => {
    return (
        <section className="bg-[#fefcf8]">
            <div className="md:footerSection md:m-20 flex flex-col md:flex-row">
                <div className="p-4 basis-1/4">
                    <div className=" py-4">
                        <img src="logo.png" alt="company-logo" />
                    </div>
                    <p className=" text-[#6b6b84] pr-4 sm:px-0">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                    <div className="flex flex-row space-x-2 py-4">
                        <div className="bg-[#6b6b84] text-center p-2 h-8 w-8 text-white rounded-sm">
                            <i className="fa-brands fa-facebook-f"></i>
                        </div>
                        <div className="bg-[#6b6b84] text-center p-2 h-8 w-8 text-white rounded-sm">
                            <i className="fa-brands fa-twitter"></i>
                        </div>
                        <div className="bg-[#6b6b84] text-center p-2 h-8 w-8 text-white rounded-sm">
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                        <div className="bg-[#6b6b84] text-center p-2 h-8 w-8 text-white rounded-sm">
                            <i className="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                </div>
                <div className="basis-1/4 sm:pt-8">
                    <h1 className="text-3xl py-3 px-3 md:text-xl md:font-bold">Explore</h1>
                    <div className="flex flex-col text-[#6b6b84] px-3 py-3">
                        <p className="py-1">Home</p>
                        <p className="py-1"> About</p>
                        <p className="py-1">Case Studies</p>
                        <p className="py-1">Our Blog</p>
                        <p className="py-1">Contact</p>
                    </div>
                </div>
                <div className="basis-1/4 sm:pt-8">
                    <h1 className="text-3xl py-3 px-3 md:text-xl md:font-bold">Resources</h1>
                    <div className="flex flex-col text-[#6b6b84] px-3 py-3">
                        <p className="py-1">Our Scientists</p>
                        <p className="py-1">Our Services</p>
                        <p className="py-1">Testimonials</p>
                        <p className="py-1">SaaS Solutions</p>
                        <p className="py-1">Case Studies</p>
                    </div>
                </div>
                <div className="basis-1/4 sm:pt-8">
                    <h1 className="text-3xl py-3 px-3 md:text-xl md:font-bold">Address</h1>
                    <div className="flex flex-col text-[#6b6b84] px-3 py-3">
                        <div className="py-1">
                            <i className="fa-solid fa-location-dot p-1 text-[#ff5d22]"></i>
                            <span className="p-1">175 5th Ave, New York, NY 10010, United States
                            </span>
                        </div>
                        <div className="py-1">
                            <i className="fa-solid fa-phone-volume p-1 text-[#ff5d22]"></i>
                            <span className="p-1">+1 (123) 456 7890</span>
                        </div>
                        <div className="py-1">
                            <i className="fa-regular fa-envelope p-1 text-[#ff5d22]"></i>
                            <span className="p-1">hello@tarn.com</span>
                        </div>
                        <div className="py-1">
                            <i className="fa-solid fa-inbox p-1 text-[#ff5d22]"></i>
                            <span className="p-1">+55 785 4578964</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-[#6b6b84] border-t-2 p-4 md:p-0 md:w-full md:relative">
                <p className="text-center pt-3 md:absolute md:left-16 md:py-8">Copyright ©2024 <span className="font-bold text-[#221638]">Tarn </span> All rights reserved <span className="text-[#ff5d22]">EnvyTheme</span></p>
                <p className="text-center pt-3 md:absolute md:right-16 md:py-8">    Privacy Policy | Terms & Conditions</p>
            </div>
        </section>
    )
}

export default Footer