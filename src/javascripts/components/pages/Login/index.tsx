import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useQuery } from 'react-query';

import { exampleSelector, exampleState } from '@State/index';
import repositoryFactory from '@Global/api';

const request = repositoryFactory.get('ex');
const req = async () => {
  try {
    const dt = await request.get();
    return dt.data.id;
  } catch (e) {
    throw new Error();
  }
};

export default function Login() {
  const [data, setData] = useState(0);
  const [ex, setEx] = useRecoilState(exampleState);
  const a = useRecoilValue(exampleSelector);
  const { data: dw, error } = useQuery('example', req);

  return (
    <div>
      {a}
      <button
        type="button"
        onClick={() => {
          setEx(ex + 1);
        }}
      >
        {dw}
      </button>
    </div>
  );
}
