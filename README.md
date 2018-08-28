# wp-react-coponents

Simple helper components in React, that takes values WordPress posts.

## Install and use
    npm install @jonasknutsen/wp-react-components

    import React from 'react'
    import {PostDate} from '@jonasknutsen/wp-react-components'

    export default class Example extends React.Component {
      const {post} = this.props
      render () {
        return (
          <div>
            <PostDate post={post} />
          </div>
        )
      }
    }

## Components
### PostDate
Props | Value | Default | Required | Comment
----- | ----- | ------- | -------- | -------
post | object | | true | The WordPress post
publishedText | string | 'Published' | false | Text before published date
modifiedText | string | 'Modified' | false | Text before modified date
className | string | | false | Class name for outer div

### PostDateInline
Props | Value | Default | Required | Comment
----- | ----- | ------- | -------- | -------
post | object | | true | The WordPress post
publishedText | string | 'Published' | false | Text before published date
modifiedText | string | 'Modified' | false | Text before modified date
className | string | | false | Class name for outer span
showDiff | bool | false | false | Show modified date, if applicable
