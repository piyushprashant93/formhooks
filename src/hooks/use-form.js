import  { useState } from "react"


const useForm = (initialvalue={}) => {  
    const [value, setValue] = useState(initialvalue)

   
    /**
     *  set input values to the state
     * @param {*} e 
     *    
     * */
    const handleChange = e => {
        e.persist();
        setValue({...value,[e.target.name]:e.target.value})
    }
    const handleSelect = key => e => {
        setValue({...value,[key]:e})
    }
    /**
     * 
     * @param {*} submittingFn 
     * @returns values
     */
    const handleSubmit = submittingFn => (e, formData, inputs) => {
  
        e.preventDefault()
        submittingFn(value)
    }
    return [handleChange,handleSubmit,value, handleSelect]
}

export default useForm