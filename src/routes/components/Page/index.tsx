import * as React from 'react';
import { Button, Layout } from 'antd';
import { useUser } from 'components/user';

import './Page.css';

export const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isSignedIn, signOut } = useUser();

  return (
    <Layout>
      <Layout.Header className="Page__wrapper">
        <div>
          <span className="Page__header">Super DOM</span>
        </div>
        <div>
          {isSignedIn && <Button onClick={signOut}>Sign out</Button>}
        </div>
      </Layout.Header>
      <Layout.Content className="Page__content">{children}</Layout.Content>
    </Layout>
  );
};

