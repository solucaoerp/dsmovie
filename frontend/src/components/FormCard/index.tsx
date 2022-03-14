import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Movie } from 'types/movie';
import { BASE_URL } from 'utils/requests';
import { validateEmail } from 'utils/validate';
import './styles.css';

type Props = {
    movieId: string;
}

export default function FormCard({ movieId }: Props) {

    // redirection
    const navigate = useNavigate();

    const [movie, setMovie] = useState<Movie>();

    // CORRECT! controlled execution of the request
    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${movieId}`)
            .then(response => {
                setMovie(response.data); // Set the answer to State movie
            });
    }, [movieId]);                       // movieId: dependency - otherwise, the request will be made several times (Observer)

    // event: React.FormEvent<HTMLFormElement> = don't submit the form until you do something | because we are using TypeScript
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // prevents the form from being submitted.

        // capturing data from the elements (id) of the form
        const email = (event.target as any).email.value;
        const score = (event.target as any).score.value;

        // testing (show console browser)
        //console.log(email, score);
        if (!validateEmail(email)) {
            return; // if it's not a valid email, stop sending...                
        }

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/scores',
            data: {
                email: email,
                movieId: movieId,
                score: score
            }
        }

        axios(config).then(response => {
            //console.log(response.data);
            navigate("/"); // redirection to home
        });
    }

    return (
        <div className="dsmovie-form-container">
            <img className="dsmovie-movie-card-image" src={movie?.image} alt={movie?.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie?.title}</h3>
                <form className="dsmovie-form" onSubmit={handleSubmit}>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="dsmovie-form-btn-container">

                        <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>

                    </div>
                </form >

                <Link to="/" >
                    <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
                </Link>

            </div >
        </div >
    );
}