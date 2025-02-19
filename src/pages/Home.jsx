import { useState, useEffect } from "react";
import "bulma/css/bulma.min.css";
import { ProductDetailModal } from "../components/ProductDetailModal"; // Importamos el nuevo componente
import { db } from "../config/firebase"; // Asegúrate de que la ruta sea la correcta
import { collection, getDocs } from "firebase/firestore"; // Importar las funciones de Firestore

const Home = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [products, setProducts] = useState([]);  // Estado para almacenar los productos

    // Obtener productos desde Firestore cuando el componente se monta
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "products"));
                const productsList = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),  // Desestructurar los datos del producto
                }));
                setProducts(productsList);  // Establecer los productos en el estado
            } catch (error) {
                console.error("Error obteniendo los productos: ", error);
            }
        };

        fetchProducts();  // Llamar a la función para obtener productos
    }, []);  // El array vacío asegura que se ejecute solo una vez al montar el componente

    return (
        <div>
            {/* Hero Section */}
            <div className="hero is-info is-bold has-text-centered p-3" style={{ borderRadius: '15px', overflow: 'hidden'}}>
                <div className="container">
                    <h1 className="title is-3 has-text-white">Bienvenido a nuestra tienda online</h1>
                </div>
            </div>

            {/* Products Section */}
            <div className="container mt-6">
                <div className="columns is-multiline is-centered">
                    {products.map(product => (
                        <div key={product.id} className="column is-one-quarter">
                            <div className="card has-background-light has-shadow is-rounded">
                                <div className="card-content has-text-centered">
                                    <p className="title is-5 has-text-dark">{product.name}</p>
                                    <p className="subtitle is-6 has-text-grey">{product.description}</p>
                                    <p className="has-text-weight-semibold has-text-info">SKU: {product.sku}</p>
                                    <p className="has-text-success has-text-weight-bold mt-3">{product.price}</p>
                                    <button 
                                        className="button is-primary is-outlined mt-4"
                                        onClick={() => setSelectedProduct(product)}
                                    >
                                        Ver detalles
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Product Detail Modal */}
            <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        </div>
    );
};

export { Home };
