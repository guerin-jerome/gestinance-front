import { Button, Checkbox, Radio, Input, Typography } from 'antd'
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'
import '../common.css'
import { MouseEventHandler } from 'react'

const { Title, Paragraph, Link } = Typography

export const Register = ({
  handleClickOtherMode,
}: {
  handleClickOtherMode: MouseEventHandler<HTMLElement>
}) => {
  return (
    <section className="authentication--form">
      <Title className="authentication--form_title" level={3}>
        Register
      </Title>
      <div className="authentication--form_fields">
        <Input size="large" placeholder="Username" prefix={<UserOutlined />} />
        <Input size="large" placeholder="Password" prefix={<LockOutlined />} />
        <Input
          size="large"
          placeholder="Retape password"
          prefix={<LockOutlined />}
        />
        <Radio.Group defaultValue="email">
          <Radio value="email">Email</Radio>
          <Radio value="phone">Phone</Radio>
        </Radio.Group>
        <Input size="large" placeholder="Email" prefix={<MailOutlined />} />
        <Checkbox>
          I have read and accept the <Link>agreement</Link>
        </Checkbox>
      </div>
      <Button
        className="authentication--form_submit"
        type="primary"
        htmlType="submit"
        block
      >
        Register
      </Button>
      <Paragraph>
        Or <Link onClick={handleClickOtherMode}>login now</Link> !
      </Paragraph>
    </section>
  )
}
