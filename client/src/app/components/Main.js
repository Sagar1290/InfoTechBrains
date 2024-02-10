"use client"

export default function Main() {

    return (
        <section className="mainSection flex flex-col lg:flex-row">
            <div className="m-2 lg:w-9/20 relative flex flex-col  text-center md:my-auto">
                <h1 className="p-2 pt-12 md:p-4 md:pr-48 font-bold text-[#333741] text-3xl lg:text-5xl lg:text-left lg:tracking-wider lg:leading-relaxed animated-div-leftToRight">
                    Managed Analytics and Data Analysis Platform
                </h1>
                <p className=" py-8 text-sm md:pl-4 md:pr-48 lg:text-lg text-[#6b6b84] lg:text-left animated-div-leftToRight">
                    We have created a cloud based tool to do your all boring tasks related to data analysis and decesion making based on the nature of data!
                </p>
                <div className="flex animated-div-rightToLeft px-4">
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

            <div className="px-4 py-8 md:my-auto md:px-0 md:py-0 animated-div-bottomToUp">
                <img src="banner-four-main-img.png" className="w-full" />
            </div>
        </section>
    )
}