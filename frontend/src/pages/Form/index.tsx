import FormCard from 'components/FormCard';
import { useParams } from 'react-router-dom';

// send request parameter to FormCard (only)
export default function Form() {

    const params = useParams();

    return (
        <FormCard movieId={`${params.movieId}`} />
    );
}