import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { crearAgenda } from "../services/servicesAPI.js";
import { crearContacto } from "../services/servicesAPI.js";
import { traerContactos } from "../services/servicesAPI.js";
import { ContactList } from "../components/ContactList.jsx";




export const Home = () => {

	const { store, dispatch } = useGlobalReducer();

	useState(() => {
		crearAgenda()
	}, [])

	return (

		<ContactList />

	)
}
