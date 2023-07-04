import styled from 'styled-components';

export const HomePageContainer = styled('div')`
    .logo-bg {
        position: fixed;
        right: 0;
        top: 0;
        height: 100vh;
        z-index: -1;
        opacity: 0.1;
        @media (max-width: 800px) {
            right: -100px;
        }
        img {
            max-width: inherit;
            height: 100%;
            display: block;
        }
    }
    .our-works-section {
        padding-bottom: 200px;
        @media (max-width: 800px) {
            padding-bottom: 100px;
        }
        h2 {
            font-family: 'Proxima Nova';
            font-weight: 300;
            font-size: 46px;
            line-height: 58px;
            margin: 0;
        }
    }
`;

export const HomeBodyTitle = styled('div')`
    padding: 200px 0;
    h2 {
        font-family: 'Proxima Nova';
        font-weight: 300;
        font-size: 46px;
        line-height: 58px;
        margin: 0;
    }
    @media (max-width: 800px) {
        padding: 50px 0;
    }
`;
