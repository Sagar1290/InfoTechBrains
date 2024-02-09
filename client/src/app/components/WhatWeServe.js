
const WhatWeServe = () => {

    const servingData = [
        {
            image: "analysis.png",
            heading: "Analyze your data",
            content: "Lorem Ipsum dolor it amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolre ",
        },
        {
            image: "structure.png",
            heading: "Develop A Customized Plan",
            content: "Lorem Ipsum dolor it amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolre ",
        },
        {
            image: "lamp.png",
            heading: "Implement Your Solution",
            content: "Lorem Ipsum dolor it amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolre ",
        }
    ]

    return (
        <section className="-mt-48 md:pt-16 md:mt-0">
            <h1 className="text-3xl font-bold px-10 py-4 text-center lg:text-4xl">How We Take Your Business From Good To Great</h1>
            <p className="text-[#6b6b84] p-4 text-sm text-center lg:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            <div className="px-10 flex flex-col lg:flex-row">
                {
                    servingData.map((ele, index) => {
                        return (
                            <div key={index} className="flex flex-col justify-center items-center p-4">
                                <i className="h-16 w-16 bg-red-100 rounded-lg hover:bg-[#ff5d22] ">
                                    <img src={ele.image} alt="service-image" className="p-3" />
                                </i>
                                <h2 className="text-2xl font-semibold text-center sm:text-left py-4">{ele.heading}</h2>
                                <p className="text-[#6b6b84] text-sm text-center px-8 py-4 md:text-lg md:text-left">{ele.content}</p>
                                <a href="#" className="animation-left-right text-[#ff5d22] hover:text-[#221638]">
                                    <i className="fa-solid fa-arrow-right"></i>
                                    <span>Read More</span>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </section >
    )
}

export default WhatWeServe