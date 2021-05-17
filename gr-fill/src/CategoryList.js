import React, { Component } from "react";
import { ListGroupItem, ListGroup } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((Response) => Response.json())
      .then((data) => this.setState({ categories: data }));
  };

  render() {
    return (
      <diV>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              active={
                category.categoryName === this.props.currentCategory
                  ? true
                  : false
              }
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {" "}
              {category.categoryName}{" "}
            </ListGroupItem>
          ))}
        </ListGroup>
        <br></br>
        <h4>{this.state.currentCategory}</h4>
      </diV>
    );
  }
}
