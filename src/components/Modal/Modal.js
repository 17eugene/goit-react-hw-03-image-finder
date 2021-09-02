import React from "react";

import styles from "./Modal.module.css";

class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener("keydown", this.keydownHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.keydownHandler);
  }

  keydownHandler = (e) => {
    if (e.code === "Escape") {
      this.props.close();
    }
  };

  onBackdropCloseClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.close();
    }
  };
  render() {
    return (
      <div className={styles.overlay} onClick={this.onBackdropCloseClick}>
        <div className={styles.modal}>
          <img src={this.props.largeImageURL} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}

export { Modal };
