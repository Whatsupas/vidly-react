import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Like = ({ liked, onLike }) => {
  const iconColor = liked === true ? "#00a800" : "#7fe263";
  return (
    <FontAwesomeIcon
      className="clickable"
      style={{ color: iconColor }}
      icon={faHeart}
      onClick={onLike}
    />
  );
};

export default Like;

Like.propTypes = {
  liked: PropTypes.bool.isRequired
};
