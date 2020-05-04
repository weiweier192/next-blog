import React from 'react'
import Head from 'next/head'
import {Button} from 'antd'
import Header from '../components/Header/index.js'
const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <div>
        <button>按需引入</button>
        <Button type="primary">按需引入</Button>
      </div>
    </>
  )
}
export default Home

