import { Component } from 'react'
import { Menu } from 'antd'

const { SubMenu } = Menu

class HeaderContent extends Component {
    state = {
        current: 'mail'
    };

    handleClick = e => {
        console.log('click ', e)
        this.setState({ current: e.key })
    };

    render() {
        const { current } = this.state;
        return (
                <Menu onClick={this.handleClick} 
                    mode='horizontal' theme='dark'
                    style={{ textAlign: 'center' }}
                >
                    <Menu.Item key='mail' style={{ }}>
                        Pull request
                </Menu.Item>
                    <Menu.Item key='app'>
                        Issues
                </Menu.Item>
                    <SubMenu key='SubMenu' title='Marketplace'>
                        <Menu.ItemGroup title="Item 1">
                            <Menu.Item key="setting:1">Option 1</Menu.Item>
                            <Menu.Item key="setting:2">Option 2</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="Item 2">
                            <Menu.Item key="setting:3">Option 3</Menu.Item>
                            <Menu.Item key="setting:4">Option 4</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <Menu.Item key="Explore">
                        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                            Navigation Four - Link
                    </a>
                    </Menu.Item>
                </Menu>
        )
    }
}
export default HeaderContent