import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spacing(10)};
  padding: ${p => p.theme.spacing(20)} ${p => p.theme.spacing(4)};
`;
