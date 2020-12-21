import { Component } from 'react'
import { Footer, Header, Content } from 'antd/lib/layout/layout'
// import Layout from 'antd/lib/layout/layout'
import HeaderContent from './HeaderContent'
import Logo from './logo'
import { UserOutlined,LikeOutlined, DownOutlined, SettingOutlined, EditOutlined, EllipsisOutlined, } from '@ant-design/icons'
import { Avatar, Col, Row, Input, Menu, Dropdown, Layout, Card, Tag } from 'antd'
import './App.css'
const { Search } = Input
const { Sider } = Layout
const { Meta } = Card
const tabList = [
  {
    key: 'tab1',
    tab: 'code',
  },
  {
    key: 'tab2',
    tab: 'article',
  },
]

const contentList = {
  tab1: <p>用爬虫在全网范围内检索 Intellij IDEA 的优秀文章，聚合在此。平台包括 「CSDN」「掘金」「简书」「知乎」「SegmentFault」「博客园」「开源中国」「慕课手记」，相信无论你对 Intellij IDEA 目前了解到什么程度，这个项目都能帮到你。</p>,
  tab2: <p>Dynamic datasource, multiple datasource of spring boot/ distribution transaction; spring boot 多数据源，动态数据源，分布式事务</p>,
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      key: 'tab1',
      noTitleKey: 'app',
    }
  }

  onTabChange = (key, type) => {
    console.log(key, type)
    this.setState({ [type]: key })
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a href="">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">3rd menu item</Menu.Item>
      </Menu>
    )
    return (
      <Layout>
        <Header style={{ height: '70px', background: '#001529' }}>
          <Row gutter={1}>
            <Col span={2}>
              <Avatar
                size='large' icon={<UserOutlined />}
              >
              </Avatar>
            </Col>
            <Col span={7}>
              <Search
                placeholder="input search text"
                allowClear
                style={{
                  width: '400px',
                  margin: '20px',
                }}
                bordered={true}
                onBlur={this.getFocus}
              />
            </Col>
            <Col span={11}>
              <HeaderContent />
            </Col>
            <Col span={4}>
              <div>
                <Avatar size='large' icon={<UserOutlined />}>
                </Avatar>
                <Dropdown overlay={menu} trigger={['click']}
                >
                  <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Click me <DownOutlined />
                  </a>
                </Dropdown>
                <Dropdown overlay={menu} trigger={['click']}
                >
                  <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Click me <DownOutlined />
                  </a>
                </Dropdown>
              </div>
            </Col>
          </Row>
        </Header>
        <Layout>
          <Sider
            theme='light'
            className="site-layout-background"
            width={300}
          >
            <Card
              style={{ width: 300, marginTop: '30px' }}
              hoverable={true}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                style={{ height: '100px' }}
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="Whlsky"
                description="This is the description"
              />
            </Card>
          </Sider>
          <Content
            style={{
              backgroundColor: 'white',
              marginRight: '100px',
              marginLeft: '50px'
            }}
            className='site-layout-background'>
            <Card
              extra={<div><LikeOutlined style={{ fontSize: '20px', marginRight: '20px', marginTop: '30px' }} /></div>}
              type='inner'
              hoverable={true}
              style={{ width: '100%', marginTop: '30px' }}
              title="xiaoxiunique / awesome-IntelliJ-IDEA"
              tabList={tabList}
              bordered={true}
              activeTabKey={this.state.key}
              onTabChange={key => {
                this.onTabChange(key, 'key');
              }}
              actions={[
              <div style={{ marginLeft: '10px' }}>
                <Tag color="#55acee">
                  Java
                </Tag>,
                <Tag color="#cd201f">
                  Idea
                </Tag>,
                <Tag  color="#55acee">
                  数据库
                </Tag>,
                <Tag color="#cd201f">
                  多线程
                </Tag>,
                <Tag color="#55acee">
                  Spring
                </Tag>,
                <Tag color="#cd201f">
                  Mybatis
                </Tag>,
                <Tag color="#3b5999">
                  SpringMVC
                </Tag>,
                <Tag color="#55acee">
                  Tomcat
                </Tag>
              </div>
              ]}
            >
              {contentList[this.state.key]}
            </Card>
            <Card
              hoverable={true}
              style={{ width: '100%', marginTop: '30px' }}
              title="xiaoxiunique / awesome-IntelliJ-IDEA"
              tabList={tabList}
              activeTabKey={this.state.key}
              onTabChange={key => {
                this.onTabChange(key, 'key');
              }}
              extra={<div><LikeOutlined style={{ fontSize: '20px', marginRight: '20px' }} /></div>}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              {contentList[this.state.key]}
            </Card><Card
              hoverable={true}
              style={{ width: '100%', marginTop: '30px' }}
              title="xiaoxiunique / awesome-IntelliJ-IDEA"
              tabList={tabList}
              activeTabKey={this.state.key}
              onTabChange={key => {
                this.onTabChange(key, 'key');
              }}
              extra={<div><LikeOutlined style={{ fontSize: '20px', marginRight: '20px' }} /></div>}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              {contentList[this.state.key]}
            </Card>
            <Card
              hoverable={true}
              style={{ width: '100%', marginTop: '30px' }}
              title="xiaoxiunique / awesome-IntelliJ-IDEA"
              tabList={tabList}
              activeTabKey={this.state.key}
              onTabChange={key => {
                this.onTabChange(key, 'key');
              }}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
              extra={<div><LikeOutlined style={{ fontSize: '20px', marginRight: '20px' }} /></div>}
            >
              {contentList[this.state.key]}
            </Card>
          </Content>
        </Layout>
      </Layout>
    )
  }
}
export default App
