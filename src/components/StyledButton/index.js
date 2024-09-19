import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
    background: red;
    width: 100%;
    height: 30px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
    background-color:green;
}
`
export default StyledButton;