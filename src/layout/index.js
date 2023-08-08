import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import "./layout.scss";
const { Header, Content, Footer } = Layout;
function layout() {
  return (
    <Layout className="layout">
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div
          className="demo-logo"
          style={{ color: "white", fontWeight: "500" }}
        >
          Thần Số Học
        </div>
      </Header>
      <Content className="content" style={{ padding: "80px 50px" }}>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Khang Vy ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default layout;
