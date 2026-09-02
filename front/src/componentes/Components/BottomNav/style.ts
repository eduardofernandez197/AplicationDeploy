import styled from 'styled-components';

export const BottomNavContainer = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;

  height: 56px;
  padding: 6px 14px;

  background-color: #ffffff;
  border-top: 1px solid #e5e7eb;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
`;

export const BottomNavItem = styled.button<{ $active?: boolean; $primary?: boolean }>`
  border: none;
  background: transparent;
  color: ${({ $active, $primary }) => ($active || $primary ? '#ff6b00' : '#64748b')};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;

  font-size: 11px;
  font-weight: 500;
  cursor: pointer;

  .icon {
    width: ${({ $primary }) => ($primary ? '50px' : '22px')};
    height: ${({ $primary }) => ($primary ? '50px' : '22px')};
    margin-top: ${({ $primary }) => ($primary ? '-28px' : '0')};

    border-radius: ${({ $primary }) => ($primary ? '999px' : '0')};
    background-color: ${({ $primary }) => ($primary ? '#ff6b00' : 'transparent')};
    color: ${({ $primary }) => ($primary ? '#ffffff' : 'inherit')};

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: ${({ $primary }) => ($primary ? '32px' : '21px')};
    line-height: 1;
  }
`;
