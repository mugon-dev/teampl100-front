import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
`;

export const TableTitle = styled.div`
  font-family: Pretendard, -apple-system, serif;
  font-weight: bold;
  font-size: 40px;
  line-height: 6.4;
`;
export const TableHeader = styled.div`
  padding: 0 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #271e1e;
  display: flex;

  div {
    &:first-child {
      width: 82px;
    }

    &:nth-child(2) {
      width: 220px;
    }

    &:last-child {
      width: 280px;
    }
  }
`;

export const TableTH = styled.div`
  padding: 8px 18px;
  box-sizing: border-box;
  text-align: center;
`;

export const TableTR = styled.div`
  display: flex;
  height: 56px;
  border-bottom: 1px solid rgba(45, 43, 43, 0.25);
  padding: 0 10px;
  box-sizing: border-box;

  div {
    &:first-child {
      width: 82px;
    }

    &:nth-child(2) {
      width: 220px;
    }

    &:last-child {
      width: 280px;
    }
  }
`;

export const TableTD = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
