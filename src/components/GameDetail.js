import React from 'react';

//Styling animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

//redux
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {smallImage} from '../util';
//images
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
import nintendo from '../img/nintendo.svg';
import playstation from '../img/playstation.svg';
import xbox from '../img/xbox.svg';
import steam from '../img/steam.svg';
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';

const GameDetail = ({pathId}) => {

    const history = useHistory();

    const exitDetailHandler = (e) => {
        const element = e.target;
        if(element.classList.contains("shadow")){
            document.body.style.overflow = "auto";
            history.push("/");
        }
    }
    //Get platform images
    const getPlatform = (platform) => {
        switch (platform) {
            case "PlayStation 4":
                return playstation;
            case "Xbox One":
                return xbox;
            case "PC":
                return steam;
            case "Nintendo Switch":
                return nintendo;
            case "iOS":
                return apple;
            default:
                return gamepad;                    
        }

    }
    //Get stars
    const getStars = () => {
        const stars = [];
        const rating = Math.floor(game.rating);
        for(let i = 1;i <= 5;i++ ){
            if(i <= rating){
                stars.push(<img key = {i} alt = "star" src = {starFull}></img>);
            } else {
                stars.push(<img key = {i} alt = "star" src = {starEmpty}></img>);
            }
        }
        return stars;
    }

    const {screen, game, isLoading} = useSelector((state) => state.detail);
    return (
        <>
        {!isLoading &&(
        <CardShadow className = "shadow" onClick={exitDetailHandler}>
            <Detail layoutId = {pathId}>
                <Stats>
                    <div className="rating">
                        <motion.h3 layoutId = {`title ${pathId}`}>{game.name}</motion.h3>
                        <p>Rating: {game.rating}</p>
                        {getStars()}
                    </div>
                    <Info>
                        <h3>Platforms</h3>
                        <Platforms>
                            {game.platforms && game.platforms.map((data) =>(
                                <img key = {data.platform.id} src = {getPlatform(data.platform.name)} alt = "platforms"></img>
                            ))}
                        </Platforms>
                    </Info>
                </Stats>
                <Media>
                    <motion.img layoutId = {`image ${pathId}`} src={smallImage(game.background_image, 1280)} alt="Game background" />
                </Media>
                <Description>
                    <p>{game.description_raw}</p>
                </Description>
                <div className="gallery">
                    {screen.results && screen.results.map((screen) => (
                        <img key = {screen.id} src={smallImage(screen.image, 1280)} alt="Game screenshot" />
                    ))}
                </div>
            </Detail>
        </CardShadow>
        )}
        </>
    );
};

const CardShadow = styled(motion.div)`

    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 111;
    &::-webkit-scrollbar{
        width:0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background: #333;
    }
    &::-webkit-scrollbar-track{
        background: white;
    }

   

`

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    img{
        width: 100%;
    }
    @media(max-width:769px){
        padding:.5rem .5rem;
        top:10%;
    }
`

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        width: 2rem;
        height: 2rem;
        display: inline;

        @media(max-width:769px){
            width: 1rem;
            height: 1rem;
        }
    }
`
const Info = styled(motion.div)`
    text-align:center;
`
const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img{
        margin-left: 3rem;

        @media(max-width:769px){
            margin-left: 1rem;
        }
    }
`
const Media = styled(motion.div)`
margin-top: 5rem;
img{
    width: 100%;
   
}
@media(max-width:769px){
    margin-top:2rem;
}
`
const Description = styled(motion.div)`
    margin: 5rem 0rem;
`

export default GameDetail;