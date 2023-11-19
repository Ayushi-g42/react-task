import { styled } from "styled-components";

export const Container = styled.div`
  border-radius: 10px;
  height: 350px;
  margin-top: 70px;
  display: flex;
  align-items: center;
  gap: 50px;
  margin-left: 50px;
  margin-right: 50px;
  justify-content: center;
  padding-bottom: 30px;

  button {
    min-width: 50px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgb(53, 53, 53);
    border: none;
    color: #fff;
    font-size: 28px;
    font-weight: 600;
    cursor: pointer;
  }
  .img-wrap {
    width: 70%;
    height: auto;
    box-shadow: rgba(0, 0, 0, 0.2) 5px 5px 45px 5px;
    display: flex;
    overflow-x: hidden;

    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      object-fit: cover;
    }
  }
`;
