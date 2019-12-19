import React,{Component} from 'react'
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;



class MyMenu extends Component{

    state={
        openKeys:'',
        selectedKeys:''
    }
    handleMenuItemClick=item=>{
        this.setState({
            selectedKeys:item.key
        })
        this.props.onClick(item)
    }
    componentWillMount (){
        const item= this.props.history.location
        this.setMenuStatus(item)
    }
    componentDidMount(){
        console.log('-------------')
        this.props.history.listen(item=>{
            //分割路由
            this.setMenuStatus(item)
        })
    }
    setMenuStatus=item=>{
        let openKeys = ['/'+ item.pathname.split('/')[1]]

        this.setState({
            selectedKeys:item.pathname
        })
        this.setState({
            openKeys
        })
    }
    onOpenChange=openKeys=>{
        if(openKeys.length===0||openKeys.length===1){
            this.setState({
                openKeys
            })
        }else{
            this.setState(
                {
                    openKeys: [openKeys[1]]
                }
            )
        }
    }

    generateMenu=menuArr=>{
        let menu=menuArr.map(item=>{
            if(item.subs){
                return (
                    <SubMenu
                        key={item.key}
                        title={
                        <span>
                            {item.icon?<Icon type={item.icon} />:''}
                            <span>{item.title}</span>
                        </span>
                        }
                    >
                        {this.generateMenu(item.subs)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item key={item.key}>
                    {item.icon?<Icon type={item.icon} />:''}
                    <span>{item.title}</span>
                </Menu.Item>
            )
        })
        return menu
    }

    render(){
        const value = this.props.value
        const {openKeys,selectedKeys} = this.state
        return (
            <div  style={{ width: 200,height:'100vh'}}>
            <Menu
              onOpenChange={this.onOpenChange}
              mode="inline"
              theme="dark"
              onClick={this.handleMenuItemClick}
              openKeys={openKeys}
              selectedKeys={selectedKeys}
            >
                {this.generateMenu(value)}
            </Menu>
          </div>
        )
    }
}

export default MyMenu