import { styled, keyframes } from 'styled-components';
import { mainBackground, textColor } from '../../../common/colors';


const topLineCross = keyframes`0% {
    transform: translateY(-10px);
}
50% {
        transform: translateY(0px);
}
100% {
    transform: translateY(0px) rotate(45deg);
}`;

const bottomLineCross = keyframes`0% {
    transform: translateY(10px)
  }
  50% {
    transform: translateY(0px)
  }
  100% {
    transform: translateY(0px) rotate(-45deg)
  }`

const topLineBurger = keyframes`
  0% {
    transform: translateY(0px) rotate(45deg)
  }
  50% {
    transform: rotate(0deg)
  }
  100% {
    transform: translateY(-10px) rotate(0deg)
  }`

const bottomLineBurger = keyframes`0% {
    transform: translateY(0px) rotate(-45deg)
  }
  50% {
    transform: rotate(0deg)
  }
  100% {
    transform: translateY(8px) rotate(0deg)
  }`

export const HeaderSidebarContainer = styled('div')`
    position: relative;
    display: none;
    @media (max-width: 800px) {
        display: block;
    }
    .menu-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        .burgermenu {
            border: none;
            background: none;
            width: 35px;
            height: 45px;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -25px;
            padding: 0;
            opacity: 0.5;
            transition: opacity 0.5s ease;
            outline: none;
            &:hover {
                opacity: 1
            }
            span {
                display: block;
                width: 100%;
                height: 1px;
                position: absolute;
                top: 0;
                left: 0;
                border-top: 2px solid ${textColor};
                transform: translateY(22px);
                transition: transform 0.5s ease, border-color 0.5s ease 0.3s;
                &:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: ${textColor};
                    transform: translateY(-10px);
                    animation-name: ${topLineBurger};
                    animation-duration: 0.6s;
                    animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1.000);
                    animation-fill-mode: forwards;
                }
                &:after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: ${textColor};
                    transform: translateY(8px);
                    animation-name: ${bottomLineBurger};
                    animation-duration: 0.6s;
                    animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1.000);
                    animation-fill-mode: forwards;
                }
            }
            &.opened {
                span {
                    border-color: transparent;
                    transition: border-color 0.3s ease;
                    &:before {
                        animation-name: ${topLineCross};
                        animation-duration: 0.6s;
                        animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1.000);
                        animation-fill-mode: forwards;
                    }
                    &:after {
                        animation-name: ${bottomLineCross};
                        animation-duration: 0.6s;
                        animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1.000);
                        animation-fill-mode: forwards;
                    }
                }
            }
        }
    }
`;

export const SidebarMenu = styled('div')``