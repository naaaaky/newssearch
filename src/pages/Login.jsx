import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Layout from '../components/layout/Layout';
import Button from '../components/common/Button';
import TextInput from '../components/common/TextInput';
import { ALLOWED_ID, ALLOWED_PASSWORD } from '../constants';

import { fetchUser } from '../redux/actions/userAction';

const Login = ({ user, setUser }) => {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user) navigate('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const onSubmit = () => {
    if (!id) return alert('아이디를 입력해주세요');
    if (!password) return alert('비밀번호를 입력해주세요');
    if (id === ALLOWED_ID && password === ALLOWED_PASSWORD) {
      setUser(id);
      navigate('/');
    } else {
      return alert('아이디 또는 비밀번호를 확인해주세요.');
    }
  };

  return (
    <Layout>
      <TextInput value={id} onChange={e => setId(e.target.value)} />
      <TextInput value={password} onChange={e => setPassword(e.target.value)} />
      <Button onClick={onSubmit}>야호</Button>
    </Layout>
  );
};

const mapStateToProps = state => {
  return { user: state.user };
};

const mapDispatchToProps = dispatch => {
  return {
    setUser: id => {
      dispatch(fetchUser(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
