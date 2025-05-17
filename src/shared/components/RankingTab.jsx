import React from 'react';
import styled from '@emotion/styled';
import { useState } from 'react';

const RankingTab = () => {
  const [activeTab, setActiveTab] = useState('food');
  return (
    <Wrapper>
      <Button isActive={activeTab === 'food'} onClick={() => setActiveTab('food')}>
        먹거리
      </Button>
      <Button isActive={activeTab === 'fun'} onClick={() => setActiveTab('fun')}>
        놀거리
      </Button>
    </Wrapper>
  );
};

export default RankingTab;

const Wrapper = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const Button = styled.button`
  width: 7.4rem;
  height: 2.2rem;
  border-radius: 1.1rem;
  ${({ theme }) => theme.typography.textStyles.c8_sb_12}
  border:none;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.gray11 : theme.colors.gray2};
  color: ${({ isActive, theme }) => (isActive ? theme.colors.white : theme.colors.black)};
`;
