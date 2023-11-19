import { styled } from "styled-components";

export const Container = styled.div`
  opacity: 1;
  margin: 1rem;
  place-content: normal;
  align-items: normal;
  cursor: pointer;

  .img-container {
    width: 230px;
    height: 355px;
    position: relative;

    &:hover img {
      transform: scale(1.03);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
      /* transition: transform 0.2s ease 0s; */
      transform: 0.5s all ease-in-out;

      /* &:hover {
        transition: scale(1.5);
      } */
    }

    .status-card {
      padding: 5px;
      border-radius: 5px;
      background-color: rgba(29, 143, 36, 0.4);
      margin: 4px 0px;
      position: absolute;
      bottom: 10px;
      left: 20px;

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

    .active {
      background-color: rgba(255, 179, 3, 0.4);
    }
  }
`;
