import React from "react";
import sprite from "../../assets/icons/icomoon/sprite.svg";

/**
 * @breif Display a simple icon button
 * @param {String} name Icon name
 * @returns {JSX}
 */
const Icon = ({ name, ...otherProps }) => {
  return (
    <button {...otherProps}>
      <svg className="icon-image">
        <use xlinkHref={`${sprite}#${name}`}></use>
      </svg>
    </button>
  );
};

export default Icon;
