import React, { useEffect,useState } from "react";

import api from "../api";


const ActivateAccount =  () => {
    const [errors, setErrors] = useState('');
    const [sucsess, setSucsess] = useState('');

    useEffect(() => {
        try {
            const response =  api.get(`auth/users/activate-account/${token}`)
            setSucsess(response.data.message);
            console.log(response)


        } catch (error) {
            console.error('There was an error!', error.response.data.message);
            setErrors(error.response.data.message)
        }

    }, []);

    return (

        <>
            {sucsess ? <Paragraph>{sucsess}</Paragraph> : null}
            {errors ? <Paragraph>{errors}</Paragraph> : null}
        </>
    );
};

export default ActivateAccount;