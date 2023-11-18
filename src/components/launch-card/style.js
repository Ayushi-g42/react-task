import { styled } from "styled-components";

export const Container = styled.div`
  color: rgb(255, 255, 255);
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.5);
  padding: 1.75rem;
  /* z-index: 2; */
  width: 380px;

  .wrap-inner-box {
    display: flex;
    width: 100%;

    .left,
    .right {
      width: 50%;
    }

    .wrap-text {
      margin: 4px 0px;
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
