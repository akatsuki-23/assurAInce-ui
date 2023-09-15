import { SearchIcon } from "../icons";

const SearchBar = (props) => {
  const {
    searchValue,
    handleChange,
    customClass = "",
    searchInputStyle = "",
    placeholder = "Search",
  } = props;
  return (
    <div
      className={`flex items-center min-w-[120px] p-2 h-[39px] ${customClass}
                  rounded-md border-[1px] bg-white border-gray-500`}
    >
      <SearchIcon />
      <input
        type="text"
        value={searchValue}
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
        className={`overflow-hidden pl-2 w-full h-full text-sm 
                    placeholder:text-slateGrey rounded-md outline-none ${searchInputStyle}`}
      />
    </div>
  );
};

export default SearchBar;
