export default function Footer() {
    return (
        <footer className="container bg-black mt-auto py-4 mx-auto">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex flex-col items-center justify-between">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <h1 className="text-white text-2xl font-bold">Portfolio</h1>
                        </div>
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-thin">Home</a>
                            <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-thin">Projects</a>
                            <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-thin">Contact</a>
                        </div>

                        <div className="text-white text-center">
                            <p>&copy; {new Date().getFullYear()} - Flanquart Bastien</p>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}
