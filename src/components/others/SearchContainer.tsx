import React, { useState } from "react";
import SearchInactive from "@/components/others/SearchInactive";
import SearchActive from "@/components/others/SearchActive";

const SearchContainer = () => {
  const [isActive, setIsActive] = useState(false);

  const handleActivate = () => {
    setIsActive(true);
  };

  return (
    <div>
      {isActive ? <SearchActive /> : <SearchInactive onClick={handleActivate} />}
    </div>
  );
};

export default SearchContainer;