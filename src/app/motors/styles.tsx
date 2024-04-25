"use client"

import styled from "styled-components"

export const Container = styled.div`
    padding: 0 2rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .monitor-label {
        color: ${({ theme }) => theme.transparent_6};

        span {
            font-size: 1.3rem;
            font-weight: 600;
        }

        p {
            margin-top: .5rem;
            margin-bottom: 2rem;
            font-size: .8rem;
        }
    }

    .monitor-content {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`;