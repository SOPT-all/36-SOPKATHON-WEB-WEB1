import React from 'react';
import styled from '@emotion/styled';
import rankingDetailImage from '@/shared/assets/rankingDetail.png';

const RankingDetail = ({ number }) => {
  return (
    <Wrapper>
      {number && <Number>{number}</Number>}
      <Container>
        <ImageContainer>
          <img src={rankingDetailImage} alt="rankingDetail" />
        </ImageContainer>
        <Title>
          <h1>놀거리 이름</h1>
          <p>한줄소개 몇글자가 들어가야 적당할까?</p>
        </Title>
      </Container>
    </Wrapper>
  );
};

export default RankingDetail;

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Container = styled.div`
  width: 30.5rem;
  height: 7.2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray3};
  border-radius: 1rem;
  display: flex;
`;
const ImageContainer = styled.div`
  overflow: hidden;
  img {
    width: 8.5rem;
    height: 7.2rem;
    object-fit: cover;
    border-radius: 1rem 0rem 0rem 1rem;
  }
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1.2rem 1rem;
  h1 {
    ${({ theme }) => theme.typography.textStyles.c3_sb_14}
  }
  p {
    ${({ theme }) => theme.typography.textStyles.c7_r_12}
    color: ${({ theme }) => theme.colors.gray8};
  }
`;
const Number = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.gray4};
  ${({ theme }) => theme.typography.textStyles.c3_sb_14}
  text-align: center;
  border-radius: 100%;
`;
