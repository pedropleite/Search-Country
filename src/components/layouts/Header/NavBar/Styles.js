import styled from 'styled-components';
import BoldFont from '../../../../assets/fonts/THEBOLDFONT.ttf';

const Nav = styled.nav`
    width: 100%;
    height: 5rem;
    border-bottom: 2px solid #f1f1f1;
    padding: 0 30px;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    .logo {
        padding: 15px 0;
    }
`;

const Logo = styled.div`
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

    div span:nth-of-type(1) {
        color: #ff0000;
    }
    div span:nth-of-type(2) {
        color: #ffc000;
    }
    div span:nth-of-type(3) {
        color: #fffc00;
    }
    div span:nth-of-type(4) {
        color: #00ffff;
    }
    div span:nth-of-type(5) {
        color: #7cfc00;
    }
`;

export { Nav, Logo };
