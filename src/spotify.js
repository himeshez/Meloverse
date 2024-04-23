import axios from 'axios';

const authEndpoint ="https://accounts.spotify.com/authorize?";
// const clientId=  "38904d335d514f1a9c47b15bbff17163";
const clientId=  "a7219b3ad7cc4fa2a55e3d6793ebc208";

const redirectUri="http://localhost:3000";
const scopes =["user-library-read","playlist-read-private" ]
// these scope values can be referred from the Spotify API documentation

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
  
const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
    // this will save token as a permanent header with every call to api client
  });
};

export default apiClient;