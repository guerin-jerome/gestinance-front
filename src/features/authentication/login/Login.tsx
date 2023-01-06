import { Button, Checkbox, Input, Typography, Form } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './Login.css'

const { Title, Paragraph, Link } = Typography

export const Login = () => {
  return (
    <section className="login">
      <Form layout="vertical" className="login--form">
        <Title className="login--form_title" level={3}>
          Login
        </Title>
        <div className="login--form_fields">
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              size="large"
              placeholder="Username"
              prefix={<UserOutlined />}
            />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input
              size="large"
              placeholder="Password"
              prefix={<LockOutlined />}
            />
          </Form.Item>
        </div>
        <div className="login--form_actions">
          <Form.Item className="login--form_actions__remember-me">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Link>Forgot password</Link>
        </div>
        <Form.Item className="login--form_submit">
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
        <Paragraph>
          Or <Link>register now</Link> !
        </Paragraph>
      </Form>
    </section>
  )
}
