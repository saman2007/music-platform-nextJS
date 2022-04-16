import Actions from "./Actions/Actions";
import Profile from "./Profile/Profile";
import SearchForm from "./SearchBar/SearchForm";

const Header = () => {
  return (
    <header className="row-start-1 flex justify-between gap-[17px] row-end-1 col-start-2 col-end-[14] h-[65px] p-[10px]">
      <SearchForm />
      <Actions />
      <Profile />
    </header>
  );
};

export default Header;
