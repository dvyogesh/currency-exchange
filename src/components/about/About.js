import React, { Component } from 'react';

import { imagePath } from '../../utils/assetUtils';
import styles from './about.module.scss';

class About extends Component {
  render() {
    return (
      <div className={styles.textCenter}>
        <h1 className={styles.title}>About page</h1>
        <p>Route Example</p>
        <div >
          <img className={styles.reactLogo} src={imagePath('react.svg')} alt="" />
        </div>
        <h2>Developer Story </h2>
        <div>
          <img className={styles.reactLogo} src={imagePath('developer-story.png')} alt="" />
        </div>
      </div>
    );
  }
}

export default About;
