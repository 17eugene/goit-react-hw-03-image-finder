import React from "react";

import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { Button } from "../Button/Button";
import { Loader } from "../Loader/Loader";
import { Modal } from "../Modal/Modal";

import fetchImages from "../../services/ApiService";
import smoothScroll from "../../services/SmoothScroll";

import styles from "./ImageGallery.module.css";

class ImageGallery extends React.Component {
  constructor() {
    super();

    this.state = {
      status: "idle",
      page: 1,
      gallery: null,
      // error: null,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ status: "pending" });

      fetchImages(this.props.query)
        .then((gallery) => {
          if (gallery.total === 0) {
            return this.setState({
              error: "Image(s) not found",
              status: "rejected",
            });
          }
          return this.setState({
            gallery: gallery.hits,
            status: "resolved",
            page: 1,
          });
        })
        .catch((error) => this.setState({ error, status: "rejected" }));
    }
  }

  loadMoreHandler = (e) => {
    fetchImages(this.props.query, this.state.page + 1)
      .then((gallery) =>
        this.setState((prevState) => ({
          gallery: [...prevState.gallery, ...gallery.hits],
          page: prevState.page + 1,
        }))
      )
      .then(() => smoothScroll());
  };

  openModalHandler = (largeImageURL, alt) => {
    this.setState({
      largeImageURL: largeImageURL,
      alt: alt,
    });
  };

  closeModalHandler = () => {
    this.setState({
      largeImageURL: "",
      alt: "",
    });
  };

  render() {
    if (this.state.status === "idle") {
      return <Button className={styles.hidden} />;
    }

    if (this.state.status === "pending") {
      return <Loader />;
    }

    if (this.state.status === "rejected") {
      return <p>{this.state.error}</p>;
    }

    if (this.state.status === "resolved") {
      return (
        <div className={styles.galleryContainer}>
          <ul className={styles.imageGallery}>
            {this.state.gallery.map((item) => (
              <ImageGalleryItem
                key={item.id}
                alt={item.tags}
                webformatURL={item.webformatURL}
                largeImageURL={item.largeImageURL}
                click={this.openModalHandler}
              />
            ))}
          </ul>
          <div className={styles.btnContainer}>
            <Button
              className={styles.button}
              btnName="Load more"
              onClick={this.loadMoreHandler}
            />
          </div>
          {this.state.largeImageURL && (
            <Modal
              close={this.closeModalHandler}
              largeImageURL={this.state.largeImageURL}
              alt={this.state.alt}
            />
          )}
        </div>
      );
    }
  }
}

export { ImageGallery };
