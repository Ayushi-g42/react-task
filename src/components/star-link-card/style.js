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
    text-align: center;
    .title {
      margin: 0px;
      padding: 0px;
      font-size: 1rem;
      font-family: HelveticaNeue, sans-serif !important;
    }
  }
`;
