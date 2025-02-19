import React, { useState, useEffect } from "react";
import { db } from "../config/firebase"; // Asegúrate de importar correctamente tu configuración de Firebase
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot } from "firebase/firestore";

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({ name: "", description: "", sku: "", price: "" });

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "products"), (snapshot) => {
            const productsWithIds = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProducts(productsWithIds);
        });
        return () => unsubscribe();
    }, []);
    const handleClearForm = () => {
        setForm({ name: "", description: "", sku: "", price: "" })}
    
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.id) {
            // Si hay un ID, actualiza el producto existente
            await updateDoc(doc(db, "products", form.id), form);
        } else {
            // Si no hay un ID, agrega un nuevo producto
            await addDoc(collection(db, "products"), form);
        }
        // Reinicia el formulario después de enviar
        handleClearForm()
    };

    const handleEdit = (product) => {
        // Establece el estado del formulario con los datos del producto a editar
        setForm(product);
    };

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "products", id));
    };

    return (
        <div className="container">
            <h1 className="title">Gestión de Productos</h1>
            
            <form onSubmit={handleSubmit} className="box">
                <div className="field">
                    <label className="label">Nombre</label>
                    <input className="input" type="text" name="name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="field">
                    <label className="label">Descripción</label>
                    <input className="input" type="text" name="description" value={form.description} onChange={handleChange} required />
                </div>
                <div className="field">
                    <label className="label">SKU</label>
                    <input className="input" type="text" name="sku" value={form.sku} onChange={handleChange} required />
                </div>
                <div className="field">
                    <label className="label">Precio</label>
                    <input className="input" type="text" name="price" value={form.price} onChange={handleChange} required />
                </div>
                <button className="button is-primary" type="submit">{form.id ? "Actualizar" : "Agregar"}</button>
                { form.id && <button className="button is-primary ml-3" type="button" onClick={handleClearForm}>Cancelar</button>
                }
            </form>

            <table className="table is-fullwidth">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>SKU</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.sku}</td>
                            <td>{product.price}</td>
                            <td>
                                <button className="button is-small is-info" onClick={() => handleEdit(product)}>Editar</button>
                                <button className="button is-small is-danger ml-2" onClick={() => handleDelete(product.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export { Dashboard };