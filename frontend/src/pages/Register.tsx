import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { User, Mail, Lock, Eye, EyeOff, UserPlus } from "lucide-react";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false
    });
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui você implementaria a lógica de cadastro
        if (formData.name === "" || formData.email === "" || formData.password === "" || formData.confirmPassword === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }
        try {
            const response = await fetch('http://localhost:3000/api/v1/users', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user: {
                        name: formData.name,
                        email: formData.email,
                        password: formData.password,
                        password_confirmation: formData.confirmPassword,
                    }

                })
            });

            const data = await response.json()

            if (response.ok) {
                // Cadastro realizado com sucesso
                console.log("Usuário cadastrado com sucesso:", data);


            }
        } catch (err) {
            console.error("Erro ao cadastrar usuário:", err);
            setError("Erro de conexão. Verifique sua internet e tente novamente.");
        } finally {
            setIsLoading(false);
        }
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <div className="min-h-screen bg-gray-900">
            <Header />

            <div className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-md mx-auto">
                        <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
                            {/* Header */}
                            <div className="text-center mb-8">
                                <div className="bg-green-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <UserPlus className="h-8 w-8 text-black" />
                                </div>
                                <h1 className="text-3xl font-bold text-white mb-2">Criar Conta</h1>
                                <p className="text-gray-400">Junte-se à comunidade geek!</p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Field */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        Nome Completo
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20"
                                            placeholder="Digite seu nome completo"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        E-mail
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20"
                                            placeholder="Digite seu e-mail"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Password Field */}
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                                        Senha
                                    </label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-12 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20"
                                            placeholder="Digite sua senha"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                                        >
                                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                        </button>
                                    </div>
                                </div>

                                {/* Confirm Password Field */}
                                <div>
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                                        Confirmar Senha
                                    </label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-12 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20"
                                            placeholder="Confirme sua senha"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                                        >
                                            {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                        </button>
                                    </div>
                                </div>

                                {/* Terms Checkbox */}
                                <div className="flex items-start space-x-2">
                                    <input
                                        type="checkbox"
                                        id="acceptTerms"
                                        name="acceptTerms"
                                        checked={formData.acceptTerms}
                                        onChange={handleChange}
                                        className="w-4 h-4 text-green-400 bg-gray-700 border-gray-600 rounded focus:ring-green-400 focus:ring-2"
                                        required
                                    />
                                    <label htmlFor="acceptTerms" className="text-sm text-gray-300">
                                        Aceito os{" "}
                                        <a href="#" className="text-green-400 hover:text-green-300">
                                            termos de uso
                                        </a>{" "}
                                        e{" "}
                                        <a href="#" className="text-green-400 hover:text-green-300">
                                            política de privacidade
                                        </a>
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-green-400 hover:bg-green-500 text-black font-semibold py-3 px-4 rounded-lg transition-colors"
                                >
                                    Criar Conta
                                </button>
                            </form>

                            {/* Login Link */}
                            <div className="text-center mt-6">
                                <p className="text-gray-400">
                                    Já tem uma conta?{" "}
                                    <Link to="/login" className="text-green-400 hover:text-green-300 font-semibold">
                                        Faça login
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Register;