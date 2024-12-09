export default function Footer() {
    return (
        <footer className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-xl font-bold">Funiro.</h2>
                        <p className="text-gray-600">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
                    </div>

                    <div className="flex flex-col md:flex-row space-x-8 md:space-x-0">
                        <div className="flex flex-col space-y-4">
                            <h3 className="text-lg font-semibold">Links</h3>
                            <ul>
                                <li><a href="#" className="text-gray-600 hover:text-gray-800">Home</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-800">Shop</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-800">About</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
                            </ul>
                        </div>

                        <div className="flex flex-col space-y-4">
                            <h3 className="text-lg font-semibold">Help</h3>
                            <ul>
                                <li><a href="#" className="text-gray-600 hover:text-gray-800">Payment Options</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-800">Returns</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-800">Privacy Policies</a></li>
                            </ul>
                        </div>

                        <div className="flex flex-col space-y-4">
                            <h3 className="text-lg font-semibold">Newsletter</h3>
                            <div className="flex">
                                <input type="text" placeholder="Enter Your Email Address" className="border border-gray-300 p-2 rounded-l-md" />
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md">SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <p className="text-gray-600">© 2023 Funiro. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}


