import React from 'react';

const RenderHTML = class extends React.Component {
  render() {
    return (
      <span
        className={this.props.className}
        dangerouslySetInnerHTML={{ __html: this.props.children }}
      />
    );
  }
};

export default RenderHTML;
