import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ball from "./ball.jpg";

class Home extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res);
      this.setState({
        posts: res.data.slice(0, 30),
      });
    });
  }

  render() {
    const { posts } = this.state;

    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className='post card' key={post.id}>
            <div className='card-content'>
              <Link to={"/" + post.id}>
                <h3 className='card-title red-text img-responsive'>
                  {post.title}
                </h3>
              </Link>
              <img src={ball} alt='ball point' />
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className='center'>
        <div class='preloader-wrapper big active'>
          <div class='spinner-layer spinner-blue'>
            <div class='circle-clipper left'>
              <div class='circle'></div>
            </div>
            <div class='gap-patch'>
              <div class='circle'></div>
            </div>
            <div class='circle-clipper right'>
              <div class='circle'></div>
            </div>
          </div>

          <div class='spinner-layer spinner-red'>
            <div class='circle-clipper left'>
              <div class='circle'></div>
            </div>
            <div class='gap-patch'>
              <div class='circle'></div>
            </div>
            <div class='circle-clipper right'>
              <div class='circle'></div>
            </div>
          </div>

          <div class='spinner-layer spinner-yellow'>
            <div class='circle-clipper left'>
              <div class='circle'></div>
            </div>
            <div class='gap-patch'>
              <div class='circle'></div>
            </div>
            <div class='circle-clipper right'>
              <div class='circle'></div>
            </div>
          </div>

          <div class='spinner-layer spinner-green'>
            <div class='circle-clipper left'>
              <div class='circle'></div>
            </div>
            <div class='gap-patch'>
              <div class='circle'></div>
            </div>
            <div class='circle-clipper right'>
              <div class='circle'></div>
            </div>
          </div>
        </div>
      </div>
    );
    return (
      <div className='container home'>
        <h4 className='center'>HOME</h4>
        {postList}
      </div>
    );
  }
}

export default Home;
