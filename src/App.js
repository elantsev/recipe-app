import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Recipies from "./components/Recipies";

export const API_KEY = "64ce5ed9e55744a0950f04bd2e83cafa";

class App extends Component {
  state = {
    recipes: []
  };

  getRecipe = async e => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/http://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`
    );
    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
  };

  componentDidMount() {
    let recipes = JSON.parse(localStorage.getItem("recipes"));
    console.log(recipes);
    if (recipes) {
      this.setState({ recipes: [...recipes] });
    }
  }

  componentDidUpdate() {
    if (this.state.recipes.length > 0) {
      const recipes = JSON.stringify(this.state.recipes);
      localStorage.setItem("recipes", recipes);
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipies recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
