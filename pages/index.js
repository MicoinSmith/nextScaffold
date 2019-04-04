import React, { Component } from 'react';
import render from 'react-dom';
import { Layout } from 'antd';
import Hello from '@/components/Hello';

const {
  Header, Footer, Sider, Content,
} = Layout;

export default class Index extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
    };
  }

  render(){

    return (
      <div>
        <Hello />
      </div>
    );
  }
}
