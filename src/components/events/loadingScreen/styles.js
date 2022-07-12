import styled from 'styled-components';
import { motion } from 'framer-motion';

const AnimationContainer = styled.div`
    background-color: #fff;
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LoadingContainer = styled(motion.div)`
    width: 6rem;
    height: 6rem;
    display: flex;
    justify-content: space-around;
`;

const SpanCont = styled(motion.span)`
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background-color: #000;
    border-radius: 50%;
`;

export { AnimationContainer, LoadingContainer, SpanCont };
