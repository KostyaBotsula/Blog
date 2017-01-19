import React from 'react';
import { Link } from 'react-router';

const ArticlePrev = React.createClass({
  render: function() {
    return (
    	<div>
                <Link to="/article">
                    <div className="article">
                        <figure className="article-image is-3by2">
                            <img src="app/assets/img/default-article-img/default-img1.png" alt="" />
                        </figure>
                        <div className="article-body">
                            <h2 className="article-title">
                                Hello World 2
                            </h2>
                            <p className="article-content">
                                Lorem ipsum dolor sit amet feugiat facilisis.
                            </p>
                            <footer className="article-info author">
                                <Link to="/profile" className="author-content">
                                    <img src="app/assets/img/default-avatars/avatar-05.png" width="40px" height="40px"
                                         alt="" />
                                    <span> By Joe Smith</span>
                                </Link>
                                <span className="comments">42 comments</span>
                            </footer>
                        </div>
                    </div>
                </Link>
            </div>
    );
  }
});

export default ArticlePrev;