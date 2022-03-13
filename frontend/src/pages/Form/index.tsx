import { useParams } from 'react-router-dom';
import FormCard from 'components/FormCard'

function Form() {
    const param = useParams();
    return (
        <FormCard movieId={`${param.movieId}`}/>
    );
}

export default Form;