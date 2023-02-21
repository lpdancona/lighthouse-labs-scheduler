import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";
export default function DayListItem(props) {
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0,
  });
  let spotsText = "{props.spots} spots remaining";
  if (props.spots === 0) {
    spotsText = "no spots remaining";
  } else if (props.spots === 1) {
    spotsText = "1 spot remaining";
  } else {
    spotsText = `${props.spots} spots remaining`;
  }

  return (
    <li
      className={dayClass}
      onClick={() => {
        props.setDay(props.name);
      }}
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{spotsText}</h3>
    </li>
  );
}
