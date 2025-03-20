const Alert = () => {
    return (
        <>
        <div className="relative p-4 pr-12 mb-4 text-white border border-solid rounded-lg bg-gradient-to-tl from-gray-400 to-gray-100 border-slate-100">
        <a href="javascript:;" className="font-semibold text-white">an example link</a>
        <button type="button" alert-close className="box-content absolute top-0 right-0 p-4 text-sm bg-transparent border-0 rounded text-slate-700 w-4 h-4 z-2">
            <span aria-hidden="true" className="text-center cursor-pointer">&#10005;</span>
        </button>
        </div>
        </>
    )
}
export default Alert;