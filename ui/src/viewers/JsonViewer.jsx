import React, { Component } from 'react';

import './JsonViewer.scss';

class JsonViewer extends Component {
  render() {
    const { document, dir } = this.props;
    return (
      <div className="outer">
        <div className="inner JsonViewer" dir={dir}>
          <pre>{JSON.stringify(document, null, 2)}</pre>
        </div>
      </div>
    );
  }
}

export default JsonViewer;
