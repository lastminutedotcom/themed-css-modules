import React from 'react';
import styles from './title.scss'

export const Title = () => {
    return (
        <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className={`panel-title ${styles.title}`}>Hello world...</h3>
            </div>
            <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id auctor nulla. Aenean vel volutpat lorem. Suspendisse potenti. Praesent consequat hendrerit diam, et venenatis ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla sit amet ex ut nisi vulputate faucibus sed eu nulla.</div>
        </div>
    );
};
