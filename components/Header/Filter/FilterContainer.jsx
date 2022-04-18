import AdjustmentsIcon from "@heroicons/react/outline/AdjustmentsIcon";
import { useState } from "react";
import FilterItem from "./FilterItem";

const FilterContainer = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);

  return (
    <div className="w-[400px] h-full hidden md:flex items-center justify-end">
      <div className="overflow-x-auto mr-[10px] flex items-center">
        <FilterItem
          margin
          text="minimal"
          currentFilter={selectedFilter}
          setCurrentFilter={() => {
            if (selectedFilter === "minimal") setSelectedFilter(null);
            else setSelectedFilter("minimal");
          }}
        />
        <FilterItem
          margin
          text="house"
          currentFilter={selectedFilter}
          setCurrentFilter={() => {
            if (selectedFilter === "house") setSelectedFilter(null);
            else setSelectedFilter("house");
          }}
        />
        <FilterItem
          margin
          text="rap"
          currentFilter={selectedFilter}
          setCurrentFilter={() => {
            if (selectedFilter === "rap") setSelectedFilter(null);
            else setSelectedFilter("rap");
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
