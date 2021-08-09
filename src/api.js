

const api_key = "e8d4674bafe14d95b10e48fc039f0034";

// base url
const base_url = "https://api.rawg.io/api/"

//get date

const getCurrentMonth = () => {
    const month = new Date().getMonth() +1;
    if(month < 10)
    return `0${month}`;
    else
    return month;
};
const getCurrentDate = () => {
    const day = new Date().getDate();
    if(day < 10)
    return `0${day}`;
    else
    return day;
};
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDate();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1 }-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1 }-${currentMonth}-${currentDay}`;


const popular_games = `games?key=${api_key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${api_key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?key=${api_key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;
export const searchGameURL = (game_name) => `${base_url}games?key=${api_key}&search=${game_name}&page_size=9`;

//Game details
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}.json?&key=${api_key}`

export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots?&.json?&key=${api_key}`