import { Button, Checkbox, Input, Typography, Form } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import '../common.css'
import './Login.css'

const { Title, Paragraph, Link } = Typography

export const Login = () => {
  return (
    <section className="authentication--form">
      <Title className="authentication--form_title" level={3}>
        Login
      </Title>
      <div className="authentication--form_fields">
        <Input size="large" placeholder="Username" prefix={<UserOutlined />} />
        <Input size="large" placeholder="Password" prefix={<LockOutlined />} />
      </div>
      <div id="login--form_actions">
        <Checkbox>Remember me</Checkbox>
        <Link>Forgot password</Link>
      </div>
      <Button
        className="authentication--form_submit"
        type="primary"
        htmlType="submit"
        block
      >
        Login
      </Button>
      <Paragraph>
        Or <Link>register now</Link> !
      </Paragraph>
    </section>
  )
}
