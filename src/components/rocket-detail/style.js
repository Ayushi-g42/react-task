import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  margin-top: 20px;

  .rocket-image {
    box-shadow: rgba(0, 0, 0, 0.2) 5px 5px 45px 5px;
    width: 35%;
    border-radius: 10px;
    height: 350px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      object-fit: cover;
    }
  }
  .rocket-detail {
    box-shadow: rgba(0, 0, 0, 0.2) 5px 5px 45px 5px;
    width: 65%;
    border-radius: 10px;
    padding: 2rem;

    .text {
      text-transform: uppercase;
      font-family: HelveticaNeue, sans-serif !important;
      color: rgb(155, 155, 155);
      font-weight: 200;
      font-size: 0.74rem;
      margin: 0px;
      padding: 0px;
      font-weight: 700;
    }

    .title {
      margin: 0px;
      font-size: 0.9rem;
      font-weight: 100;
      line-height: 1.7;
      color: rgb(53, 53, 53);
      font-family: HelveticaNeue, sans-serif !important;
    }
  }
`;
