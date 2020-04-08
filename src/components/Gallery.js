import React, { Component } from 'react';

class Gallery extends Component {

    render() {
        let books;
        if (this.props.items.length){
            books = this.props.items.map((item, key)=>{
                let {title, imageLinks, authors, infoLink} = item.volumeInfo;
                let imgUrl, allAuthors;
                if (imageLinks && imageLinks.thumbnail) {
                    imgUrl = imageLinks.thumbnail;
                } else {
                    imgUrl = '/img/book.png';
                }
                if (authors) {
                    const lastIndex = authors.length - 1;
                    allAuthors = authors.map((author, i) => {
                        if (lastIndex === i) {
                            return (<span key={i}>{author}</span>)
                        } else {
                            return (<span key={i}>{author}, </span>)
                        }
                    });
                }
                return (
                    <a key={key} className="book" href={infoLink} target="_blank" rel="noopener noreferrer">
                        <div className="book_img">
                            <img src={imgUrl} alt="book"/>
                            <div className="book_title-wrap">
                                <p className="book_title ellipsis">{title}</p>
                            </div>
                        </div>
                        <p className="book_author ellipsis">
                            <span className="d-block">Authors:</span>{allAuthors}
                        </p>
                    </a>
                )
            });
        }
         
        return (
            <div className="search-result container mt-5">
                <div className="row justify-content-center">{books}</div>
                <div className="row justify-content-center e"><span className="error">{this.props.error}</span></div>
            </div>
        );
    }
}

export default Gallery;