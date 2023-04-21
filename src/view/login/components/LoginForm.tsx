import { Button, Form, Input } from "antd";
import { UserOutlined, UnlockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { login } from "@/api/login";
function LoginForm() {
  const navigate = useNavigate();
  const onFinish = (values: { username: string; password: string }) => {
    console.log("Success:", values);
    const reqParams = {
      userName: "",
      password: "",
    };
    login(reqParams).then((res) => {
      console.log(res.token);
    });
    /**
     * 1.token是用户的唯一标识
     * 2.登录时后端返回给前端的字符串，作为token
     * 3.前端存在cookies
     */
    navigate("/layout/home");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="username"
        rules={[
          { required: true, message: "请输入用户名!" },
          () => ({
            validator(_, value) {
              if (value === "admin") {
                return Promise.resolve();
              }
              return Promise.reject("校验不通过");
            },
          }),
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="请输入用户名" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "请输入密码!" }]}
      >
        <Input.Password prefix={<UnlockOutlined />} placeholder="请输入密码" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          登录
        </Button>
      </Form.Item>
    </Form>
  );
}
export default LoginForm;
