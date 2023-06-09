import { styled } from "styled-components";
import leaf from "../../assets/images/leaf.webp";
import { mainBackground, textColor } from "../../common/colors";

export const ContactsWrapper = styled('div')`
background-color: ${mainBackground};
background-image: url(${leaf}),
    linear-gradient(
      107deg,
      rgba(31, 31, 35, 0.76) 0%,
      rgba(72, 72, 81, 0.04) 88%
    );
  min-height: 358px;
  padding: 40px 50px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 4px solid #f5f6f7;
  height: 100%;
  
  .contact-container {
    padding-top: 100px;
    margin-right: 60px;
    @media(max-width: 920px) {
      margin: 20px;
      padding-top: 40px;
    }
    .description {
      line-height: 1.6em;
      font-size: 24px;
      margin: 24px 10px;
      a {
        color: white;
      }
      @media(max-width: 920px) {
        margin: 24px 0;
      }
    }
    .information {
      background-color: #64a61d;
      padding-top: 15px;
      padding-right: 15px;
      padding-bottom: 0;
      padding-left: 15px;
      .information-inner {
        border-radius: 3px;
        overflow: hidden;
        border-width: 1px;
        border-style: dashed;
        border-color: rgba(255, 255, 255, 0.6);
        padding-top: 35px !important;
        padding-right: 41px !important;
        padding-bottom: 35px !important;
        padding-left: 41px !important;
        margin-bottom: 15px !important;
        .title {
          line-height: 0.8em;
          margin: 15px 10px;
          color: #4e5453;
        }
        .description {
            font-weight: 700;
            font-size: 22px;
            line-height: 1.5em;
            color: #f5f6f7;
            text-decoration: underline;
            display: flex;
            justify-content: flex-start;
            @media(max-width: 375px) {
                font-size: 18px;
            }
        }
      }
    }
  }
  .form-container {
    padding: 0 100px;
    margin-top: 100px;
    @media(max-width: 920px) {
      padding: 10px;
      margin: 40px 20px;
    }
    .form-container-item {
      gap: 20px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      align-items: center;
      position: relative;
      font-family: "Proxima Nova";
      span {
          font-size: 18px;
          color: ${textColor};
      }
      .error {
        position: absolute;
        color: red;
        top: 40px
      }
      input {
        font-size: 19px;
        border-width: 0;
        margin-bottom: 3%;
        background: #f5f6f7;
        display: block;
        width: 100%;
        height: calc(1.5em + 0.75rem + 2px);
        padding: 0.375rem 0.75rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057 !important;
        background-color: rgba(0, 0, 0, 0.56) !important;
        background-clip: padding-box;
        border: 1px solid #ced4da !important;
        border-radius: 0.25rem !important;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        &:focus {
          border-color: 1px solid #ffffff;
          background-color: rgba(100, 165, 7, 0.8) !important;
          color: #ffffff !important;
          &::placeholder {
            color: #ffffff;
          }
        }
      }
      textarea {
        height: 100px;
        width: 100%;
        font-size: 19px;
        border-width: 0;
        margin-bottom: 3%;
        background: #f5f6f7;
        display: block;
        width: 100%;
        padding: 0.375rem 0.75rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057 !important;
        background-color: rgba(0, 0, 0, 0.56) !important;
        background-clip: padding-box;
        border: 1px solid #ced4da !important;
        border-radius: 0.25rem !important;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        &:focus {
          border-color: 1px solid #ffffff;
          background-color: rgba(100, 165, 7, 0.8) !important;
          color: #ffffff !important;
          &::placeholder {
            color: #ffffff;
          }
        }
      }
    }
    .form-button {
      display: flex;
      justify-content: flex-end;
      .contact-form-buttons {
        padding: 10px 25px;
        border-radius: 20px;
        background-color: rgba(100, 165, 7, 0.8);
        font-size: 20px;
        border-color: thistle;
        border: 1px solid #ced4da !important;
        transition: all 0.15s ease-in-out;
        cursor: pointer;
        &:hover {
          background-color: #ffffff;
          color: rgba(100, 165, 7, 0.8);
          transform: scale(1.3);
          margin: 20px;
        }
        &:focus-visible {
          border: none;
        }
      }
    }
    .navigation {
        margin-bottom: 150px;
        main {
            --col-height: 10vh;
            --radius: clamp(1vw, 80px, 10vw);
            ul {
                li {
                    span {
                        font-size: 12px
                    }
                }
            }
        }
        main > div {
            background: unset;
            padding: 0;
        }
    }
  }
  @media(max-width:920px) {
    display: block;
    padding: 40px 0;
  }
`