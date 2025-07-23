import { useState } from "react"
import { initialStore } from "../store"
import storeReducer from "../store"

export const crearAgenda = async () => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/JoseDiez", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ slug: "JoseDiez" })
    });

    if (response.status === 400) {
        console.warn("La agenda ya existia");
    } else {
        console.log("Agenda creada:", response.status);
    }
};


export const crearContacto = async (newContacto, dispatch,navigate) => {
    console.log("Nuevo contacto:", newContacto);
    const response = await fetch("https://playground.4geeks.com/contact/agendas/JoseDiez/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newContacto)
    })
    const data = await response.json()
    console.log(data)
    dispatch({ type: "add_contact", payload: data })
   navigate("/Contacts")
}

export const traerContactos = async (dispatch) => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/JoseDiez/contacts", {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    });
    console.log(response)
    const data = await response.json();
    console.log(data)

    dispatch({
        type: 'set_contacto',
        payload: data.contacts
    });
}

export const borrarContacto = async (id, dispatch) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/JoseDiez/contacts/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
    })
    console.log(response)
    dispatch({
        type: 'delete_contacto',
        payload: id
    })
    traerContactos(dispatch)
}

export const editContact = async (id, contacto,navigate) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/JoseDiez/contacts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contacto),
    })



    console.log(response)
    navigate("/Contacts")
}
