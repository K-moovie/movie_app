import React from 'react';
import PropTypes from "prop-types";

/*
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
*/

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

class Practice extends React.Component {
  constructor(props) { // JavaScript
    super(props);
    console.log("I'm constructor");
  }

  state = { // 바꾸고 싶은 data는 state에 
    count: 0
  };

  // JavaScript Code
  add = () => {
    console.log("add");
    this.setState(current => ({count: current.count + 1}));
    // !! setState 호출 시 react는 state를 refresh하고 render function을 호출한다.
    // this.state.count + 1d은 추천하지 않음 (의존성 문제)

  };


  minus = () => {
    console.log("minus");
    this.setState(current => ({count: current.count - 1}));
  };

  componentDidMount() { // component가 render 되었다는 것을 알림  
    console.log("component rendered");
  }

  componentDidUpdate() {
    console.log("I just updated!");
  }

  componentWillUnmount() { // component가 죽을 때
    console.log("Goodbye, cruel world");
  }

  render() { 
    console.log("I'm rendering");
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

export default Practice;