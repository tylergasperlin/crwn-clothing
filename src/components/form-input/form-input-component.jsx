import React from 'react'
import './form-input-styles.scss'

//name type value onchange all get passed to this componeent from signin-component
const FormInput = ({handleChange, label, ...otherProps}) =>{
    console.log(otherProps)

    return(
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...otherProps}></input>
            {label ? (
                //if value is int (user has typed) apply shrink otherwise empty string.
                <label className={`${otherProps.value ? 'shrink' : ''} 
                    form-input-label `}>
                    {label}
                </label>) 
                : null
            }
        </div>

    )


    }

export default FormInput;