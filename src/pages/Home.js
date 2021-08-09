import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux';
import {loadGames} from '../actions/gamesAction';

//Styling animation
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { fadeIn } from '../animation';
//Components
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';

const Home = () => {

    //get current location
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];

    //Fetch games
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(loadGames());
      
    },[dispatch]);
    //Get data from API
    const {popular, newGames, upComing, searched} = useSelector((state) => state.games);
    

    return (
        <GameList variants = {fadeIn} initial = "hidden" animate = "show">
            <AnimateSharedLayout>
            <AnimatePresence>
            { pathId &&  <GameDetail pathId = {pathId}/>}
            </AnimatePresence>
            <h1>Home</h1>
            {searched.length ? (
                <div className="searched">
                <Games>
                {searched.map((game) => (
                    <Game name = {game.name} released = {game.released} id = {game.id} background = {game.background_image} key = {game.id}/>
                ))}
            </Games>
                </div>
            ) : ""}
                
                
                <h2>Upcoming games</h2>
                <Games>
                {upComing.map((game) => (
                    <Game name = {game.name} released = {game.released} id = {game.id} background = {game.background_image} key = {game.id}/>
                ))}
            </Games>
                <h2>Popular games</h2>
                <Games>
                {popular.map((game) => (
                    <Game name = {game.name} released = {game.released} id = {game.id} background = {game.background_image} key = {game.id}/>
                ))}
            </Games>
                <h2>New games</h2>
                <Games>
                {newGames.map((game) => (
                    <Game name = {game.name} released = {game.released} id = {game.id} background = {game.background_image} key = {game.id}/>
                ))}
            </Games>
            </AnimateSharedLayout>
        </GameList>
    );
};

const GameList = styled(motion.div)`
 padding: 0rem 5rem;
 h2{
     padding: 5rem 0rem;
 }
 @media(max-width: 768px) {
     padding: 0rem 2rem;
 }
`
const Games = styled(motion.div)`
min-height: 80vh;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
grid-column-gap: 2rem;
grid-row-gap: 4rem;
`
export default Home;

