import React from 'react'
import PropTypes from 'prop-types'

const PostDate = ({post, publishedText = 'Published', modifiedText = 'Modified', className, showDiff = false}) => {
  const date = new Date(post.date)
  const modifiedDate = new Date(post.modified)
  const cleanDate = date.toLocaleDateString()
  const cleanModifiedDate = modifiedDate.toLocaleDateString()
  const diffDate = post.date === post.modified
  return (
    <span className={`${className} date`}>
      {cleanDate} {showDiff && !diffDate && <span>({modifiedText} {cleanModifiedDate})</span>}
    </span>
  )
}

PostDate.propTypes = {
  post: PropTypes.object,
  publishedText: PropTypes.string,
  modifiedText: PropTypes.string,
  className: PropTypes.string,
  showDiff: PropTypes.bool
}

export default PostDate
