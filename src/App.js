import React from "react";
import axios from "axios";

class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };

    getMovies = async () => { // 비동기(async), await 기다려라
        const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    }

    componentDidMount() {
        // setTimeout(() => {
        //    this.setState({isLoading: false});
        //}, 5000);
        // timeout은 JavaScript 함수
        this.getMovies();
    }

    render() {
        const { isLoading } = this.state;
        return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
    // ? : 연산자는 JavaScript
    };
}

export default App;