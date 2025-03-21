const Input =({ label }: { label: string }) => {
    return (
        <>
            <div className="flex h-screen bg-gray-100 dark:bg-gray-800">
                <div className="bg-white d shadow-md rounded px-8 py-6">
                    <div className="flex flex-col">
                        <label htmlFor="in" className="text-base font-medium text-gray-500 dark:text-gray-300 mb-1">{label}</label>
                        <input
                            id="in"
                            type="text"
                            className="text-sm leading-none font-medium border border-gray-300 dark:border-gray-600 rounded-md px-2 py-1 focus:outline-none focus:border-blue-500 dark:focus:border-white dark:bg-gray-800 dark:text-white"
                            placeholder="Input"
                            minLength= {5}
                            maxLength= {100}
                            pattern="[a-zA-Z0-9]+"
                            title="Solo letras y números permitidos"
                            autoComplete="off"
                            required
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Input;