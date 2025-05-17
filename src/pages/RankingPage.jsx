import RankingDetail from '@/shared/components/RankingDetail';
import RankingTab from '@/shared/components/RankingTab';
import React from 'react';

const RankingPage = () => {
  return (
    <div>
      <RankingTab />
      <RankingDetail number={1} />
    </div>
  );
};

export default RankingPage;
