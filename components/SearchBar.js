import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select } from 'antd';
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
                      required:true,
                      message: "This field is required.",
                    },
                  ]}
                  validateTrigger="onChange"
            >
                <Select placeholder="Please Select Quantity." style={{minWidth:'200px'}}>
                    {[1,2,3,4,5,6,7,8,9,10].map((val)=><Select.Option key={val}>{val}</Select.Option>)}
                </Select>
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