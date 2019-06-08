import styled from 'styled-components';

export const StyledIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0.25rem;
  padding: 1rem 0.5rem;
  min-width: 33%;
  svg {
    max-width: 100%;
    width: auto;
    margin: 0 auto;
  }
  label {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
  }
`;
