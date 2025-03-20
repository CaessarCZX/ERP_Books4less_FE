<script src="../path/to/sweetalert.min.js"></script>

const ReadyAlert = () => {
    return(        
        <div className="w-full max-w-full px-3 mt-6 md:mt-0 shrink-0 md:flex-0 md:w-4/12">
        <div className="relative flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
            <div className="flex-auto p-6 text-center">
            <p>A success message</p>
            <button className="inline-block px-6 py-3 mb-0 font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25" onclick="soft.showSwal('success-message')">Try me!</button>
            </div>
        </div>
        </div>
    )
}
export default ReadyAlert;