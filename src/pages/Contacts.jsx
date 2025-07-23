import { Link } from "react-router-dom";
import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { borrarContacto, traerContactos } from "../services/servicesAPI";

export const Contacts = () => {
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        traerContactos(dispatch);
    }, []);

    return (
        <div className="container">
            <div className="list-group">
                {store.contacto.map((c, index) => (
                    <div className="card mb-4" style={{ maxWidth: "600px", width: "100%" }} key={index}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
                                    className="img-fluid rounded-start"
                                    alt="avatar"
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{c.name}</h5>
                                    <p className="card-text">{c.address}</p>
                                    <p className="card-text">{c.phone}</p>
                                    <p className="card-text">{c.email}</p>
                                </div>
                                <div className="opciones">
                                    <button type="button" className="btn btn-danger mx-2"
                                        onClick={() => borrarContacto(c.id, dispatch)}>
                                        <i className="bi bi-trash3-fill"></i>
                                    </button>

                                    <Link to={`/edit/${c.id}`}>
                                        <button type="button" className="btn btn-warning">
                                            <i className="bi bi-pen-fill"></i>
                                        </button>
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <br />

            <Link to="/">
                <button className="btn btn-primary">Back home</button>
            </Link>
        </div >
    );
};
