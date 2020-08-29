import React from 'react';
import PropTypes from 'prop-types'

const Post = ({ post, image }) => {
// const Post = ({ title, content, author }) => {
    return (
        <div style={Styles.orangeText}>

            {/* <h3>{ title }</h3>
            <p>{ content }</p>
            <h5>Author: { author }</h5> */}

            <h3>{ post.title }</h3>
            <p>{ post.content }</p>
            <h5>Author: { post.author }</h5>
            { image && <img src={ image } alt="logo" height='51' width='51'></img> }
        </div>
    )
}

const Styles = {
    orangeText: {
        margin: 10,
        padding: '20px',
        border: '1px solid #eee'
    },
}

// ใช้ตรวจสอบ prop ที่ถูกโยนเข้ามา
// isRequired คือ จำเป็นต้องมี
Post.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.string
}

Post.defaultProps = {
    image: "/logo192.png"
}


export default Post