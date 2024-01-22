import styled from "styled-components";
export const BooksStyle = styled.div`
  & .body {
    background: #f8f8f8;
    height: 737px;
    width: 100%;
    @media (max-width: 1000px) {
      height: 100%;
    }
    & .main {
      background: url("/image/Rectangle_2.png");
      height: 100%;
      width: 75%;
      background-position: top;
      background-repeat: no-repeat;
      background-size: cover;
      & .card {
        transform: translate(10%, 0%);
        width: 100%;
        padding: 0px 54px;
        display: flex;
        position: relative;
        flex-wrap: wrap;
        @media (max-width: 1000px) {
          transform: translate(9%, 0%);
          @media (max-width: 900px) {
            transform: translate(8%, 0%);
            @media (max-width: 860px) {
              transform: translate(5%, 0%);
              padding: 0px 40px;
              @media (max-width: 460px) {
                padding: 0px 20px;
              }
            }
          }
        }

        & .header {
          display: flex;
          width: 100%;
          padding: 12px 0px;
          justify-content: space-between;
          align-items: center;
          & .header_logo {
            width: 500px;
            height: 48px;
            display: flex;
            align-items: center;
            gap: 24px;
            & h6 {
              color: var(--Foundation-Purple-purple-500, #6200ee);
              font-family: Mulish;
              font-size: 18px;
              font-style: normal;
              font-weight: 700;
              line-height: 120%;
              letter-spacing: 0.576px;
              & span {
                color: #fff;
                font-family: Mulish;
                font-size: 18px;
                font-style: normal;
                font-weight: 700;
                line-height: 120%;
                letter-spacing: 0.576px;
              }
            }

            & p {
              display: flex;
              width: 264px;
              flex-direction: column;
              justify-content: center;
              align-self: stretch;
              color: var(--Foundation-White-white-50, #fefefe);
              font-family: Mulish;
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
              letter-spacing: 0.16px;
              @media (max-width: 850px) {
                display: none;
              }
            }
          }
          & .header_right {
            width: 80px;
            height: 32px;
            display: flex;
            align-items: center;
            gap: 24px;
            & .bell {
            }
            & .point {
              top: 24px;
              right: 111px;
              position: absolute;
              display: flex;
              width: 6px;
              height: 6px;
              flex-direction: column;
              justify-content: flex-start;
              align-items: center;
              gap: 10px;
              border-radius: 8px;
              border: 1px solid var(--Foundation-White-white-50, #fefefe);
              background: var(--Foundation-Orange-orange-500, #ff4d4f);
            }
            & .user_image {
              border-radius: 60px;
              border: 2px solid #fd648e;
              background: var(
                --gradient,
                conic-gradient(
                  from 180deg at 50% 50%,
                  #fd648e 0deg,
                  #884cb2 178.1249964237213deg,
                  #fd648e 360deg
                )
              );
              backdrop-filter: blur(15px);
              display: flex;
              padding: 3px;
              flex-direction: column;
              align-items: center;
            }
          }
        }
        & .text_main {
          width: 100%;
          margin: 36px 0px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          @media (max-width: 630px) {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            justify-content: center;
          }
          & h5 {
            margin: 0px;
            color: var(--Foundation-White-white-50, #fefefe);
            font-family: Mulish;
            font-size: 36px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            & span {
              color: var(--Foundation-Purple-purple-500, #6200ee);
              font-family: Mulish;
              font-size: 36px;
              font-style: normal;
              font-weight: 700;
              line-height: normal;
            }
          }
          & .Create {
            color: var(--Foundation-White-white-50, #fefefe);
            font-family: Mulish;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            display: flex;
            padding: 10px 24px;
            justify-content: center;
            align-items: center;
            gap: 12px;
            border-radius: 4px;
            border-radius: 4px;
            border: 1px solid var(--Foundation-Purple-purple-500, #6200ee);
            background: var(--Foundation-Purple-purple-500, #6200ee);
            @media (max-width: 630px) {
              margin-top: 10px;
            }
          }
        }
        & .text {
          width: 100%;
          margin: 0px;

          & p {
            color: var(--Foundation-White-white-50, #fefefe);
            font-family: Mulish;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            @media (max-width: 630px) {
              text-align: center;
            }
          }
        }
        & .cards {
          display: flex;
          width: 100%;
          margin-top: 20px;
          gap: 24px;
          @media (max-width: 1000px) {
            display: flex;
            flex-wrap: wrap;
            @media (max-width: 850px) {
              display: flex;
              flex-direction: column;
              flex-wrap: wrap;
              align-items: center;
            }
          }
          & .cards_books {
            display: flex;
            /* background: var(--Foundation-White-white-50, #fefefe); */
            /* box-shadow: 0px 4px 24px 0px rgba(51, 51, 51, 0.08); */
            /* display: flex; */
            width: 33%;
            @media (max-width: 980px) {
              width: 45%;
              @media (max-width: 850px) {
                width: 60%;
                @media (max-width: 750px) {
                  width: 75%;
                  @media (max-width: 500px) {
                    width: 100%;
                  }
                }
              }
            }
            & .card_book {
              border-radius: 12px;
              border: 1px solid var(--Foundation-Grey-grey-50, #ebebeb);
              background: var(--Foundation-White-white-50, #fefefe);
              box-shadow: 0px 4px 24px 0px rgba(51, 51, 51, 0.08);
              display: flex;
              width: 100%;
              margin-top: 36px;
              padding: 32px;
              flex-direction: column;
              align-items: flex-start;
              gap: 16px;
              margin: 0px;
              /* @media (max-width: 850px) {
                width: 50%;
                @media (max-width: 550px) {
                  width: 80%;
                }
              } */
              & h5 {
                margin: 0px;
                align-self: stretch;
                color: var(--Foundation-Grey-grey-900, #151515);
                font-family: Montserrat;
                font-size: 16px;
                font-style: normal;
                font-weight: 600;
                line-height: normal;
              }
              & ul {
                align-self: stretch;
                color: var(--Foundation-Grey-grey-500, #333);
                font-family: Mulish;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%;
                list-style-type: none;
                margin: 0;
                padding: 0;
              }
              & .row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                align-self: stretch;
                & p {
                  color: var(--Foundation-Grey-grey-500, #333);
                  font-family: Mulish;
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 15px;
                  & span {
                    color: var(--Foundation-Grey-grey-500, #333);
                    font-family: Mulish;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 15px;
                  }
                }
                & .new {
                  color: #fff;
                  text-align: center;
                  border: 1px solid var(--Foundation-Purple-purple-500, #f00);
                  font-family: Mulish;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: normal;
                  border-radius: 8.5px;
                  background: #f00;
                  display: flex;
                  padding: 2px 12px;
                  align-items: center;
                  gap: 6px;
                }
                & .reading {
                  border-radius: 8.5px;
                  background: #ffec43;
                  border: 1px solid var(--Foundation-Purple-purple-500, #ffec43);
                  color: #fff;
                  text-align: center;
                  font-family: Mulish;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: normal;
                  display: flex;
                  padding: 2px 12px;
                  align-items: center;
                  gap: 6px;
                }
                & .finished {
                  display: flex;
                  padding: 2px 12px;
                  align-items: center;
                  gap: 6px;
                  border-radius: 8.5px;
                  background: #00ff29;
                  border: 1px solid var(--Foundation-Purple-purple-500, #00ff29);
                  color: #fff;
                  text-align: center;
                  font-family: Mulish;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: normal;
                }
              }
            }

            & .delet_one {
              display: none;
              /* position: absolute; */
              top: 281px;
              left: 396px;
              /* right: 1.7%; */
              align-items: center;
              gap: 2px;
              flex: 1 0 0;
              flex-direction: column;
              flex-wrap: wrap;
              align-content: flex-end;
              @media (max-width: 460px) {
                right: -4%;
              }
              & .turn_off {
                display: flex;
                padding: 8px;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border-radius: 6px 6px 6px 0px;
                background: var(--Foundation-Orange-orange-500, #ff4d4f);
                box-shadow: 0px 6px 32px 0px rgba(21, 21, 21, 0.48);
              }
              & .to_add {
                display: flex;
                padding: 8px;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border-radius: 0px 6px 6px 6px;
                background: var(--Foundation-Purple-purple-500, #6200ee);
                box-shadow: 0px 6px 32px 0px rgba(21, 21, 21, 0.48);
              }
            }
            & .delet_to {
              display: none;
              /* position: absolute; */
              top: 281px;
              left: 704px;
              /* right: 1.7%; */
              align-items: center;
              gap: 2px;
              flex: 1 0 0;
              flex-direction: column;
              flex-wrap: wrap;
              align-content: flex-end;
              @media (max-width: 460px) {
                right: -4%;
              }
              & .turn_off {
                display: flex;
                padding: 8px;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border-radius: 6px 6px 6px 0px;
                background: var(--Foundation-Orange-orange-500, #ff4d4f);
                box-shadow: 0px 6px 32px 0px rgba(21, 21, 21, 0.48);
              }
              & .to_add {
                display: flex;
                padding: 8px;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border-radius: 0px 6px 6px 6px;
                background: var(--Foundation-Purple-purple-500, #6200ee);
                box-shadow: 0px 6px 32px 0px rgba(21, 21, 21, 0.48);
              }
            }
            & .delet_thre {
              display: none;
              /* position: absolute; */
              top: 281px;
              left: 396px;
              /* right: 1.7%; */
              align-items: center;
              gap: 2px;
              flex: 1 0 0;
              flex-direction: column;
              flex-wrap: wrap;
              align-content: flex-end;
              @media (max-width: 460px) {
                right: -4%;
              }

              & .turn_off {
                display: flex;
                padding: 8px;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border-radius: 6px 6px 6px 0px;
                background: var(--Foundation-Orange-orange-500, #ff4d4f);
                box-shadow: 0px 6px 32px 0px rgba(21, 21, 21, 0.48);
              }
              & .to_add {
                display: flex;
                padding: 8px;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border-radius: 0px 6px 6px 6px;
                background: var(--Foundation-Purple-purple-500, #6200ee);
                box-shadow: 0px 6px 32px 0px rgba(21, 21, 21, 0.48);
              }
            }

            &:hover {
              & .delet_one {
                display: flex;
              }
              & .delet_to {
                display: flex;
              }
              & .delet_thre {
                display: flex;
              }
            }
          }
        }
      }
    }
  }
`;
