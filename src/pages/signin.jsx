import React from 'react';
import classNames from 'classnames';
import SignInForm from '@Components/Form/SignInForm';
import { createUseStyles } from 'react-jss';
import Router from 'next/router';
import { parseCookies } from 'nookies';

const useStyles = createUseStyles(({
  root: {
    width: 560,
    margin: [48, 'auto'],
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    margin: [0, 0, 34, 0],
  },
  wrapper: {
    overflow: 'hidden',
    padding: [24, 0],
    borderRadius: 6,
    backgroundColor: '#ffffff',
    boxShadow: '0px 6px 30px 0px rgba(0,62,137,0.1)',
  },
}), {
  name: 'SignIn',
});

const SignInPage = () => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.root)}>
      <h2 className={classes.title}>Login</h2>
      <div className={classes.wrapper}>
        <SignInForm />
      </div>
    </div>
  );
};

SignInPage.getInitialProps = ctx => {
  const { token } = parseCookies(ctx);
  if (token) {
    if (ctx.isServer) {
      ctx.res.writeHead(302, {
        Location: '/',
      });
      ctx.res.end();
    } else {
      Router.replace('/');
    }
  }
};

export default SignInPage;
