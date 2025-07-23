import { useNavigate, useParams } from "react-router-dom";
import { crearAgenda, crearContacto, editContact, traerContactos } from "../services/servicesAPI";
import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import storeReducer from "../store";
import { initialStore } from "../store";


export const EditContact = () => {


    const navigate = useNavigate()


    // const params = useParams()
    //console.log(params)

    const { id } = useParams() // desestrucuturamos params para obetener el ID
    console.log(id)





    const { store, dispatch } = useGlobalReducer();

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

        editContact(id,contacto,navigate)
        // crearContacto(contacto, dispatch);
        //traerContactos(dispatch);
        console.log(contacto)
    }

    useEffect(() => {  // rellena el formulario con los datos de contacto por ID e Index
        if (id) {
            setContacto(store.contacto.filter(contacto => contacto.id == id)[0])
        }
    }, [])
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
                        }}>Guardar cambios</button>

                </div>
            </div>
            <div className="d-flex justify-content-center">

            </div>
        </div >


    );
}
