import React, { useEffect } from 'react'
import {
  HomeOutlined,
  UnorderedListOutlined,
  EditOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import { Layout, Menu, Popconfirm, theme } from 'antd'
import 'normalize.css'
import './index.scss'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserApi } from '@/store/modules/user'
import { removeToken } from '@/utils'

const { Header, Sider } = Layout

const leftNav = [
  {
    key: '/',
    label: '首页',
    icon: <HomeOutlined />,
    path: '/',
  },
  {
    key: '/publish',
    label: '发布文章',
    icon: <EditOutlined />,
    path: '/publish',
  },
  {
    key: '/article',
    label: '我的文章',
    icon: <UnorderedListOutlined />,
    path: '/article',
  }
]

const GlobalLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  const navigate = useNavigate()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserApi())
  }, [dispatch])
  const conUser = useSelector(state => state.user.currentUser.name)

  function jumpNav(item) {
    navigate(item.key)
  }

  function logout() {
    removeToken()
    navigate('/login')
  }

  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className='demo-logo' />
        <div className='user-info'>
          <span className='user-name' >{conUser}</span>
          <span className='user-logout'>
            <Popconfirm
              title='确认退出？'
              onText='退出'
              cancelText='取消'
              onConfirm={logout}
            >
              <LogoutOutlined />退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode='inline'
            defaultSelectedKeys={['/']}
            defaultOpenKeys={['/']}
            onClick={jumpNav}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={leftNav}
          />
        </Sider>
        <Layout
          style={{
            padding: '20',
          }}
        >
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  )
}

export default GlobalLayout