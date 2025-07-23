import { number } from "prop-types";
import { Home } from "./pages/Home";

export const initialStore = () => {

    return {
        contacto: []
    }
}

export default function storeReducer(store, action = {}) {
    switch (action.type) {

        case 'set_contacto':
            return {
                ...store,
                contacto: action.payload

                //     dispatch({
                //   type: 'set_contacto',
                // payload: data.contacts
                //     });

            }
        case 'add_contact':
            return {
                ...store,
                contacto: [...store.contacto, action.payload]
            }
        case 'delete_contact':
            return {
                ...store,
                contacto: store.contacto.filter(contacto => contacto.id !== action.payload)
            }
        default:
            return store;
    }
}
