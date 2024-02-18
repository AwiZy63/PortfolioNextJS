import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="container w-full">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <h1 className="text-white text-2xl font-bold md:text-3xl">Portfolio</h1>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <Link href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium md:text-base">Home</Link>
                                <Link href="/#projects" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium md:text-base">Projects</Link>
                                <Link href="/contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium md:text-base">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block sm:hidden">
                    <div className="flex space-x-4 justify-center py-2">
                        <a href="#" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Home</a>
                        <a href="#" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Projects</a>
                        <a href="#" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
