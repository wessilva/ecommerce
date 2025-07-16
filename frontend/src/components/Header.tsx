import { ShoppingCart, User, Search, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 text-white shadow-lg">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                        <Gamepad2 className="h-8 w-8 text-green-400" />
                        <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                            WeesStore
                        </span>
                    </Link>

                    {/* Search Bar */}
                    <div className="hidden md:flex flex-1 max-w-md mx-8">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Buscar produtos geek..."
                                className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20"
                            />
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex items-center space-x-6">
                        <Link to="/" >
                            <span className="text-white hover:text-green-400 transition-colors">Home</span>
                        </Link>
                        <Link to="/" >
                            <span className="text-white hover:text-green-400 transition-colors">Produtos</span>
                        </Link>
                        <Link to="/" >
                            <span className="text-white hover:text-green-400 transition-colors">Cadastro</span>
                        </Link>
                        <div className="hover:text-green-400 transition-colors cursor-pointer">
                            <User className="h-6 w-6" />
                        </div>
                        <div className="hover:text-green-400 transition-colors relative cursor-pointer">
                            <ShoppingCart className="h-6 w-6" />
                            <span className="absolute -top-2 -right-2 bg-green-400 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                                1
                            </span>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;