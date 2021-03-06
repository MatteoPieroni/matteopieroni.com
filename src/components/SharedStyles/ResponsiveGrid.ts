import styled from 'styled-components';

export const ResponsiveGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 2.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
`;
