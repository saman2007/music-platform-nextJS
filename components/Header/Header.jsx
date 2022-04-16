import Actions from "./Actions/Actions";
import Profile from "./Profile/Profile";
import SearchForm from "./SearchBar/SearchForm";

const Header = () => {
  return (
    <header className="row-start-1 flex justify-between gap-[10px] md:gap-[17px] row-end-1 col-start-2 col-end-13 h-[65px] p-[10px]">
      <SearchForm />
      <Actions />
      <Profile />
    </header>
  );
};

export default Header;
