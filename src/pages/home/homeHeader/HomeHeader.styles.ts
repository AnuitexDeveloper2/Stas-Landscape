import styled from 'styled-components'
import { mainBackground } from '../../../common/colors'

export const HomeHeaderContainer = styled('div')`
  height: 100vh;
  background-color: #24211f;
  background-image: url(//gardenpark.com.ua/wp-content/themes/gardenpark/css/../img/start-video.jpg);
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
  .home-header-short-info-section {
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
        font-family: "Proxima Nova";
        padding: 0 40px;
        .logo {
          width: 100px;
        }
        .phone-section {
          font-size: 21px;
          font-weight: 400;
          line-height: 26px;
          color: #00273B;
          display: flex;
        }
      }
    }
    .empty {
      width: 100%;
    }
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
    }
  }
  `