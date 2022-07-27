import { GET_USER, UPDATE_INFO, DELETE_PROFIL, UPLOAD_PICTURE } from "../actions/user.actions";

const initialState = {};
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER: 
        return action.payload
       case UPLOAD_PICTURE:
            return {
                ... state, //on écrase pas les données déjà existante
                data: action.payload,
            }
            case UPDATE_INFO:
                return {
                    ...state,
                    nom: action.payload.nom,
                    prenom: action.payload.prenom,
                    status:action.payload.status, 
                }
            default:
            return state;
            case DELETE_PROFIL: 
            return action.payload
    }
}