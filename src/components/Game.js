import React from 'react';
import { Link } from 'react-router-dom';
//Styling animation
import styled from 'styled-components';
import { motion} from 'framer-motion';
import { popUp } from '../animation';
//Redux
import {loadDetails} from '../actions/detailAction'
import { useDispatch } from 'react-redux';
import { smallImage } from '../util';

const Game = ({name, released, background, id}) =>  {

    const stringPathId = id.toString();

    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = "hidden";
        dispatch(loadDetails(id));
        
    }
    

    return (
        <StyledGame variants = {popUp} initial = "hidden" animate = "show" layoutId = {stringPathId} onClick = {loadDetailHandler}>
           <Link to = {`/game/${id}`}>
            <motion.h3 layoutId = {`title ${stringPathId}`}>{name}</motion.h3>
            <p>{released}</p>
            <motion.img layoutId = {`image ${stringPathId}`} src={smallImage(background, 640)} alt={name} />
            </Link>
        </StyledGame>
    );
};

const StyledGame = styled(motion.div)`
min-height: 30vh;
box-shadow: 0px 4px 20px rgba(0,0,0,0.2);
text-align: center;
border-radius: 1rem;
cursor: pointer;
overflow:hidden ;

img{
    width: 100%;
    height: 30vh;
    object-fit: cover;
}
`

export default Game;