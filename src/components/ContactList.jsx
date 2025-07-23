import { crearAgenda,crearContacto, traerContactos } from "../services/servicesAPI";
import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";

export const ContactList = ()=> {

const  {dispatch} = useGlobalReducer();

const navigate = useNavigate()

const [contacto, setContacto] = useState({
        name: "",
        phone: "",
        address: "",
        email: ""
    })

    const handleNombreChange = (e) => {
        setContacto({ ...contacto, name: e.target.value });
    };

    const handleNumeroChange = (e) => {
        setContacto({ ...contacto, phone: e.target.value });
    };

    const handleDireccionChange = (e) => {
        setContacto({ ...contacto, address: e.target.value });
    };

    const handleCorreoChange = (e) => {
        setContacto({ ...contacto, email: e.target.value });
    };

    const handleSubmit = () => {
        console.log("Boton apretado")
        if (!contacto.name || !contacto.phone || !contacto.address || !contacto.email) {
            alert("Completa todos los campos");
            return;
        }
        
        crearContacto(contacto, dispatch,navigate);
        //traerContactos(dispatch);
        console.log(contacto)
    }
    return (

		<div className="container-fluid">

			<div className="d-flex flex-column align-items-center mt-4">
				<div className="card mb-4" style={{ maxWidth: "700px", width: "100%" }} >

					<input className="form-control m-2" type="text" placeholder="Nombre" value={contacto.name} onChange={handleNombreChange} />
					<input className="form-control m-2" type="text" placeholder="numero" value={contacto.phone} onChange={handleNumeroChange} />
					<input className="form-control m-2" type="text" placeholder="direccion" value={contacto.address} onChange={handleDireccionChange} />
					<input className="form-control m-2" type="text" placeholder="Correo" value={contacto.email} onChange={handleCorreoChange} />

					<button className="btn btn-primary"
						onClick={() => {
							handleSubmit();
							setContacto({
								name: "",
								phone: "",
								address: "",
								email: ""
							});
						}}>Guardar</button>

				</div>
			</div>
			<div className="d-flex justify-content-center">

			</div>
		</div >


	);}