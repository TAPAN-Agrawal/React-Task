import React from "react";

import styles from "./styles.module.css";

const Card = ({ profile_img, name,  email, city, onDelete, show }) => {
  return (
    <div className={styles.card}>
      {show && (
        <span id={styles.close} title="close" onClick={onDelete}>
          X
        </span>
      )}
      <img id={styles.img} src={`/images/${profile_img}.jpeg`} alt="profile" />
      <p id={styles.header}>{name}</p>
      <p id={styles.info}>{email}</p>
      <p id={styles.info}>{city}</p>
    </div>
  );
};

export default Card;
