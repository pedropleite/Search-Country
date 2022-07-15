import { api } from '../../services/api';
import { Card } from '../../components/UI/Card/Card';
import { useEffect, useState } from 'react';
import { Main, ContainerCountries, SearchBar, Description } from './styles';
import { LoadingScreen } from '../../components/events/loadingScreen/LoadingScreen';
import { Modal } from '../../components/UI/Modal/Modal';

export const Home = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState([]);

    const handleModal = (props) => {
        if (props) {
            setModalContent(props);
        }

        setShowModal((prev) => !prev);
    };

    useEffect(() => {
        api.get('/all')
            .then((res) => {
                const countriesArray = [];
                res.data.map((country) => countriesArray.push(country));
                setCountries(countriesArray);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleSearch = (e) => {
        setFilteredCountries(
            countries.filter((country) => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
        );
    };

    let imagesLoaded = 0;
    const loadedImage = () => {
        imagesLoaded++;
        if (imagesLoaded === countries.length) {
            setLoading(false);
        }
    };

    return (
        <Main>
            {showModal && <Modal country={modalContent} handleModal={handleModal} />}

            {!showModal && <SearchBar type="text" placeholder="Search..." onChange={handleSearch} />}

            {!showModal && (
                <Description>
                    {filteredCountries.length < 1 ? countries.length : filteredCountries.length} countries were found.
                </Description>
            )}
            {loading && <LoadingScreen />}

            {!showModal && (
                <ContainerCountries onLoad={loadedImage}>
                    {filteredCountries.length < 1 &&
                        countries.map((country) => {
                            return <Card handleModal={handleModal} key={country.name.common} country={country} />;
                        })}
                    {filteredCountries.length > 0 &&
                        filteredCountries.map((country) => {
                            return <Card handleModal={handleModal} key={country.name.common} country={country} />;
                        })}
                </ContainerCountries>
            )}
        </Main>
    );
};
