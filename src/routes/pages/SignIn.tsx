import { PageLayout } from 'routes/components/Page';
import { Button, Card, Form, notification } from 'antd';
import { useUser } from 'components/user';
import { Spinner } from 'routes/components/Loader';

export const SignIn: React.FC<{}> = () => {
  const { isLoading, signIn } = useUser();

  const onFinish = (values: any) => {
    signIn(values);
  };

  const onFail = (errorInfo: any) => {
    notification['error']({
      message: 'Error',
      description: errorInfo,
    });
  };

  return (
    <PageLayout>
      <Form
        className="form"
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFail}
        autoComplete="off"
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card style={{ width: 300, height: 300,  display: 'flex', justifyContent: 'center', }}>
            <h1 style={{ padding: '5rem' }}>Welcome!</h1>
            <Form.Item>
              <Button style={{ width: '100%' }} type="primary" htmlType="submit">
                Sign In
              </Button>
            </Form.Item>
            {isLoading && <Spinner />}
          </Card>
        </div>
      </Form>
    </PageLayout>
  );
};
