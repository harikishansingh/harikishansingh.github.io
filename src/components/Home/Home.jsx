import React from 'react'


export default function Home() {
    return (
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
            <section>
                <div className="px-2 lg:flex lg:flex-row lg:items-center">
                    <div className="w-full lg:w-1/2 order-1 sm:order-2">
                        <div className="my-10 lg:my-0 lg:px-10">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                                Hey there, I'm Hari
                            </h2>
                            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
                                Experienced Warehouse Manager with 18+ years in Pharma warehouse and stores management, presently serving as Warehouse Officer at Mission Pharma Logistics (I) Pvt Ltd. Proven expertise in directing operations, optimizing processes, and ensuring quality assurance. Skilled in recruitment, training, and scheduling for production needs. A resourceful leader with a focus on maximizing space utilization, implementing automation, and ensuring compliance with quality standards. Proficient in online IT packages and bar-code operations. Strong communicator adept at boosting morale and efficiency through constructive feedback.
                            </p>
                            <div className="mt-8">
                                <a href='../src/assets/cv.pdf' download
                                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black "
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 sm:order-2">
                        <img
                            src="https://github.com/harikishansingh/harikishansingh.github.io/blob/main/src/assets/7.jpeg?raw=true"
                            alt="ManWith Laptop"
                            className="h-full w-full rounded-md object-cover w-1/2"
                        />
                    </div>
                </div>
            </section>
        </div>

    )
}
