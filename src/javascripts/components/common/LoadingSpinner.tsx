import React from 'react';

interface Props {
  text?: string;
}

export default function LoadingSpinner({ text }: Props): JSX.Element {
  return (
    <div className="alarm-background">
      <div className="loading-spanner" />
      {text}
    </div>
  );
}

LoadingSpinner.defaultProps = {
  text: 'loading...',
};
