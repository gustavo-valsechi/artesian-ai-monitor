"use client"

import styled from "styled-components"

export const Container: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .7rem;
  opacity: ${(props: any) => props.opacity || "1"};

  .logo-container {
    font-size: ${(props: any) => props.size || "1.5"}rem;
    color: ${(props: any) => props.theme.transparent_6};
    /* width: ${(props: any) => Number(props.size) * 1.5 || "2.5"}rem;
    height: 2.5rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    } */
  }

  label {
    font-size: ${(props: any) => props.size || "1.5"}rem;
    font-weight: 600;
    color: ${(props: any) => props.theme.transparent_6};
  }
`;