import React from "react";

import {
    Card,
    CardHeader,
    CardBody,
    Container,
    Row,
    Col,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    ButtonDropdown,
    UncontrolledTooltip
  } from "reactstrap";

const Items=()=>{
    return(
        <>
            <ButtonDropdown >
                <DropdownToggle caret color="primary">
                    Text
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
            <h1>this is items file</h1>
        </>
    )
}
 export default Items;