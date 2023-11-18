import { styled } from "styled-components";

export const Sidebar = styled.div`
  padding: 4em 2em 2em;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  width: 16%;

  ul {
    list-style: none;
    margin: 5rem 0px 0px;
    padding: 0px;

    li {
      padding: 0.5rem 0px;
      a {
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

      .active {
        font-weight: 500;
        color: rgb(53, 53, 53);
        transition: all 0.2s ease-out 0s;
        text-decoration: none;
        padding: 0.5rem 1rem;
        border-radius: 10px;
        font-size: 1.6rem;

        &:hover {
          background: rgb(245, 245, 245);
        }
      }
    }
  }
`;
