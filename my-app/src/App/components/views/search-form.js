import React, { Component } from 'react';

export default class extends Component {
    getQuery() {
        return this.refs.search.value;
    }

    render() {
        return (
            <form onSubmit={this.props.search} className="search">
                <input type="text" ref="search" placeholder="Search" />
                <button>Search</button>
            </form>
        );
    }
}
