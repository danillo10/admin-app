import styled from 'styled-components'

export const Message = styled.div`
  &.alert-blue,
  &.alert-red,
  &.alert-green,
  &.alert-orange {
    border-radius: 8px;
    padding: 12px 16px 12px 24px;
    margin-bottom: 16px;
  }
  &.alert-red {
    color: #721c24;
    border: 1px solid #721c24;
    background-color: #f8d7da;
  }
  &.alert-green {
    color: #155724;
    border: 1px solid #155724;
    background-color: #d4edda;
  }
  &.alert-blue {
    color: #004085;
    border: 1px solid #004085;
    background-color: #cce5ff;
  }
  &.alert-orange {
    color: #856404;
    border: 1px solid #856404;
    background-color: #fff3cd;
  }
`
