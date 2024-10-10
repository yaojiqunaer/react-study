import React from 'react'
import {
    Card,
    Button,
    Select,
    Input,
    Form,
    Row,
    Col,
    Checkbox
} from 'antd'
import '@/pages/Login/index.scss'

const Login = () => {
    const contryCode = ([
        {
            value: '+86',
            label: '中国 +86',
            region: '全国大陆'
        },
        {
            value: '+852',
            label: '中国香港 +852',
            region: '香港特别行政区'
        },
        {
            value: '+853',
            label: '中国澳门 +853',
            region: '澳门特别行政区'
        },
        {
            value: '+886',
            label: '中国台湾 +886',
            region: '台湾省'
        }
    ]);
    const phonePrefix = (
        <Form.Item
            name='phonePrefix'
            noStyle
            rules={[
                {
                    required: true,
                    message: '请输入您的手机号',
                },
            ]}>
            <Select defaultValue='+86' options={contryCode}> </Select>
        </Form.Item>
    );

    return (
        <div>
            <Card className='login-form'>
                <Form>
                    <Form.Item name='phone'>
                        <Input addonBefore={phonePrefix} placeholder='请输入手机号' />
                    </Form.Item>
                    <Form.Item>
                        <Row gutter={8}>
                            <Col span={12}>
                                <Form.Item
                                    name='captcha'
                                    noStyle
                                    rules={[
                                        {
                                            required: true,
                                            message: '请输入短信验证码',
                                        },
                                    ]}
                                >
                                    <Input placeholder='6位短信验证码' />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Button block>获取验证码</Button>
                            </Col>
                        </Row>
                    </Form.Item>

                    <Form.Item
                        name='agreement'
                        valuePropName='checked'
                        rules={[
                            {
                                validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject(new Error('请先阅读服务协议和隐私权政策')),
                            },
                        ]}
                    >
                        <Checkbox>
                            我已阅读并同意应用 <a href=''>服务协议</a> 和 <a href=''>隐私权政策</a>
                        </Checkbox>
                    </Form.Item>

                    <Form.Item shouldUpdate>
                        <Button type='primary' htmlType='submit' block>
                            登录 / 注册
                        </Button>
                    </Form.Item>

                </Form>
            </Card>
        </div>
    )
}
export default Login;