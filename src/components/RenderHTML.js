import React from 'react';

const RenderHTML = class extends React.Component {
  render() {
    return <span dangerouslySetInnerHTML={{ __html: this.props.children }} />;
  }
};

export default RenderHTML;
