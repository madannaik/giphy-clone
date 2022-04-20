/* 
API CONSTANTS
********************************************************************************************
*/
const API_KEY = "qQoFgpOm1cxGhYOX6gB7N1pAMZMIRgfr"


/* 
API ROUTES 
********************************************************************************************
*/

// Trending Gifs
export const trendingURL = ({ offset = 0 }) => `https://api.giphy.com/v1/stickers/trending?api_key=${API_KEY}&limit=50&offset=${offset}&rating=g`

// Search Gifs
export const searchUrl = ({ query, offset = 0 }) => `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=50&offset=${offset}&rating=g&lang=en`;

