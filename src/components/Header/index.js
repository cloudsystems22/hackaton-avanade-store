import {
  HeaderStyle,
  HeaderH1,
  HeaderUl,
  HeaderLi,
  Input,
  HeaderNav,
} from "./style";
import { FiShoppingBag, FiSearch } from "react-icons/fi";

function Header(props) {
  return (
    <HeaderStyle>
      <HeaderH1>SHOPMATE</HeaderH1>
      <HeaderNav>
        <HeaderUl>
          <HeaderLi>Women</HeaderLi>
          <HeaderLi>Men</HeaderLi>
          <HeaderLi>Kids</HeaderLi>
          <HeaderLi>Shoes</HeaderLi>
          <HeaderLi>Brands</HeaderLi>
        </HeaderUl>
      </HeaderNav>

      <Input />

      <FiShoppingBag size={32} color="#fff" />
    </HeaderStyle>
  );
}

export default Header;
