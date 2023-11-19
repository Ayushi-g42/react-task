import { styled } from "styled-components";

export const Container = styled.div`
  .header {
    display: flex;
    gap: 20px;
    align-items: center;
    h3 {
      margin: 0px;
      padding: 0px;
      font-size: 1.5rem;
      font-family: HelveticaNeue, sans-serif !important;
    }
    .active {
      color: rgb(53, 53, 53);
      cursor: pointer;
      padding: 8px;
      border-radius: 10px;

      &:hover {
        background: rgb(245, 245, 245);
      }
    }

    .in-active {
      transition: all 0.2s ease-out 0s;
      text-decoration: none;
      font-weight: 100;
      color: rgb(101, 101, 101);
      padding: 0.5rem 1rem;
      border-radius: 10px;
      font-size: 1.6rem;
      font-family: HelveticaNeue, sans-serif;

      &:hover {
        background: rgb(245, 245, 245);
      }
    }
  }
`;
