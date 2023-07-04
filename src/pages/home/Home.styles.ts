import styled from "styled-components";

export const HomePageContainer = styled('div')`
  .logo-bg {
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    z-index: -1;
    opacity: 0.1;
    img {
      max-width: inherit;
      height: 100%;
      display: block;
    }
  }
  .home-body-title {
    padding: 200px 0;
    h2 {
      font-family: "Proxima Nova";
      font-weight: 300;
      font-size: 46px;
      line-height: 58px;
      margin: 0;
    }
  }
.our-works-section {
  padding-bottom: 200px;
  h2 {
    font-family: "Proxima Nova";
    font-weight: 300;
    font-size: 46px;
    line-height: 58px;
    margin: 0;
  }
}
`