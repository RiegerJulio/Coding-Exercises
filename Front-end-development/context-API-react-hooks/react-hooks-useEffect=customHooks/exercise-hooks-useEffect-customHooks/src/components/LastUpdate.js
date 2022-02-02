import React, { useContext } from 'react';
import { Context } from './RedditContext';

export default function LastUpdate() {
  const { selectedSubreddit, postsBySubreddit } = useContext(Context);
  const { LastUpdated } = postsBySubreddit[selectedSubreddit];

  if (!LastUpdate) {
    return null;
  };

  return (
    <h1>
      {`Last updated at ${new Date(LastUpdated).toLocaleDateString()}`}
    </h1>
  )
}
