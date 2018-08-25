import React from 'react'
import PropTypes from 'prop-types'

const PostDate = ({post, publishedText = 'Published', modifiedText = 'Modified', className}) => {
  const date = new Date(post.date)
  const modifiedDate = new Date(post.modified)
  const cleanDate = date.toLocaleDateString()
  const cleanModifiedDate = modifiedDate.toLocaleDateString()
  const diffDate = post.date === post.modified
  return (
    <div className={`${className} date`}>
      <span>{publishedText} {cleanDate}</span> {!diffDate && <span>({modifiedText} {cleanModifiedDate})</span>}
    </div>
  )
}

PostDate.propTypes = {
  post: PropTypes.object,
  publishedText: PropTypes.string,
  modifiedText: PropTypes.string,
  className: PropTypes.string
}

export default PostDate
