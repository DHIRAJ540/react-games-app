import React, {useState} from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn } from '../animation';
import logo from '../img/logo.svg';
//redux routes
import { fetchSearched } from '../actions/gamesAction';
import { useDispatch } from 'react-redux';

const Nav = () => {

    const [textInput,setTextInput] = useState("");
    const dispatch = useDispatch();

    const inputHandler = (e) => {

        setTextInput(e.target.value);
    }
    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(fetchSearched(textInput));
        setTextInput("");
    }
    const clearSearch = () => {
        dispatch({type:"CLEAR_SEARCHED"});
    }

    return (
        <StyledNav variants = {fadeIn} initial = "hidden" animate = "show">
            <Logo onClick = {clearSearch}>
                <img src={logo} alt="logo" />
                <h1>Ignite</h1>
            </Logo>
            <form className="search">
                <input value = {textInput} onChange = {inputHandler} type="text" />
                <button onClick = {submitSearch} type = "submit">Search</button>
            </form>
        </StyledNav>
    );
};

const StyledNav = styled(motion.nav)`
padding: 3re 5rem;
text-align: center;
input{
    width: 30%;
    font-size: 1.2rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0,0,0,0.2);
    font-weight: bold;
}
button{
    font-size: 1.2rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background-color: #ff7676;
    color: white;
}
`

const Logo = styled(motion.div)`
display: flex;
justify-content: center;
padding: 1rem;
cursor:pointer;
`

export default Nav;