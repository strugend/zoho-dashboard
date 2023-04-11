import React from 'react';
import { Tooltip } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <>
        {/* <p>Sometimes you need to allow users to select text within a <span style={{textDecoration: "underline", color:"blue"}} href="#" id="DisabledAutoHideExample">tooltip</span>.</p> */}
        <i className='bi-question-octagon m-2' id="DisabledAutoHideExample"></i>
        <Tooltip placement="top" isOpen={this.state.tooltipOpen} autohide={false} target="DisabledAutoHideExample" toggle={this.toggle}>
          Try to select this text!
        </Tooltip>
      </>
    );
  }
}