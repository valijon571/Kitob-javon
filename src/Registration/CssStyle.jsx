import styled from "styled-components";
export const CssStyle = styled.div`
  /* ============Step============ */

  & .body {
    background: #f8f8f8;
    height: 737px;
    width: 100%;
    & .main {
      background: url("/image/Rectangle_2.png");
      height: 100%;
      width: 72%;
      background-position: top;
      background-repeat: no-repeat;
      background-size: cover;
      & .card {
        display: flex;
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: space-around;
        padding-top: 2rem !important;
        position: relative;
        left: 20%;

        & .card_system {
          -webkit-box-align: center;
          align-items: center;
          border-radius: 16px;
          border: 1px solid rgb(226, 228, 234);
          background: rgb(255, 255, 255);
          box-shadow: rgba(0, 34, 125, 0.1) 0px 0px 20px 0px;
          display: flex;
          flex-direction: column;
          padding: 48px 28px;
          width: 430px;
          height: 580px;
          @media (max-width: 530px) {
            width: 530px;
            /* height: 530px; */
            @media (max-width: 500px) {
              width: 350px;
              @media (max-width: 445px) {
                width: 310px;
                @media (max-width: 395px) {
                  width: 290px;
                  @media (max-width: 355px) {
                    width: 240px;
                  }
                }
              }
            }
          }
          & h3 {
            color: var(--Foundation-Grey-grey-900, #151515);
            font-family: Mulish;
            font-size: 36px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            margin: 0px;
            margin-bottom: 20px;
          }
          & .system {
            width: 100%;
            & .system_input {
              margin-top: 16px;
              & .label {
                color: var(--Foundation-Grey-grey-900, #151515);
                font-feature-settings: "clig" off, "liga" off;
                font-family: Mulish;
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: 120%;
              }
              & input {
                display: flex;
                margin-top: 4px;
                width: 92%;
                height: 33px;
                padding: 14px 16px;
                gap: 16px;
                align-self: stretch;
                border-radius: 6px;
                border: 1px solid var(--Foundation-Grey-grey-50, #ebebeb);
                background: var(--Foundation-White-white-50, #fefefe);
                box-shadow: 0px 4px 18px 0px rgba(51, 51, 51, 0.04);
                align-items: center;
              }
              & .input {
                position: relative;
                & input {
                  display: flex;
                  margin-top: 4px;
                  width: 92%;
                  height: 33px;
                  padding: 14px 16px;
                  gap: 16px;
                  align-self: stretch;
                  border-radius: 6px;
                  border: 1px solid var(--Foundation-Grey-grey-50, #ebebeb);
                  background: var(--Foundation-White-white-50, #fefefe);
                  box-shadow: 0px 4px 18px 0px rgba(51, 51, 51, 0.04);
                  align-items: center;
                }
                & .showPassword {
                  border-radius: 9px;
                  cursor: pointer;
                  display: flex;
                  height: 58px;
                  justify-content: center;
                  position: absolute;
                  right: 2px;
                  top: 4px;
                  width: 69px;
                  align-items: center;
                }
              }
            }
            & .system_submitt {
              margin-top: 36px;
              & button {
                display: flex;
                padding: 10px 24px;
                justify-content: center;
                align-items: center;
                gap: 8px;
                width: 100%;
                height: 40px;
                align-self: stretch;
                border-radius: 4px;
                background: var(--Foundation-Purple-purple-500, #6200ee);
                color: var(--Foundation-White-white-50, #fefefe);
                box-shadow: 0px 4px 18px 0px rgba(51, 51, 51, 0.04);
                border: 1px solid var(--Foundation-Grey-grey-50, #ebebeb);
                font-family: Mulish;
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
              }
              & p {
                color: var(--Foundation-Grey-grey-500, #333);
                text-align: center;
                font-family: Mulish;
                font-size: 14px;
                font-style: normal;
                font-weight: 300;
                line-height: 120%; /* 16.8px */
                margin-bottom: 0px;
                & .text {
                  text-decoration: none;
                  padding-left: 6px;
                  color: var(--Foundation-Purple-purple-500, #6200ee);
                  font-family: Mulish;
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 300;
                  line-height: 120%;
                }
              }
            }
          }
        }
      }
      & .card_one {
        display: flex;
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: space-around;
        padding-top: 8rem !important;
        position: relative;
        left: 20%;

        & .card_system_one {
          -webkit-box-align: center;
          align-items: center;
          border-radius: 16px;
          border: 1px solid rgb(226, 228, 234);
          background: rgb(255, 255, 255);
          box-shadow: rgba(0, 34, 125, 0.1) 0px 0px 20px 0px;
          display: flex;
          flex-direction: column;
          padding: 48px 28px;
          width: 430px;
          height: 420px;
          @media (max-width: 530px) {
            width: 400px;
            height: 380px;
            @media (max-width: 500px) {
              width: 350px;
              @media (max-width: 445px) {
                width: 310px;
                @media (max-width: 395px) {
                  width: 290px;
                  @media (max-width: 355px) {
                    width: 240px;
                  }
                }
              }
            }
          }
          & h3 {
            color: var(--Foundation-Grey-grey-900, #151515);
            font-family: Mulish;
            font-size: 36px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            margin: 0px;
            margin-bottom: 20px;
          }
          & .system {
            width: 100%;
            & .system_input {
              margin-top: 16px;
              & .label {
                color: var(--Foundation-Grey-grey-900, #151515);
                font-feature-settings: "clig" off, "liga" off;
                font-family: Mulish;
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: 120%;
              }
              & input {
                display: flex;
                margin-top: 4px;
                width: 92%;
                height: 33px;
                padding: 14px 16px;
                gap: 16px;
                align-self: stretch;
                border-radius: 6px;
                border: 1px solid var(--Foundation-Grey-grey-50, #ebebeb);
                background: var(--Foundation-White-white-50, #fefefe);
                box-shadow: 0px 4px 18px 0px rgba(51, 51, 51, 0.04);
                align-items: center;
              }
              & .input {
                position: relative;
                & input {
                  display: flex;
                  margin-top: 4px;
                  width: 92%;
                  height: 33px;
                  padding: 14px 16px;
                  gap: 16px;
                  align-self: stretch;
                  border-radius: 6px;
                  border: 1px solid var(--Foundation-Grey-grey-50, #ebebeb);
                  background: var(--Foundation-White-white-50, #fefefe);
                  box-shadow: 0px 4px 18px 0px rgba(51, 51, 51, 0.04);
                  align-items: center;
                }
                & .showPassword {
                  border-radius: 9px;
                  cursor: pointer;
                  display: flex;
                  height: 58px;
                  justify-content: center;
                  position: absolute;
                  right: 2px;
                  top: 4px;
                  width: 69px;
                  align-items: center;
                }
              }
            }
            & .system_submitt {
              margin-top: 36px;
              & button {
                display: flex;
                padding: 10px 24px;
                justify-content: center;
                align-items: center;
                gap: 8px;
                width: 100%;
                height: 40px;
                align-self: stretch;
                border-radius: 4px;
                background: var(--Foundation-Purple-purple-500, #6200ee);
                color: var(--Foundation-White-white-50, #fefefe);
                box-shadow: 0px 4px 18px 0px rgba(51, 51, 51, 0.04);
                border: 1px solid var(--Foundation-Grey-grey-50, #ebebeb);
                font-family: Mulish;
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
              }
              & p {
                color: var(--Foundation-Grey-grey-500, #333);
                text-align: center;
                font-family: Mulish;
                font-size: 14px;
                font-style: normal;
                font-weight: 300;
                line-height: 120%; /* 16.8px */
                margin-bottom: 0px;
                & .text {
                  text-decoration: none;
                  padding-left: 6px;
                  color: var(--Foundation-Purple-purple-500, #6200ee);
                  font-family: Mulish;
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 300;
                  line-height: 120%;
                }
              }
            }
          }
        }
      }
      & .card_img {
        display: flex;
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: space-around;
        padding-top: 4rem !important;
        position: relative;
        left: 20%;
        flex-direction: column;
        gap: 72px;
        align-items: center;
        justify-content: center;
        @media (max-width: 900px) {
          padding-top: 5rem !important;
          @media (max-width: 700px) {
            padding-top: 6rem !important;
            @media (max-width: 650px) {
              padding-top: 7rem !important;
              @media (max-width: 550px) {
                padding-top: 8rem !important;
                @media (max-width: 420px) {
                  padding-top: 9rem !important;
                  @media (max-width: 360px) {
                    padding-top: 10rem !important;
                  }
                }
              }
            }
          }
        }
        & img {
          @media (max-width: 900px) {
            width: 630px;
            height: 430px;
            @media (max-width: 700px) {
              width: 550px;
              height: 380px;
              @media (max-width: 650px) {
                width: 450px;
                height: 340px;
                @media (max-width: 550px) {
                  width: 370px;
                  height: 290px;
                  @media (max-width: 420px) {
                    width: 285px;
                    height: 240px;
                    @media (max-width: 360px) {
                      width: 230px;
                      height: 220px;
                    }
                  }
                }
              }
            }
          }
        }
        & .button {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          align-self: stretch;
          @media (max-width: 700px) {
            width: 100%;
            flex-direction: column;
          }
          & .Go_Home_Page {
            color: var(--Foundation-White-white-50, #fefefe);
            font-family: Mulish;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            display: flex;
            width: 240px;
            padding: 10px 24px;
            justify-content: center;
            align-items: center;
            gap: 8px;
            border-radius: 4px;
            border: 1px solid var(--Foundation-Purple-purple-500, #6200ee);
            background: var(--Foundation-Purple-purple-500, #6200ee);
          }
          & .Reload_Page {
            color: var(--Foundation-Purple-purple-500, #6200ee);
            font-family: Mulish;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            display: flex;
            width: 240px;
            padding: 10px 24px;
            justify-content: center;
            align-items: center;
            gap: 8px;
            border-radius: 4px;
            border: 1px solid var(--Foundation-Purple-purple-500, #6200ee);
          }
        }
      }
    }
  }
`;
