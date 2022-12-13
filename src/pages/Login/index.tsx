import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Form, Image, Input, theme, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./login.module.scss";

const LoginPage: React.FC = () => {
  const { token } = theme.useToken();
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={classes.form__wrapper}>
      <Image src="/img/eadlogo.png" alt="Ead" preview={false} width={110} />
      <Typography.Title
        level={3}
        style={{
          textAlign: "center",
          color: token.colorPrimary,
          margin: "10px 0px 30px 0px",
        }}
      >
        PROJECT MONITORING UNIT OF FOREIGN- <br />
        FUNDED PROJECTS(PMU-FFP)
      </Typography.Title>
      <Card
        style={{
          maxWidth: 420,
          boxShadow: "0px 5px 12px rgba(33, 44, 230, 0.12)",
          width: "100%",
        }}
      >
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          requiredMark={false}
          size="large"
        >
          <Typography.Title style={{ textAlign: "center" }}>
            Sign In
          </Typography.Title>
          <Form.Item
            label={<Typography.Text strong>User ID</Typography.Text>}
            name="username"
            rules={[{ required: true, message: "Please input your user id!" }]}
          >
            <Input
              prefix={
                <UserOutlined style={{ color: token.colorTextPlaceholder }} />
              }
              placeholder="User ID"
            />
          </Form.Item>

          <Form.Item
            label={<Typography.Text strong>Password</Typography.Text>}
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              prefix={
                <LockOutlined style={{ color: token.colorTextPlaceholder }} />
              }
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item noStyle>
            <div style={{ textAlign: "right", marginBottom: 10 }}>
              <Link to="#">
                <Typography.Text strong underline>
                  Forgot password?
                </Typography.Text>
              </Link>
            </div>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
