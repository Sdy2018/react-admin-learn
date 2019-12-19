import React,{Component} from 'react'
import {Icon,Layout}from 'antd'
import  '../style/index.scss'
import LayoutSider from './layout/Sider'
const {Header,Content,Sider} = Layout


class Index extends Component {
    state = {
      collapsed: false,
    };
  
    toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    };
    
    onClick=item=>{
        this.props.history.push(item.key)
    }

    render() {
      return (
        <Layout style={{minHeight:'100vh'}}>
          <LayoutSider {...this.props} collapsed={this.state.collapsed} />
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280,
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      );
    }
  }

export default Index