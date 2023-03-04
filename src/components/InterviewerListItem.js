import React from "react";
import "components/InterviewerListItem.scss";

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
