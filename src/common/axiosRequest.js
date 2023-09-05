import axios from 'axios'


const axiosConfig = {
    baseURL: process.env.REACT_APP_BASE_URL,
};
const axiosInstance = axios.create(axiosConfig);

export const getSearchResults = async (query, page) => {
    try {
        let res = await axiosInstance.get(`/?apikey=${process.env.REACT_APP_API_KEY}&s=${query}&page=${page}`)
        return res.data;
    } catch (error) {
        console.log(error)
    }

}
export const getMovieById = async (imdbId) => {
    try {
        let res = await axiosInstance.get(`/?apikey=${process.env.REACT_APP_API_KEY}&i=${imdbId}`)
        return res.data;
    } catch (error) {
        console.log(error)
    }

}