const WhatWeDo = () => {

    const ourWork = [
        {
            image: "segmentation.png",
            heading: "Research",
            content: "Lorem ipsum dolor sit consectetur, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
            service1: "Market Research",
            service2: "Invertment Research",
            href: "#"
        },
        {
            image: "analytics.png",
            heading: "Analytics",
            content: "Lorem ipsum dolor sit consectetur, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
            service1: "Data Analytics",
            service2: "Business Analytics",
            href: "#"
        },
        {
            image: "technology.png",
            heading: "Technology",
            content: "Lorem ipsum dolor sit consectetur, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
            service1: "Intelligence Automation",
            service2: "Quality Engineering",
            href: "#"
        }
    ]

    return (
        <section className="md:pt-16 md:mt-0">
            <div >
                <h1 className="text-3xl font-bold px-10 py-4 text-center lg:text-4xl">What We Do</h1>
                <p className="text-[#6b6b84] p-4 text-sm text-center lg:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>

            <div className="flex flex-col md:flex-row">
                {
                    ourWork.map((ele, index) => {
                        return (
                            <div key={index} className="flex flex-col justify-center items-center p-4 md:w-1/3">
                                <div className="h-16 w-16 bg-red-100 hover:bg-[#ff5d22] rounded-lg">
                                    <img src={ele.image} alt="ourWorkImage" className="p-3" />
                                </div>
                                <h1 className="text-2xl font-semibold pt-4">{ele.heading}</h1>
                                <p className="text-[#6b6b84] text-sm text-center py-4 px-8 md:text-lg md:text-left">{ele.content}</p>
                                <div className=" underline underline-offset-4 hover:text-[#ff5d22] py-2 md:items-start">
                                    <span className="md:text-lg md:text-left">{ele.service1}</span>
                                    <i className="fa-solid fa-arrow-right px-2"></i>
                                </div>
                                <div className="underline underline-offset-4 hover:text-[#ff5d22] py-2">
                                    <span className="md:text-lg md:text-left">{ele.service2}</span>
                                    <i className="fa-solid fa-arrow-right px-2"></i>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section >
    )
}

export default WhatWeDo