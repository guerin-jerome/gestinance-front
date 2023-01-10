import { useState } from 'react'
import {
  Button,
  Checkbox,
  Radio,
  Input,
  Typography,
  Alert,
  Space,
  RadioChangeEvent,
} from 'antd'
import { BUTTONS, FORM_FIELDS, PASSWORD_NOT_EQUAL } from '../../constants'
import { AuthenticationPage } from '../../types/AuthenticationPage'
import { ChannelOfCommunication } from '../../types/Register'
import { statusError } from '../../../../utils/form'
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons'
import '../common.css'

const { Title, Paragraph, Link } = Typography

export const Register = ({
  handleClickOtherMode,
  handleChangeValue,
  handleSubmit,
  handleClickAgreement,
  isLoading,
  fieldsOnError,
}: AuthenticationPage) => {
  const [channelOfCommunication, setChannelOfCommunication] =
    useState<ChannelOfCommunication>('email')

  function onChangeChannelOfCommunication(event: RadioChangeEvent) {
    setChannelOfCommunication(event.target.value)
  }

  return (
    <form className="authentication--form" onSubmit={handleSubmit}>
      <Title className="authentication--form_title" level={3}>
        Register
      </Title>
      <div className="authentication--form_fields">
        <Input
          name={FORM_FIELDS.username.name}
          size="large"
          placeholder={FORM_FIELDS.username.placeholder}
          addonBefore={<UserOutlined />}
          onChange={handleChangeValue}
          status={statusError(fieldsOnError, FORM_FIELDS.username.name)}
        />
        <Input
          name={FORM_FIELDS.password.name}
          size="large"
          placeholder={FORM_FIELDS.password.placeholder}
          type="password"
          addonBefore={<LockOutlined />}
          onChange={handleChangeValue}
          status={statusError(fieldsOnError, FORM_FIELDS.password.name)}
        />
        <Input
          name={FORM_FIELDS.retapePassword.name}
          size="large"
          placeholder={FORM_FIELDS.retapePassword.placeholder}
          type="password"
          addonBefore={<LockOutlined />}
          onChange={handleChangeValue}
          status={statusError(fieldsOnError, FORM_FIELDS.retapePassword.name)}
        />
        {!!fieldsOnError.includes(PASSWORD_NOT_EQUAL) && (
          <Space direction="vertical">
            <Alert
              description="Your passwords do not match, please try again."
              type="error"
              showIcon
            />
          </Space>
        )}
        <Radio.Group
          name={FORM_FIELDS.channelOfCommunication.name}
          defaultValue={channelOfCommunication}
          onChange={onChangeChannelOfCommunication}
        >
          <Radio value={FORM_FIELDS.email.name}>Email</Radio>
          <Radio value={FORM_FIELDS.phone.name}>Phone</Radio>
        </Radio.Group>
        {channelOfCommunication === FORM_FIELDS.email.name && (
          <Input
            name={FORM_FIELDS.email.name}
            size="large"
            placeholder={FORM_FIELDS.email.placeholder}
            addonBefore={<MailOutlined />}
            onChange={handleChangeValue}
            status={statusError(fieldsOnError, FORM_FIELDS.email.name)}
          />
        )}
        {channelOfCommunication === FORM_FIELDS.phone.name && (
          <Input
            name={FORM_FIELDS.phone.name}
            size="large"
            placeholder={FORM_FIELDS.phone.placeholder}
            addonBefore={<PhoneOutlined />}
            onChange={handleChangeValue}
            status={statusError(fieldsOnError, FORM_FIELDS.phone.name)}
          />
        )}
        <Checkbox
          name={FORM_FIELDS.agreement.name}
          onClick={handleClickAgreement}
        >
          I have read and accept the <Link>agreement</Link>
        </Checkbox>
        {fieldsOnError.includes(FORM_FIELDS.agreement.name) && (
          <Alert
            description="You must read and accept the rules before continuing."
            type="error"
            showIcon
          />
        )}
      </div>
      <Button
        className="authentication--form_submit"
        type="primary"
        htmlType="submit"
        loading={isLoading}
        block
      >
        {BUTTONS.register.libelle}
      </Button>
      <Paragraph>
        Or <Link onClick={handleClickOtherMode}>login now</Link> !
      </Paragraph>
    </form>
  )
}
