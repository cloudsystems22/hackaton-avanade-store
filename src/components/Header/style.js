import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: #2e2e2e;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;

export const HeaderH1 = styled.h1`
  color: #f62f5e;
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: flex-end;
`;

export const HeaderUl = styled.ul`
  display: flex;
  flex-direction: row;
`;

export const HeaderLi = styled.li`
  width: 120px;
  list-style-type: none;
  font-size: 18px;
  font-weight: bold;
`;

export const DivInput = styled.input`
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  width: 260px;
  height: 36px;

  background: rgba(255, 255, 255, 0.501783);
  border-radius: 18px;

  text-align: center;
`;
