import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-16">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-green-400">GeekStore</h3>
                        <p className="text-gray-400 mb-4">
                            Sua loja online de produtos geek! Encontre os melhores itens de tecnologia,
                            gaming, animes, quadrinhos e muito mais.
                        </p>
                        <div className="flex space-x-4">
                            <Facebook className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
                            <Twitter className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
                            <Instagram className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
                            <Youtube className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-green-400">Links Rápidos</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Gaming</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tecnologia</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Animes</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Quadrinhos</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Colecionáveis</a></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-green-400">Atendimento</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Minha Conta</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pedidos</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Trocas e Devoluções</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Suporte</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-green-400">Contato</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                                <Mail className="h-5 w-5 text-green-400" />
                                <span className="text-gray-400">silveirawesley.dev@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone className="h-5 w-5 text-green-400" />
                                <span className="text-gray-400">(53) 9 9912-3547</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MapPin className="h-5 w-5 text-green-400" />
                                <span className="text-gray-400">Rio Grande, RS</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400">
                        © 2024 GeekStore. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;