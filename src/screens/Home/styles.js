import styled from 'styled-components';
import searchIcon from '../../assets/icons/loupe.png';

const Main = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: sans-serif;
`;

const SearchBar = styled.input`
    margin-top: 2rem;
    width: 50%;
    height: 2.2rem;
    min-width: 300px;
    background: url(${searchIcon}) top left no-repeat;
    background-size: 20px;
    background-position: 0.5rem center;
    padding-left: 35px;
    font-size: 1.2rem;
    border-radius: 10px;
`;

const Description = styled.span`
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 1rem;
    color: rgba(0, 0, 0, 0.65);
`;

const ContainerCountries = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export { Main, ContainerCountries, SearchBar, Description };
