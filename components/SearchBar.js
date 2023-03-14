import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useEffect, useState } from 'react';

const SearchBar = ({onFinish}) => {
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({});

    // To disable submit button at the beginning.
    useEffect(() => {
        forceUpdate({});
    }, []);
    
    return (
        <Form 
            form={form} 
            name="horizontal_login" 
            layout="inline" 
            onFinish={onFinish}
            size="large"
        >
            <Form.Item
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'This field is required!',
                    },
                ]}
            >
                <Input placeholder="What on your mind!" />
            </Form.Item>
            <Form.Item
                name="quantity"
                rules={[
                    {
                      pattern: /^(?:\d*)$/,
                      message: "Value should contain just number",
                    },
                    {
                      max:1,
                      message: "Value should be less than 50 character",
                    },
                  ]}
                  validateTrigger="onChange"
            >
                <Input maxLength={1} placeholder="Enter number of image" />
            </Form.Item>
            <Form.Item shouldUpdate>
                {() => (
                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={
                            !form.isFieldsTouched(true) ||
                            !!form.getFieldsError().filter(({ errors }) => errors.length).length
                        }
                    >
                        Generate
                    </Button>
                )}
            </Form.Item>
        </Form>
    );
};
export default SearchBar;