import React from 'react'
import { useState } from 'react';
import { ApiDelivery } from '../../../Data/sources/remote/api/ApiDelivery';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';

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
    const register = async () => {
        // console.log(JSON.stringify(values));
        const { error } = await RegisterAuthUseCase(values as any);
        
    }
    // RETORNAMOS UN OBJETO
    return {
        ...values,
        onChange,
        register
    }
}

export default RegisterViewModel;

