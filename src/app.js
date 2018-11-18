import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import styles from './mainLayout.scss';

class Hello extends React.Component {
    render() {
        return (
            <Fragment>
                <header>TSC (Poc)</header>
                <h1>Hello world...</h1>
            </Fragment>
        );
    }
}

ReactDOM.render(<Hello className={styles}/>, document.getElementById('app'));
