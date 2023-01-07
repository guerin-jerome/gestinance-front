import { Button, Checkbox, Input, Typography } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { AuthenticationPage } from '../../types/AuthenticationPage'
import {
  FORM_FIELD_PASSWORD,
  FORM_FIELD_REMEMBER_ME,
  FORM_FIELD_USERNAME,
} from '../../constants'
import '../common.css'
import './Login.css'

const { Title, Paragraph, Link } = Typography

export const Login = ({
  handleClickOtherMode,
  handleChangeValue,
  handleSubmit,
  fieldsOnError,
  isLoading,
}: AuthenticationPage) => {
  return (
    <form className="authentication--form" onSubmit={handleSubmit}>
      <Title className="authentication--form_title" level={3}>
        Login
      </Title>
      <div className="authentication--form_fields">
        <Input
          name={FORM_FIELD_USERNAME}
          size="large"
          placeholder="Username"
          prefix={<UserOutlined />}
          status={fieldsOnError.includes(FORM_FIELD_USERNAME) ? 'error' : ''}
          onChange={handleChangeValue}
        />
        <Input
          name={FORM_FIELD_PASSWORD}
          size="large"
          placeholder="Password"
          prefix={<LockOutlined />}
          status={fieldsOnError.includes(FORM_FIELD_PASSWORD) ? 'error' : ''}
          onChange={handleChangeValue}
        />
      </div>
      <div id="login--form_actions">
        <Checkbox name={FORM_FIELD_REMEMBER_ME}>Remember me</Checkbox>
        <Link>Forgot password</Link>
      </div>
      <Button
        className="authentication--form_submit"
        type="primary"
        htmlType="submit"
        loading={isLoading}
        block
      >
        Login
      </Button>
      <Paragraph>
        Or <Link onClick={handleClickOtherMode}>register now</Link> !
      </Paragraph>
    </form>
  )
}
