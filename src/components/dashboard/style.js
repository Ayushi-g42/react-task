import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 90vh;

  .bg-image {
    background-image: url("https://live.staticflickr.com/7706/26751237322_5a52540ea3_h.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 84%;
  }

  .main-section {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 10px 50px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    overflow-y: scroll;
  }

  .img-wrap {
    text-align: center;
    padding-top: 200px;
    color: white;
  }
`;
