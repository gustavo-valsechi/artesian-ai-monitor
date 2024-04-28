"use client"

import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    html, body, input, select, textarea, div, button {
        font-family: "Poppins", sans-serif !important;
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0); 
    } 

    html, body {
        padding: 0;
        margin: 0;
        background: ${({ theme }) => theme.primary};
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }

    div {
        &::-webkit-scrollbar-track {
            background-color: transparent;
        }

        &::-webkit-scrollbar {
            width: 6px;
            border-radius: 1rem;
        }

        &::-webkit-scrollbar-thumb {
            background: rgb(0, 0, 0, 0.08);
            width: 6px;
            border-radius: 1rem;
        }
    }

    .tooltip-container {
        position: fixed;
        background: ${({ theme }) => theme.tooltip};
        color: ${({ theme }) => theme.transparent_6};
        font-size: .8rem;
        font-weight: 500;
        text-align: center;
        padding: .3rem .8rem;
        border-radius: 5px;
        transform: translateX(-50%);
        z-index: 10;
        border: 1px solid ${({ theme }) => theme.transparent_05};

        &::before {
            content: "";
            position: absolute;
            top: -9px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 0;
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            border-bottom: 8px solid ${({ theme }) => theme.transparent_05};
        }

        &::after {
            content: "";
            position: absolute;
            top: -8px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 0;
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            border-bottom: 8px solid ${({ theme }) => theme.tooltip};
        }
    }
`

export default GlobalStyle