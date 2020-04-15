import React from 'react';
import PropTypes from "prop-types";

const foodILike =[
  {
    id: 1,
    name: "Kimchi",
    image: "",
    rating: 5
  },
  {
    id: 2,
    name: "Ramen",
    image: "",
    rating: 4
  },
  {
    id: 3,
    name: "Samgeopsal",
    image: "",
    rating: 6
  }
]

function Food({name, picture, rating}) { // props 인자는 any
  //console.log({name});
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

/*
function App() {
  return ( // return하는 HTML
    <div>
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}
*/

class App extends React.Component {
  state = { // 바꾸고 샆은 data는 state에 
    count: 0
  };

  // JavaScript Code
  add = () => {
    console.log("add");
  };

  minus = () => {
    console.log("minus");
  };

  render() { 
    // this.add는 클릭할 때만, this.add()는 항상 
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
