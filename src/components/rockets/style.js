import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 90vh;
  /* flex-wrap: wrap; */

  .main-section {
    width: 75%;
    background-image: url("https://live.staticflickr.com/7706/26751237322_5a52540ea3_h.jpg");
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 0px 90px 50px;
    overflow-y: scroll;

    .card-wrap {
      color: rgb(255, 255, 255);
      border-radius: 15px;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(0, 0, 0, 0.6) 100%
      );
      z-index: 2;
      padding: 1rem;
      display: flex;
      flex-wrap: wrap;
    }
  }
`;
