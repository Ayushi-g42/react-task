import { styled } from "styled-components";

export const Container = styled.div`
  color: rgb(255, 255, 255);
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem 1.75rem 2.3em;
  width: 380px;

  .wrap-inner-box {
    background-image: url("https://live.staticflickr.com/65535/50137510881_3f675bb620_h.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    background-position: center;

    .wrap-details {
      display: flex;
      justify-content: space-between;
      color: #fff;
      align-items: center;
    }

    .wrap-text {
      margin: 5px 0px;

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
      }
    }
  }

  .first {
    background-image: url("https://live.staticflickr.com/65535/50137510881_3f675bb620_h.jpg");
  }
  .second {
    margin-top: 20px;
    background-image: url("https://live.staticflickr.com/65535/50906488116_c44db82fc1_k.jpg");
  }
`;
