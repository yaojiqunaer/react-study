import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useState } from 'react'
import { UploadOutlined } from '@ant-design/icons'
import { Button, Form, Input, Upload } from 'antd'

const Publish = () => {
    const [value, setValue] = useState('')
    return (
        <>
            <Form>
                <Form.Item label='请输入文章标题' rules={
                    [{ required: true, message: '请输入标题' }]
                }>
                    <Input />
                </Form.Item>
                <Form.Item>
                    <ReactQuill theme='snow' value={value} onChange={setValue} />
                </Form.Item>
                <Form.Item
                    name='upload'
                    label='Upload'
                    valuePropName='fileList'
                    getValueFromEvent=''
                >
                    <Upload name='logo' action='/upload.do' listType='picture'>
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                </Form.Item>

            </Form>
        </>
    )
}

export default Publish