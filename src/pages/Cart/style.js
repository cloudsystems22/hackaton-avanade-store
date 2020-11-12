import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 100px;
  padding: 30px;
  background: #fff;
  border-radius: 5px;
  width: 100%;
  max-width: 800px;

  footer {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    a {
      color: #f62f5e;
      text-decoration: none;
      font-family: Monteserrat;
      font-weight: bold;
    }

    button {
      cursor: pointer;
      height: 45px;
      background: #f62f5e;
      border: 0;
      border-radius: 25px;
      color: #fff;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    width: 90px;
    height: 100px;
    border-radius: 5px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 16px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      color: #666;
      border-radius: 5px;
      padding: 6px;
      width: 50px;
      text-align: right;
    }

    button {
      background: none;
      border: 0;
      padding: 6px;
      cursor: pointer;
    }
  }
  svg {
    cursor: pointer;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
