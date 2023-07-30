import React from 'react'
import { useState } from 'react';
const RegisterViewModel = () => {
    const [values, setValues] = useState({
        name: '',
        lastname: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    // ESTE METODO NOS PERMITE CAMBIAR EL VALOR DE ESTOS CAMPOS CADA VEZ QUE EL USUARIO LO INGRESE
    const onChange = (property: string, value: any) => {
        // ES EQUIVALENTE A values.email values.oassword 
        setValues( {...values, [property]: value} );
    }

    // CLICK BOTON
    const register = () => {
        console.log(JSON.stringify(values));
        
    }
    // RETORNAMOS UN OBJETO
    return {
        ...values,
        onChange,
        register
    }
}

export default RegisterViewModel;

