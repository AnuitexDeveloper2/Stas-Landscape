import { styled, keyframes } from 'styled-components';
import { mainBackground, textColor } from '../../common/colors';

export const HeaderInfoSection = styled('div')`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: ${mainBackground};
    .home-header-short-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        .short-info-item {
            font-family: 'Proxima Nova';
            padding: 0 40px;
            .logo {
                width: 100px;
                @media(max-width: 480px) {
                  width: 80px;
          }
            }
            .phone-section {
                font-size: 21px;
                font-weight: 400;
                line-height: 26px;
                color: #00273b;
                display: flex;
                @media(max-width: 400px) {
                  font-size: 16px;
                  img {
                    width: 20px;
                  }
          }
            }
            @media(max-width: 480px) {
              padding: 0 20px;
          }
          @media(max-width: 400px) {
              padding: 0 10px;
          }
        }
    }
    .empty {
        width: 100%;
    }
`;

const hideToLeft = keyframes`0% {
    width: 0;
  }

  100% {
    width: 100%;
  }`

const hideToRight = keyframes`
   0% {
    width: 100%;
  }

  100% {
    width: 0;
  }
  `

export const SidebarMenu = styled('div')`
    background: ${mainBackground};
    box-shadow: 0 2px 4px rgba(0, 0, 0, .1);
    height: 100vh;
    padding-top: 60px;
    position: fixed;
    transition: width ease .6s;
    width: 0;
    z-index: 100;
    overflow: hidden;
    top: 0;
    &.visible {
    width: 100%;
    animation-duration: 0.5s;
    animation-name: ${hideToLeft};
  }
`

export const SidebarMenuContent = styled('div')`
  position: relative;
  .logo {
    width: 100px;
    position: absolute;
    top: -74px;
    left: 40px;
  }
`

export const MenuList = styled('ul')`
  padding: 40px 100px;
  margin-left: 60px;
  color: ${textColor};
  li {
    font-size: 20px;
    line-height: 24px;
    white-space: nowrap;
    padding-bottom: 20px;
    font-family: "Proxima Nova Bold";
    a {
      color: ${textColor}
    }
  }
`

export const SocialIcons = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  .socials {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px
  }
`