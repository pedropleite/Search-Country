import styled from 'styled-components';

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    li {
        color: #575757;
        padding: 5px 36px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.1s ease-in-out;
        font-family: sans-serif;
    }
    li:hover {
        border-bottom: 2px solid #000;
    }
    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #0d2538;
        position: fixed;
        transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        li {
            color: #fff;
        }
    }
`;

export { Ul };
