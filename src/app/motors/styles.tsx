"use client"

import styled from "styled-components"

export const Container = styled.div`
    padding: 0 2rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .monitor-content {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .content-properties {
            display: flex;
            align-items: center;
            justify-content: start;
            flex-wrap: wrap;
            gap: .5rem;

            div {
                padding: .3rem .5rem;
                border-radius: 5px;
                background: ${({ theme }) => theme.transparent_05};
                color: ${({ theme }) => theme.transparent_6};
                font-size: .8rem;
                font-weight: 500;
            }
        }
    }
`;