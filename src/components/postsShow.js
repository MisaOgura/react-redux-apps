import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost, deletePost } from '../actions/index'
import _ from 'lodash'
import { Link } from 'react-router-dom'

class PostsShow extends Component {
  componentDidMount () {
    if (!this.props.post) {
      const { id } = this.props.match.params
      this.props.fetchPost(id)
    }
  }

  onDeleteClick () {
    const { id } = this.props.match.params
    // calls action creator
    this.props.deletePost(id, () => {
      this.props.history.push('/')
    })
  }

  renderPost (post) {
    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }



  render () {
    const { post } = this.props

    return (
      <div>
        <Link to='/' className='btn btn-primary'>Back to Top</Link>
        <button
          className='btn btn-danger pull-xs-right'
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
        {_.isEmpty(this.props.post)
          ? <p>Loading...</p>
          : <div>{this.renderPost(post)}</div>
        }
      </div>
    )
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] }
}

export default connect(
  mapStateToProps,
  { fetchPost, deletePost }
)(PostsShow)