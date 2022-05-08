import React, { useEffect, useState } from 'react';

import Layout from '../components/layout/Layout';
import TextInput from '../components/common/TextInput';
import Button from '../components/common/Button';

import NewsService from '../services/NewsService';

const Main = () => {
  const [keyword, setKeyword] = useState('');

  const handleSearch = () => {
    if (!keyword) alert('검색어를 입력하세요.');
    else {
      NewsService.getNews(keyword)
        .then(res => {
          console.log(res);
        })
        .catch(console.error);
    }
  };

  return (
    <Layout>
      <div>
        <TextInput value={keyword} onChange={e => setKeyword(e.target.value)} />
        <Button onClick={handleSearch}>검색</Button>
      </div>
    </Layout>
  );
};

export default Main;
