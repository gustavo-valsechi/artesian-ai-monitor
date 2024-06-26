"use client"

import styled from "styled-components"

export const Container = styled.div`
    width: 100vw;
    height: calc(100vh - 3.5rem);
    display: grid;
    place-items: center;
    margin-top: -2rem;

    .container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .content {
            border: 2px solid ${({ theme }) => theme.transparent_05};
            border-radius: 10px;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 25rem;
            box-shadow: 0 0 20px -10px rgb(0, 0, 0, 0.3);
            margin-top: 2rem;

            @media(max-width: 400px) {
                width: 100%;
            }

            .content-title {
                font-size: 1.1rem;
                font-weight: 500;
                margin-bottom: 1rem;
                color: ${({ theme }) => theme.transparent_8};
            }
        }   
    }
`;