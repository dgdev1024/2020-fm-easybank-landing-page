import * as React from "react";

function SvgIconHamburger(props) {
  return (
    <svg width={24} height={11} {...props}>
      <path
        d="M0 0h24v1H0zm0 5h24v1H0zm0 5h24v1H0z"
        fill="#2D314D"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgIconHamburger;
