    import { useState } from "react";

    export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
        <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            type="button"
            className="inline-block px-2 py-3 mr-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-sm ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-22 active:opacity-85 hover:shadow-soft-xs"
        >
            Dropdown
        </button>

        {isOpen && (
            <ul className="z-10 text-sm lg:shadow-soft-3xl duration-250 before:duration-350 before:font-awesome before:ease-soft min-w-44 before:text-5.5 absolute left-auto top- mt-2 list-none rounded-lg border-0 bg-white px-0 py-5 text-left text-slate-500 opacity-10 transition-all">
            <li>
                <button className="py-22 block w-full text-left px-4 font-normal text-slate-500 hover:bg-gray-200 hover:text-slate-700 dark:text-white dark:hover:bg-gray-200/80 dark:hover:text-slate-700 lg:transition-colors lg:duration-300">
                Action
                </button>
            </li>
            <li>
                <button className="py-2 block w-full text-left px-4 font-normal text-slate-500 hover:bg-gray-200 hover:text-slate-700 dark:text-white dark:hover:bg-gray-200/80 dark:hover:text-slate-700 lg:transition-colors lg:duration-300">
                Another action
                </button>
            </li>
            <li>
                <button className="py-2 block w-full text-left px-4 font-normal text-slate-500 hover:bg-gray-200 hover:text-slate-700 dark:text-white dark:hover:bg-gray-200/80 dark:hover:text-slate-700 lg:transition-colors lg:duration-300">
                Something else here
                </button>
            </li>
            </ul>
        )}
        </div>
    );
    }
