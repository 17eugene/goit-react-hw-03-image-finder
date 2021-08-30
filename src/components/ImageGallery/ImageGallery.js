import React from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { Button } from "../Button/Button";
import { Loader } from "../Loader/Loader";
import { Modal } from "../Modal/Modal";

const KEY = "22456437-7bc40aa948e36a9aa215a1147";

class ImageGallery extends React.Component {
  constructor() {
    super();

    this.state = {
      status: "idle",
      page: null,
      gallery: null,
      // error: null,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const URL = `https://pixabay.com/api/?q=${this.props.query}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    if (prevProps.query !== this.props.query) {
      this.setState({ status: "pending" });

      fetch(URL)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error("Something gone wrong"));
        })
        .then((gallery) => {
          if (gallery.total === 0) {
            return this.setState({
              error: "Image(s) not found",
              status: "rejected",
            });
          }
          return this.setState({
            gallery: gallery.hits,
            page: 1,
            status: "resolved",
          });
        })
        .catch((error) => this.setState({ error, status: "rejected" }));
    }
  }

  openModalHandler = (e) => {
    this.setState({
      largeImageURL: e.target.dataset.source,
      alt: e.target.alt,
    });
  };

  closeModalHandler = () => {
    this.setState({
      largeImageURL: "",
      alt: "",
    });
  };

  loadMoreHandler = (e) => {
    const pageNum = this.state.page + 1;
    const URL = `https://pixabay.com/api/?q=${this.props.query}&page=${pageNum}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('"Something gone wrong"'));
      })
      .then((gallery) =>
        this.setState((prevState) => ({
          gallery: [...prevState.gallery, ...gallery.hits],
          page: prevState.page + 1,
        }))
      )
      .then(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      });
  };

  render() {
    if (this.state.status === "idle") {
      return <Button className={"Hidden"} />;
    }

    if (this.state.status === "pending") {
      return <Loader />;
    }

    if (this.state.status === "rejected") {
      return <p>{this.state.error}</p>;
    }

    if (this.state.status === "resolved") {
      return (
        <div className="GalleryContainer">
          <ul className="ImageGallery">
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
          <div className="BtnContainer">
            <Button
              className={"Button"}
              btnName={"Load more"}
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
