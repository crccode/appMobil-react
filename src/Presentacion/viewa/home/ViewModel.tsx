import React from 'react'
import { useState } from 'react';
const HomeViewModel = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    // property ES DE TIPO STRING value PUEDE SER CUALQUIERA
    const onChange = (property: string, value: any) => {
        // ES EQUIVALENTE A values.email values.oassword 
        setValues( {...values, [property]: value} );
    }
    // RETORNAMOS UN OBJETO
    return {
        ...values,
        onChange
    }
}
export default HomeViewModel;


