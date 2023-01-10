import { Button, Checkbox, Input, Typography } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { AuthenticationPage } from '../../types/AuthenticationPage'
import { BUTTONS, FORM_FIELDS } from '../../constants'
import '../common.css'
import './Login.css'
import { statusError } from '../../../../utils/form'

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
          name={FORM_FIELDS.username.name}
          size="large"
          placeholder={FORM_FIELDS.username.placeholder}
          addonBefore={<UserOutlined />}
          status={statusError(fieldsOnError, FORM_FIELDS.username.name)}
          onChange={handleChangeValue}
        />
        <Input
          name={FORM_FIELDS.password.name}
          size="large"
          placeholder={FORM_FIELDS.password.placeholder}
          type="password"
          addonBefore={<LockOutlined />}
          status={statusError(fieldsOnError, FORM_FIELDS.password.name)}
          onChange={handleChangeValue}
        />
      </div>
      <div id="login--form_actions">
        <Checkbox name={FORM_FIELDS.rememberMe.name}>Remember me</Checkbox>
        <Link>Forgot password</Link>
      </div>
      <Button
        className="authentication--form_submit"
        type="primary"
        htmlType="submit"
        loading={isLoading}
        block
      >
        {BUTTONS.login.libelle}
      </Button>
      <Paragraph>
        Or <Link onClick={handleClickOtherMode}>register now</Link> !
      </Paragraph>
    </form>
  )
}
