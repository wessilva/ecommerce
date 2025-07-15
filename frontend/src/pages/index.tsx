import { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';

interface Product {
    id: number;
    name: string;
    price: number;
    image?: string;
}

function ProductCard({ product }: { product: Product }) {

    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '16px',
            margin: '8px',
            maxWidth: '300px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            {product.image && (
                <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }}
                />
            )}
            <h3 style={{ margin: '12px 0 8px 0', fontSize: '1.2em' }}>
                {product.name}
            </h3>
            <p style={{
                fontSize: '1.1em',
                fontWeight: 'bold',
                color: '#2c5530',
                margin: '8px 0'
            }}>
                R$ {product.price}
            </p>

        </div>
    );
}



export function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Função para lidar com a criação de um novo produto

    const handleNewProduct = (newProduct: Product) => {
        setProducts([...products, newProduct])
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                console.log('Iniciando busca de produtos...');
                const response = await fetch('http://localhost:3000/api/v1/products');

                console.log('Response status:', response.status);
                console.log('Response ok:', response.ok);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log('Dados recebidos da API:', data);

                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
                setError(error instanceof Error ? error.message : 'Erro desconhecido');
                setLoading(false);

                // Dados de fallback para teste
                const fallbackProducts: Product[] = [
                    { id: 1, name: 'Produto Teste 1', price: 29.99 },
                    { id: 2, name: 'Produto Teste 2', price: 49.99 },
                    { id: 3, name: 'Produto Teste 3', price: 19.99 }
                ];
                setProducts(fallbackProducts);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Carregando produtos...</div>;
    }

    return (
        <div>
            <h1>Welcome to the E-commerce App</h1>
            <p>This is the home page.</p>

            {error && (
                <div style={{ color: 'red', marginBottom: '16px' }}>
                    Erro: {error}
                </div>
            )}

            <h2>Produtos ({products.length} encontrados)</h2>
            {products.length === 0 ? (
                <p>Nenhum produto encontrado.</p>
            ) : (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}

            <ProductForm onProductCreated={handleNewProduct} />
        </div>
    );
}