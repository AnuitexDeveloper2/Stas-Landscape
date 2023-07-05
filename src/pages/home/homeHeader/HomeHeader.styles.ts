import styled from 'styled-components';
import bg from '../../../assets/images/back.jpg'
export const HomeHeaderContainer = styled('div')`
    height: 100vh;
    background-color: #24211f;
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    width: 100%;
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    z-index: 30;
    @media (max-width: 800px) {
        background-image:linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${bg});
    }
    .home-header-clip {
        width: 50%;
        background: 0 0;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 9;
        .menu-clip-path {
            width: 100%;
            height: 100vh;
            background: #fff;
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%);
            text-align: center;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: end;
            -ms-flex-pack: end;
            justify-content: flex-end;
            @media (max-width: 800px) {
                height: 0;
            }
        }
    }
`;

export const MobileTitle = styled('div')`
    display: none;
      @media (max-width: 800px) {
             height: 0;
            display: flex;
    }
    position: absolute;
    top: 50%;
    justify-content: center;
    color: white;
    text-align: center;
`