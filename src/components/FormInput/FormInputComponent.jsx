import React from 'react';
import './FormInput.scss'

const FormInput = ({handleChange,label, ...otherProps}) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} />
        
        { label ? <label className='form-input-label'>{label}</label> : null }
    </div>
)

export default FormInput;