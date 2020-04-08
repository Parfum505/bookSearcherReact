import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchInput from "./components/SearchInput";
import Gallery from "./components/Gallery";

class App extends Component {
    constructor(props) {
        super(props);
        this.changeInput = this.changeInput.bind(this);
        this.search = this.search.bind(this);
        this.state = {
            query: '',
            errors: '',
            items: []
        }
    }
    search () {
        this.setState({items: [], errors: ''});
        const spinner = document.querySelector('.loader');
        spinner.classList.add('active');
        const url = 'https://www.googleapis.com/books/v1/volumes?maxResults=40&q=';
        fetch(`${url}${this.state.query}`, {method: "GET"})
            .then(respons=>respons.json())
            .then(result=>{
                spinner.classList.remove('active');
                let {items} = result;
                if (items) {
                    this.setState({items});
                } else {
                    this.setState({
                        errors: 'Can\'t find this book, try to change your request.'
                    });

                }
            })
            .catch((error) => {
            });
    }
    changeInput (val) {
        this.setState({query: val});
    }
    keyPress (event) {
        if(event.key === 'Enter') this.search();
    }
  render() {
    return (
        <div className="bookSearcher">
          <h1 className="mb-4 mt-4">Book Searcher</h1>
            <SearchInput
                change={this.changeInput}
                search={this.search}
                press={this.keyPress}
            />
            <span className="loader">&nbsp;</span>
            <Gallery items={this.state.items} error={this.state.errors}/>
        </div>
    )
  }
}

export default App;
