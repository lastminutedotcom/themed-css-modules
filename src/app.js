import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Header } from './header/header';
import { Title } from './title/title';
import styles from './mainLayout.scss';

class Hello extends React.Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Title/>
            </Fragment>
        );
    }
}

ReactDOM.render(<Hello className={styles}/>, document.getElementById('app'));
