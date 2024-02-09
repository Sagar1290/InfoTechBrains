
const WhyChooseUs = () => {

    const imagesUrl = ["partner/partner1.png", "partner/partner2.png", "partner/partner3.png", "partner/partner4.png", "partner/partner5.png", "partner/partner6.png"]

    return (
        <section className="pt-20 mx-2 flex flex-col lg:flex-row md:mx-12">
            <div className="mx-auto flex flex-col justify-center items-center p-8 lg:w-1/2 bg-[#221638] text-white">
                <h1 className="font-semibold text-3xl p-4">Why Choose Us? </h1>
                <p className="text-center p-2">During 30 years in data analytics, we have built up comprehensive competencies that cover traditional and big data, data management, business intelligence (including self-service BI and data visualization), advanced data analytics, and data science.</p>
                <p className="text-center p-2">In 2015, we were rated A+ by BBB, recognized as the top IT company by Clutch, as well as featured on The Silicon Review listing among 10 Fastest Growing Data Analytics Companies.</p>
                <button className="animatedButton bg-[#ff5d22] mt-2 mb-8 px-5 py-3">
                    <span ></span>
                    <a className="text-white">
                        <i className="fa-solid fa-arrow-right px-2"></i>
                        More About Us
                    </a>
                </button>
            </div>
            <div className="mx-auto flex flex-col justify-center items-center p-8 lg:w-1/2 bg-red-100" >
                <h1 className="font-semibold text-3xl pb-8">Our Brand Partners</h1>
                <div className="flex flex-wrap justify-center items-center">
                    {
                        imagesUrl.map((image, index) => {
                            return (
                                <div key={index} className="h-16 w-1/2 basis-1/2 ">
                                    <img src={image} alt="brandImage" className="p-4" />
                                </div>
                            )
                        })
                    }
                </div>
                <button className="mt-8 animated-underline text-[#ff5d22]">
                    <span></span>
                    <text className="font-semibold">View All</text>
                </button>
            </div>
        </section>
    )
}

export default WhyChooseUs