import React, { Component } from 'react'

interface Props {
    blog: any,
    user: any,
}

class Blog extends Component<Props> {
  render() {
    const { blog, user } = this.props;
    const { content } = blog;
    const { fName, lName } = user;
    return (
        <article className={``}>
            <header></header>
            <main>
                <p></p>
                <img src={content} alt="" />
            </main>
            <footer></footer>
        </article>
    )
  }
}

export default Blog;