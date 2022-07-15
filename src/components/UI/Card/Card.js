import { CardContainer } from './styles';

export const Card = (props) => {
    const baseURL = `https://flagcdn.com/w320/${props.country.cca2.toLowerCase()}.png`;

    return (
        <CardContainer onClick={() => props.handleModal(props.country)}>
            <img src={baseURL} alt={props.country.name.common} />
            <span>{props.country.name.common}</span>
        </CardContainer>
    );
};
