import React, { Component } from 'react';
import page from 'asset/imgs/noPage.jpg';

export default class NoPage extends Component {
    render() {
        return (
            <div>
                <img src={page} alt=""/>
            </div>
        )
    }
}
