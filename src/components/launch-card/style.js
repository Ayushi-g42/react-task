import { styled } from "styled-components";

export const Container = styled.div`
  color: rgb(255, 255, 255);
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem 1.75rem 2.3em;
  width: 42%;
  @media (max-width: 1199px) {
    width: 40%;
  }

  .wrap-inner-box {
    display: flex;
    width: 100%;
    gap: 20px;
    justify-content: space-between;

    .left,
    .right {
      width: 50%;
    }

    .wrap-text {
      margin: 10px 0px;

      .logo-wrap {
        // width: 120px;
        /* height: 130px; */
        border-radius: 10px;
        background-color: rgba(51, 51, 51, 0.5);
        padding: 10px;
        text-align: center;
        img {
          width: 100px;
          height: 100px;
        }
      }

      .logo-links-wrap {
        display: flex;
        gap: 10px;
        .logo-links {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          margin-top: 3px;
        }
      }
      .text {
        color: rgba(255, 255, 255, 0.5);
        font-weight: 600;
        font-size: 0.74rem;
        margin: 0px;
        padding: 0px;
        text-transform: uppercase;
        white-space: nowrap;
        font-family: HelveticaNeue, sans-serif !important;
      }

      .title {
        margin: 0px;
        padding: 0px;
        font-size: 1rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 1.1rem;
      }
    }
  }
`;
