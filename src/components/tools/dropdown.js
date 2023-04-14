import Dropdown from 'react-bootstrap/Dropdown';

function CustomDropdown(props) {
  return (
    
    <Dropdown >
      <Dropdown.Toggle id={`dropdown-${props.key}`}>
        {props.name}
        <i className={props.icon}/>
      </Dropdown.Toggle>
      
      <Dropdown.Menu variant="dark">
      <Dropdown.Header className='text-muted'>{props.header}</Dropdown.Header>
        {props.menu.map((item,key)=>{
            return(
                <Dropdown.Item href="#/action-1" key={key}>{item.name}</Dropdown.Item>
            )
        })}
        
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CustomDropdown;