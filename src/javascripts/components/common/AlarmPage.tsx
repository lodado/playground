import React from 'react';

interface Props {
  text?: string;
}

export default function AlarmPage({ text }: Props): JSX.Element {
  return (
    <div className="alarm-background">
      <div className="convex" />
      {text}
    </div>
  );
}

AlarmPage.defaultProps = {
  text: '오류가 발생했습니다.. 다음에 시도해 주세요!',
};
