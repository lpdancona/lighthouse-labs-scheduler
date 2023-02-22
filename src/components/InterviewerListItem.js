import React, { useState } from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";

export default function InterviewerListItem(props) {
  const { id, name, avatar, selected, setInterviewer } = props;
  const handleClick = () => {
    setInterviewer(id);
  };
  return (
    <li
      className={
        selected ? "interviewers__item--selected" : "interviewers__item"
      }
      onClick={handleClick}
    >
      <img className="interviewers__item-image" src={avatar} alt={name} />
      {selected && name}
    </li>
  );
}
