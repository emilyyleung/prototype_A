import React from 'react';
import { List, Avatar } from 'antd';

const Rbitems = (props) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={props.data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar>{item.name.charAt(0)}</Avatar>}
            title={<a href={`/${item.id}`}>{item.name}</a>}
            description={item.description}
          />
        </List.Item>
      )}
    />
  )
}

export default Rbitems;
