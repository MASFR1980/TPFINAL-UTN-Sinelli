const ProductDetailModal = ({ product, onClose }) => {
    if (!product) return null;

    return (
        <div className="modal is-active">
            <div className="modal-background" onClick={onClose}></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{product.name}</p>
                    <button className="delete" onClick={onClose}></button>
                </header>
                <section className="modal-card-body">
                    <p><strong>Descripción:</strong> {product.description}</p>
                    <p><strong>SKU:</strong> {product.sku}</p>
                    <p><strong>Precio:</strong> {product.price}</p>
                </section>
                <footer className="modal-card-foot is-flex is-justify-content-center">
                    <button className="button" onClick={onClose}>Cerrar</button>
                </footer>
            </div>
        </div>
    );
};

export { ProductDetailModal };
