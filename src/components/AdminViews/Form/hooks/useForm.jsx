import { useEffect, useState } from 'react';

//This hook was extracted from internet

export const useForm = ( initialForm = {}) => {
  
    const [ formState, setFormState ] = useState( initialForm ); // I'm using useState hook here to set the initial value
    const [ formValidation ] = useState({}); // In this case i'm not going to use this validations

    useEffect(() => {
        setFormState( initialForm );
         //We update the inital form everytime it updates
    }, [initialForm])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({  //Everytime that the entry changes it sets again with the proper values.
            ...formState,
            [ name ]: value,
        });
    }

    const onResetForm = () => {
        setFormState( initialForm ); // Reseting the form to the initial State
    }


    //Functions and variables exporting

    return {
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
    }
}