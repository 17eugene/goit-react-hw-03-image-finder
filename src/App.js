import React from "react";

import { Searchbar } from "./components/Searchbar/Searchbar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      query: "",
    };
  }

  handleFormSubmit = (query) => {
    this.setState({ query });
  };

  render() {
    return (
      <div>
        <Searchbar submit={this.handleFormSubmit} />
        <ImageGallery query={this.state.query} />
      </div>
    );
  }
}

export { App };
