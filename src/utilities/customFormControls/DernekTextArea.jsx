import React from 'react'
import { useField } from 'formik'
import { FormField, Label } from 'semantic-ui-react'

export default function DernekTextInput({...props}){
    
    const [field, meta] = useField(props)
    
    return (
        <FormField error={meta.touched && !!meta.error}>
            <textarea {...field} {...props}/>
            {meta.touched && !!meta.error ? (
                <Label pointing basic color="violet" content={meta.error}></Label>
            ):null}
        </FormField>
    )
}