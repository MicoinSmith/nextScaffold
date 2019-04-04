import React, { Component } from 'react';
import { Card } from 'antd';

const { Meta } = Card;

export default class Hello extends Component {
  render(){
    return (
      <Card
        hoverable={true}
        style={{ width: 240, margin: 'auto', marginTop: '120px' }}
        headStyle={{ textAlign: 'center' }}
        cover={<img alt='example' src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' />}
      >
        <Meta
          title='Next Scaffold'
          description='一个基于Next react的脚手架'
        />
      </Card>
    );
  }
}
