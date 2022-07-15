import styled from 'styled-components';

const CardContainer = styled.div`
    cursor: pointer;
    width: 28%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem 0;
    background: #f0f0f0;
    padding: 1rem;
    border-radius: 15px;
    -webkit-box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.22);
    box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.22);
    text-decoration: none;
    gap: 1rem;

    img {
        height: 10rem;
        width: 100%;
    }

    span {
        font-size: 1.2rem;
        font-weight: 600;
    }
`;

export { CardContainer };
