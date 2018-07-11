import React from 'react';
import { Badge, Avatar } from 'antd';
import './Headerbar.sass'
class Headerbar extends React.Component {
  render () {
    return (
      <div className='u-header'>
        <div>
          <Badge count={99} offset={[0,50]} style={{ backgroundColor: '#a9d86e'}}>
            <span className="head-example" />
          </Badge>
          <Badge count={100} offset={[0,50]} style={{ backgroundColor: '#ff6c60'}}>
            <span className="head-example" />
          </Badge>
          <Badge count={99} overflowCount={10} offset={[0,50]} style={{ backgroundColor: '#FCB322'}}>
            <span className="head-example" />
          </Badge>
        </div>
        <div>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
          <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
        </div>
      </div>
    )
  }
}
export default Headerbar