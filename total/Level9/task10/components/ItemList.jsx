import React from 'react';
import { FixedSizeList as List } from 'react-window';

const Item = ({ index, style, data }) => (
  <div style={style}>{data[index]}</div>
);

const ItemList = ({ items }) => (
  <List
    height={400}
    itemCount={items.length}
    itemSize={30}
    width={'100%'}
    itemData={items}
  >
    {Item}
  </List>
);

export default React.memo(ItemList);
