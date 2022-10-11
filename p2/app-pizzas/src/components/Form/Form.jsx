import React from 'react'

const Form = ({ updateState }) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('submit');

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        // console.log(data);

        const { type, quantity, payment, name, phone, address } = data;

        // clean the form
        // e.target.reset();

        updateState({ type, quantity, payment, name, phone, address });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="type">Tipo de pizza</label>
                <select name="type" id="type">
                    <option value="special">Especial $120</option>
                    <option value="vegie">Vegetariana $150</option>
                </select>
            </div>

            <div>
                <label htmlFor="quantity">Cantidad</label>
                <input type="number" name="quantity" id="quantity" />
            </div>

            <div>
                <label htmlFor="payment">Forma de pagamento</label>
                <select name="payment" id="payment">
                    <option value="credit">Tarjeta de Crédito</option>
                    <option value="paypal">Pago con Paypal</option>
                </select>
            </div>

            <div>
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" id="name" />
            </div>

            <div>
                <label htmlFor="phone">Teléfono</label>
                <input type="text" name="phone" id="phone" />
            </div>

            <div>
                <label htmlFor="address">Dirección</label>
                <input type="text" name="address" id="address" />
            </div>

            <button type="submit">Enviar</button>
        </form>
    );
};

export default Form;