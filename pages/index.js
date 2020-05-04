import React from 'react'
import Head from 'next/head'
import {Button} from 'antd'
// import App from './_app.js'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <button>按需引入</button>
        <Button type="primary">按需引入</Button>
      </div>
    </>
  )
}
export default Home

