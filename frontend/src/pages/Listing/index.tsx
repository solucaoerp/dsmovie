import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";

export default function Listing() {

    const [pageNumber, setPageNumber] = useState(0);

    // save the page fetched in the request
    const [page, setPage] = useState<MoviePage>(
        {
            content: [],
            last: true,         // default value
            totalPages: 0,      // default value
            totalElements: 0,   // default value
            size: 12,           // default value
            number: 0,          // default value
            first: true,        // default value
            numberOfElements: 0,// default value
            empty: true         // default value
        }
    );

    // CORRECT! controlled execution of the request
    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`)
            .then(response => {
                const data = response.data as MoviePage;
                //console.log(response.data); // to check debug on browser
                setPageNumber(data.number);   // setPageNumber used only to not generate warning
                setPage(data);                // saves the page returned in the request
            });
    }, [pageNumber]);                         // the second parameter of useEffect, depends on pageNumber

    return (
        <>
            <Pagination />
            <div className="container">
                <div className="row">

                    {page.content.map(movie => (
                        <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard movie={movie} />
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
}