import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { ArrowRight, Zap, Shield, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
    const featuredProducts = [
        {
            id: 1,
            name: "Teclado Mecânico RGB Gamer",
            price: 299.99,
            originalPrice: 399.99,
            image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
            rating: 5,
            category: "Gaming"
        },
        {
            id: 2,
            name: "Mouse Gamer RGB 12000 DPI",
            price: 149.99,
            originalPrice: 199.99,
            image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
            rating: 4,
            category: "Gaming"
        },
        {
            id: 3,
            name: "Headset Gamer Surround 7.1",
            price: 249.99,
            image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop",
            rating: 5,
            category: "Audio"
        },
        {
            id: 4,
            name: "Monitor Gaming 144Hz 24\"",
            price: 899.99,
            originalPrice: 1199.99,
            image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
            rating: 5,
            category: "Monitor"
        },
        {
            id: 5,
            name: "Cadeira Gamer Ergonômica",
            price: 699.99,
            image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
            rating: 4,
            category: "Móveis"
        },
        {
            id: 6,
            name: "Placa de Vídeo RTX 4070",
            price: 2499.99,
            originalPrice: 2799.99,
            image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop",
            rating: 5,
            category: "Hardware"
        }
    ];

    return (
        <div className="max-h-screen max-w-screen bg-gray-900">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                            Bem-vindo à WeesStore
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-gray-300">
                            Descubra os melhores produtos geek, gaming e tecnologia em um só lugar!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center cursor-pointer">
                            <div className="bg-green-400 hover:bg-green-500 text-black px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                                <span>Explorar Produtos</span>
                                <ArrowRight className="h-5 w-5" />
                            </div>
                            <Link
                                to="/Register"

                            >
                                <span className=" border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center" >Cadastre-se</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16 bg-gray-800">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-green-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Zap className="h-8 w-8 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Entrega Rápida</h3>
                            <p className="text-gray-400">Receba seus produtos em até 24h na região metropolitana</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-green-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="h-8 w-8 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Compra Segura</h3>
                            <p className="text-gray-400">Suas transações protegidas com certificado SSL</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-green-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Truck className="h-8 w-8 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Frete Grátis</h3>
                            <p className="text-gray-400">Frete grátis para compras acima de R$ 199</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-16 bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Produtos em <span className="text-green-400">Destaque</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Confira nossa seleção especial de produtos geek com os melhores preços
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProducts.map(product => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>

                    <div className="flex justify-center text-center mt-12">
                        <div className=" w-1/3 bg-green-400 hover:bg-green-500 text-black px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer">
                            Ver Todos os Produtos
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-16 bg-gradient-to-r from-purple-900 to-blue-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Fique por dentro das novidades
                        </h2>
                        <p className="text-gray-300 mb-8">
                            Receba promoções exclusivas e lançamentos em primeira mão
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Seu melhor e-mail"
                                className="flex-1 px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-green-400 focus:outline-none"
                            />
                            <div className="bg-green-400 hover:bg-green-500 text-black px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer">
                                Inscrever
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Index;