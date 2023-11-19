import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;

  .modal {
    background: white;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 30px;
    position: relative;
    width: 80%;
    padding: 3em;
    border-radius: 15px;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 460px;
  }

  .close-button {
    position: absolute;
    top: 40px;
    right: 30px;
    cursor: pointer;
    background: none;
    border: none;
    font-size: 20px;
    line-height: 1;
    padding: 0;
    color: #333;
    font-weight: 600;
    font-size: 30px;
  }
`;
