import React from "react";
import { useLocation } from "react-router-dom";
import { Arena } from "un-cavaliere-e-mezzo-library";

const ArenaScreen = () => {
  const location = useLocation();

  return (
    <div className="container">
      <Arena lobby={location.state} />
    </div>
  );
};

export default ArenaScreen;
