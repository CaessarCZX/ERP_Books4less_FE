const Card = () => {
    return (
        <>
        <div className="w-full max-w-full mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
        <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
            <div className="relative">
            <a className="block shadow-xl rounded-2xl">
                <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/home-decor-1.jpg" alt="img-blur-shadow" className="max-w-full shadow-soft-2xl rounded-2xl" />
            </a>
            </div>
            <div className="flex-auto px-1 pt-6">
            <p className="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text">Project #2</p>
            <a href="javascript:;">
                <h5>Modern</h5>
            </a>
            <p className="mb-6 leading-normal text-sm">As Uber works through a huge amount of internal management turmoil.</p>
            <div className="flex items-center justify-between">
                <button type="button" className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500">View Project</button>
                <div className="mt-2">
                <a href="javascript:;" className="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30">
                    <img className="w-full rounded-circle" alt="Image placeholder" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/team-1.jpg" />
                </a>
                <a href="javascript:;" className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30">
                    <img className="w-full rounded-circle" alt="Image placeholder" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/team-2.jpg" />
                </a>
                <a href="javascript:;" className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30">
                    <img className="w-full rounded-circle" alt="Image placeholder" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/team-3.jpg" />
                </a>
                <a href="javascript:;" className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30">
                    <img className="w-full rounded-circle" alt="Image placeholder" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/team-4.jpg" />
                </a>
                </div>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Card;