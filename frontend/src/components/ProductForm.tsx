import { useState } from 'react'
import axios from 'axios'

interface Product {
    id: number
    name: string
    price: number
}

interface ProductFormData {
    name: string
    price: string
}

interface ProductFormProps {
    onProductCreated: (product: Product) => void
}

const ProductForm: React.FC<ProductFormProps> = ({ onProductCreated }) => {
    const [formData, setFormData] = useState<ProductFormData>({
        name: '',
        price: '',
    })
    const [errors, setErrors] = useState<string[]>([])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await axios.post<Product>(
                'http://localhost:3000/api/v1/products',
                { product: formData }
            )
            onProductCreated(response.data)
            setFormData({ name: '', price: '' })
            setErrors([])
        } catch (error: any) {
            if (error.response?.data?.errors) {
                setErrors(error.response.data.errors)
            } else {
                setErrors(['Erro ao cadastrar produto'])
            }
        }
    }

    return (
        <div style={{
            maxWidth: '500px',
            margin: '20px auto',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '8px'
        }}>
            <h2>Cadastrar Novo Produto</h2>

            {errors.length > 0 && (
                <div style={{ color: 'red', marginBottom: '15px' }}>
                    {errors.map((err, index) => (
                        <p key={index}>{err}</p>
                    ))}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px' }}
                        required
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>Preço:</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        step="0.01"
                        style={{ width: '100%', padding: '8px' }}
                        required
                    />
                </div>



                <button
                    type="submit"
                    style={{
                        padding: '10px 15px',
                        background: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Cadastrar
                </button>
            </form>
        </div>
    )
}

export default ProductForm