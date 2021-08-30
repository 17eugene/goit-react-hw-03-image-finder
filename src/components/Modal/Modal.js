import React from "react";

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
      <div className="Overlay" onClick={this.onBackdropCloseClick}>
        <div className="Modal">
          <img src={this.props.largeImageURL} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}

export { Modal };
