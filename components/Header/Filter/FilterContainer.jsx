import AdjustmentsIcon from "@heroicons/react/outline/AdjustmentsIcon";
import XIcon from "@heroicons/react/outline/XIcon";
import { useState } from "react";
import FilterItem from "./FilterItem";

const FilterContainer = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);

  return (
    <div className="w-[400px] h-full hidden md:flex items-center justify-end">
      <span
        className="w-[20px] h-[20px] cursor-pointer"
        onClick={() => {
          setSelectedFilter(null);
        }}
      >
        <XIcon className="text-red-600 w-full h-full" />
      </span>
      <div className="overflow-x-auto mr-[10px] flex items-center">
        <FilterItem
          margin
          text="minimal"
          currentFilter={selectedFilter}
          setCurrentFilter={() => {
            setSelectedFilter("minimal");
          }}
        />
        <FilterItem
          margin
          text="house"
          currentFilter={selectedFilter}
          setCurrentFilter={() => {
            setSelectedFilter("house");
          }}
        />
        <FilterItem
          margin
          text="rap"
          currentFilter={selectedFilter}
          setCurrentFilter={() => {
            setSelectedFilter("rap");
          }}
        />
      </div>
      <div className="py-[5px] flex justify-center items-center">
        <div className="flex px-[5px] cursor-pointer justify-center items-center border-l border-solid border-l-[#232323]">
          <AdjustmentsIcon className="text-[#d9d9d9] w-[24px] h-full" />
          <p className="text-[14px] text-[#d9d9d9]">Filters</p>
        </div>
      </div>
    </div>
  );
};

export default FilterContainer;
