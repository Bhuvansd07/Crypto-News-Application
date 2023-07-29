import React from 'react';
import { Routes, Route, Link, } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import  Navbar  from './compenents/Navbar';
import  Exchanges  from './compenents/Exchanges';
import  Homepage  from './compenents/Homepage';
import  Cryptocurrencies  from './compenents/Cryptocurrencies';
import  News  from './compenents/News';
import  CryptoDetails  from './compenents/CryptoDetails';
import './App.css';

const App = () => {
  return (
    <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route exact path="/exchanges" element={<Exchanges />} />
                <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
                <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
                <Route exact path="/news" element={<News />} />
              </Routes>
            </div>
          </Layout>
          <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "#fff", textAlign: "center" }}
          >
            Cryptoverse <br />
            Created by Bhuvan Sood
          </Typography.Title>
              <Space>
                <Link to="/">Home</Link>
                <Link to="/exchnages">Exchanges</Link>
                <Link to="/news">News</Link>
              </Space>
          </div>
        </div>
    </div>
  )
}

export default App
