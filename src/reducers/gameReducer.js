const initState = {
    popular: [],
    newGames: [],
    upComing: [],
    searched: []
}

const gameReducer = (state = initState, action)=>{
    switch(action.type){
        case "FETCH_GAMES":
            return {...state,popular:action.payload.popular,newGames:action.payload.newGames,upComing:action.payload.upComing};
        case "FETCH_SEARCHED":
            return{
                ...state,
                searched: action.payload.searched,
            }    
        case "CLEAR_SEARCHED":
            return {
                ...state,
                searched:[],
            }    
        default: 
            return {...state};
    }
}

export default gameReducer;