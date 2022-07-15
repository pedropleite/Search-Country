import { Container, ContainerModal, HeaderModal, InformationsModal } from './styles';

export const Modal = (props) => {
    const baseURL = `https://flagcdn.com/w320/${props.country.cca2.toLowerCase()}.png`;

    const closeModal = () => {
        props.handleModal();
    };

    return (
        <Container>
            <ContainerModal>
                <HeaderModal>
                    <h1>{props.country.name.common}</h1>
                    <span onClick={closeModal}>X</span>
                </HeaderModal>
                <InformationsModal>
                    <img src={baseURL} alt="flag" />
                    <div>
                        <span>Capital: {props.country.capital[0]}</span>
                        <span>Continent: {props.country.continents[0]}</span>
                        <span>Population: {props.country.population}.</span>
                    </div>
                </InformationsModal>
            </ContainerModal>
        </Container>
    );
};
