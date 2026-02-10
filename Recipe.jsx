import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Recipe = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div>
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <h2>Recipe ID: {id}</h2>
      {/* Recipe details here */}
    </div>
  );
};

export default Recipe;
