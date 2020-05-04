import React from 'react'

import { Row, Col, Menu, Icon } from 'antd'
import './index.css'

const Header = () => {
  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col className="header-title" xs={24} sm={24} md={10} log={10} xl={10}>
          <span className="header-logo">Aweiweier192</span>
          <span className="header-slogan">热爱前端开发</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal">
            <Menu.Item key="home">
              <Icon type="home" /> index
            </Menu.Item>
            <Menu.Item key="video">
              <Icon type="home" /> video
            </Menu.Item>
            <Menu.Item key="life">
              <Icon type="home" /> life
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  )
}
export default Header