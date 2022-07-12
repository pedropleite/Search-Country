import { AnimationContainer, LoadingContainer, SpanCont } from './styles';

const loadingContainerVariants = {
    start: {
        transition: {
            staggerChildren: 0.1,
        },
    },
    end: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const loadingCircleVariants = {
    start: {
        y: '0%',
    },
    end: {
        y: '100%',
    },
};

const loadingCircleTransition = {
    duration: 0.5,
    yoyo: Infinity,
    ease: 'easeInOut',
};

export const LoadingScreen = () => {
    return (
        <AnimationContainer>
            <LoadingContainer variants={loadingContainerVariants} initial={'start'} animate={'end'}>
                <SpanCont variants={loadingCircleVariants} transition={loadingCircleTransition} />
                <SpanCont variants={loadingCircleVariants} transition={loadingCircleTransition} />
                <SpanCont variants={loadingCircleVariants} transition={loadingCircleTransition} />
            </LoadingContainer>
        </AnimationContainer>
    );
};
