"use client"

import styled from "styled-components"

export const Container = styled.div<{ color: string }>`
  /* display: inline; */

  .content {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 1.8rem;
    padding: 0 2rem;
    position: relative;

    div {
      position: relative;
      z-index: 1;
      color: ${({ theme, color }) => theme[color]};
      font-size: .8rem;
      font-weight: 500;
      text-transform: capitalize;
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      background: ${({ theme, color }) => theme[color]};
      opacity: .2;
    }
  }
`;