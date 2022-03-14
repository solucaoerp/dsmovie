// REACT_APP_BACKEND_URL -> variável de ambiente para uso no Netlify
// caso contrário (??) use LOCALHOST
export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8082";