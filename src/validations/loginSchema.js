import {object,string} from 'yup'

export const loginSchema = object({
    password:string()
                .required("Password requido")
                .min(8,"Minimo 8 caracteres")
                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,"debe contener may,min y numero"),
    email:string()
            .required("El email es requerido")
            .email("Email no valido"),
    
})