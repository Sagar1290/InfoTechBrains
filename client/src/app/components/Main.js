"use client"

export default function Main() {

    return (
        <section className="mainSection flex flex-col lg:flex-row">
            <div className="m-2 lg:w-2/5 flex flex-col items-center text-center md:my-auto">
                <h1 className="p-4 font-bold text-[#333741] text-4xl lg:text-5xl lg:text-left lg:tracking-wider lg:leading-relaxed">
                    Managed Analytics and Data Analysis Platform
                </h1>
                <p className=" py-8 text-sm lg:px-4 lg:text-lg text-[#6b6b84] lg:text-left ">
                    We have created a cloud based tool to do your all boring tasks related to data analysis and decesion making based on the nature of data!
                </p>
                <div className="flex">
                    <button className="animatedButton m-1 bg-[#ff5d22] px-5 py-3">
                        <span></span>
                        <a href="#" className="text-white">
                            <i className="fa-solid fa-arrow-right px-2"></i>
                            about Us
                        </a>
                    </button>
                    <button className="animatedButton m-1 px-5 py-3 text-[#ff5d22] border border-[#ff5d22]">
                        <span></span>
                        <a href="#">
                            <i className="fa-solid fa-check px-2"></i>
                            Get Started
                        </a>
                    </button>
                </div>
            </div>

            <div className="px-4 py-8 md:my-auto">
                <img src="banner-four-main-img.png" />
            </div>
        </section>
    )
}