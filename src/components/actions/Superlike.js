import React from "react";

const SuperLike = ({ userId, modifySuperficialChoices }) => (
  <button
    type="button"
    onClick={() => modifySuperficialChoices(userId, "ADD_TO_SUPERLIKED_USER")}
  >
    <img src="/images/misc/superlike.png" alt="SuperLike User" />
  </button>
);

export default SuperLike;
