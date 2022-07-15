import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    scroll: none;
`;

const ContainerModal = styled.div`
    width: 50%;
    background-color: #f0f0f0;
    border-radius: 10px;
    -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.22);
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.22);
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 50%;
    }
`;

const HeaderModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1.4px solid rgba(0, 0, 0, 0.15);

    h1 {
        padding: 0 1rem;
    }
    span {
        font-size: 40px;
        font-weight: bold;
        color: #f52727;
        cursor: pointer;
        padding: 0 1rem;
    }
`;

const InformationsModal = styled.div`
    margin: 1rem 0;
    width: 95%;
    display: flex;
    gap: 1rem;

    div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        span {
            font-size: 1.1rem;
            font-weight: 600;
            color: rgba(0, 0, 0, 0.77);
        }
    }
`;

export { Container, ContainerModal, HeaderModal, InformationsModal };
