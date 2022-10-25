import { Formulario, TableContactos } from "./components";

export interface ContactosInterface { };

const contactos = [
    {
        id: 1,
        nombre: "Juan",
        numero: "123456789"
    },
    {
        id: 2,
        nombre: "Pedro",
        numero: "987654321"
    },
    {
        id: 3,
        nombre: "Maria",
        numero: "123456789"
    }
];

const Contactos = ({ }: ContactosInterface) => {
    return (
        <div className="container mt-3">
            <Formulario />
            <TableContactos contactos={contactos} />
        </div>
    )
};

export default Contactos;
