import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class SingPost extends Component {
  state = {
    Post: null,
  };
  componentDidMount() {
    console.log(this.props);
    let id = this.props.match.params.post_id;

    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        this.setState({
          Post: res.data,
        });
      });
  }

  render() {
    const Post = this.state.Post ? (
      <div className='post'>
        <Link className='btn btn-primary text-center' to={"/"}>
          BACK
        </Link>
        <h4 className='center'>{this.state.Post.title}</h4>
        <p>{this.state.Post.body}</p>
        <small className='red-text darken-4'>
          Post ID:{this.state.Post.id}
        </small>
      </div>
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

    return <div className='container'>{Post}</div>;
  }
}

export default SingPost;
