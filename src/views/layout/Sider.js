import React,{Component}  from 'react'
import CustomMenu from '../../components/customMenu/CustomMenu.js'
import menu from '../../utils/menu.js'
import {Layout } from 'antd'

const {Sider} = Layout

class LayoutSlide extends  Component{      
      onClick=item=>{
          this.props.history.push(item.key)
      }
      render(){
          return (
            <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
                <div className="logo" />
                <CustomMenu {...this.props} onClick={this.onClick} value={menu}/>
            </Sider>
          )
      }
}
export default  LayoutSlide