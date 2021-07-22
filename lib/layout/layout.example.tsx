import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import './layout.scss';
import './layout.examplex.scss'
import Aside from './aside';

export default function () {
  return (
    <div>
      <div>
        <h1>第一个例子</h1>
        <Layout className="hi" style={{width:500,height:500}}>
          <Header className='x'>header</Header>
          <Content className='y'>content</Content>
          <Footer className='x'>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第二个例子</h1>
        <Layout className="hi" style={{width:500,height:500}}>
          <Header className='x'>header</Header>
          <Layout>
            <Aside className='z'>aside</Aside>
            <Content className='y'>content</Content>
          </Layout>
          <Footer className='x'>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第三个例子</h1>
        <Layout className="hi" style={{width:500,height:500}}>
          <Header className='x'>header</Header>
          <Layout>
            <Content className='y'>content</Content>
            <Aside className='z'>aside</Aside>
          </Layout>
          <Footer className='x'>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第四个例子</h1>
        <Layout style={{width:500,height:500}}>
          <Aside className='z'>aside</Aside>
          <Layout className="hi">
            <Header className='x'>header</Header>
            <Content className='y'>content</Content>
            <Footer className='x'>footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );

}