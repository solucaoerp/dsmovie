// process.env.REACT_APP_BACKEND_URL -> environment variable for use in Netlify
// otherwise (??) we use LOCALHOST
export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8082";