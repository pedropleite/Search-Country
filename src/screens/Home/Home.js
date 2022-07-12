import { api } from '../../services/api';
import { Card } from '../../components/UI/Card/Card';
import { useEffect, useState } from 'react';
import { Main, ContainerCountries, SearchBar, Description } from './styles';
import { LoadingScreen } from '../../components/events/loadingScreen/LoadingScreen';

export const Home = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [loading, setLoading] = useState(true);

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
            <SearchBar type="text" placeholder="Search..." onChange={handleSearch} />
            <Description>
                {filteredCountries.length < 1 ? countries.length : filteredCountries.length} countries were found.
            </Description>
            {loading && <LoadingScreen />}

            <ContainerCountries onLoad={loadedImage}>
                {filteredCountries.length < 1 &&
                    countries.map((country) => {
                        return <Card key={country.name.common} country={country} />;
                    })}
                {filteredCountries.length > 0 &&
                    filteredCountries.map((country) => {
                        return <Card key={country.name.common} country={country} />;
                    })}
            </ContainerCountries>
        </Main>
    );
};
