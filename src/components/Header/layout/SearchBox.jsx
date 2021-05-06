import { SearchBoxStyle } from "../styles/SearchBoxstyles";

export default function SearchBox() {
  return (
    <SearchBoxStyle>
      {/* <Icon icon={searchOutlined} /> */}
      <input type="search" name="search" placeholder="Rechercher...." />
    </SearchBoxStyle>
  );
}
