import styled from 'styled-components';
import BoldFont from '../../assets/fonts/THEBOLDFONT.ttf';

const FooterContainer = styled.footer`
    font-family: sans-serif;
    box-sizing: border-box;
    background-color: #fff;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    gap: 1.5rem;
`;

const ContainerImgs = styled.div`
    display: flex;
    gap: 4rem;

    button {
        background-color: transparent;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    button:hover {
        background-color: rgba(76, 76, 76, 0.1);
    }
    img {
        height: 1.9rem;
        padding: 0.7rem;
    }

    @media (max-width: 768px) {
        gap: 2rem;
    }
`;
const Logo = styled.span`
    @font-face {
        font-family: 'OurFont';
        src: url(${BoldFont}) format('woff2');
        font-style: normal;
    }
    padding: 0 40px;
    font-size: 2rem;
    font-weight: 700;
    font-family: OurFont;
    letter-spacing: 0.3rem;
`;

const Contact = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    text-align: center;
    color: rgb(189, 189, 189);
    font-size: 0.9rem;
`;

const Information = styled.div`
    display: flex;
    gap: 2rem;

    span {
        padding: 1rem;
        border-right: 1px solid rgba(255, 0, 0, 0.3);
        border-left: 1px solid rgba(255, 0, 0, 0.3);
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

const Rights = styled.span`
    color: rgb(92, 92, 92);
    margin-bottom: 1rem;
`;

const BtnMap = styled.button`
    position: absolute;
    bottom: 0;
    background-color: rgb(192, 10, 39);
    border: none;
    padding: 1rem 3.3rem;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    color: white;
    font-weight: 700;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;

    img {
        height: 2rem;
    }
`;

export { FooterContainer, ContainerImgs, Logo, Contact, Information, Rights, BtnMap };
