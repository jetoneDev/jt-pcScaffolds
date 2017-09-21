import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import CSSModules from 'react-css-modules';
import styles from './style.css';
const FormItem = Form.Item;
const LoginForm = props => {
    const { getFieldDecorator } = props.form;
    return (
        <div styleName="formContainer">
            <Form onSubmit={props.onSubmit} styleName='form'>
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input styleName="input" prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                        )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input styleName="input" prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                        )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>记住登录信息</Checkbox>
                        )}
                    <a styleName="forgot" href="">忘记密码</a>
                    <Button type="primary" htmlType="submit" styleName="button">
                        登录
            </Button>
                    <div styleName="register">
        
                            <a href="">注 册</a>
                    </div>
                </FormItem>
            </Form>
        </div>
    );
};

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

export default Form.create()(CSSModules(LoginForm, styles));