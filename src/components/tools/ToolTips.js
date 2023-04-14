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
    {console.log(this.props.class)}
    return (
      <>
        {/* <p>Sometimes you need to allow users to select text within a <span style={{textDecoration: "underline", color:"blue"}} href="#" id="DisabledAutoHideExample">tooltip</span>.</p> */}
        
        <i className={this.props.class} id={`tooltip-${this.props.name}`}></i>
        <p id={`tooltip-${this.props.name}`} className='text-center m-2'>{this.props.text}</p>
        <Tooltip placement="top" isOpen={this.state.tooltipOpen}  target={`tooltip-${this.props.name}`} toggle={this.toggle}>
          {this.props.val}
        </Tooltip>
      </>
    );
  }
}