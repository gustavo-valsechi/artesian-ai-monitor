"use client"

import styled from "styled-components"

export const Container: any = styled.aside<{ show: boolean }>`
    .profile-header {
        width: 100%;
        height: 6rem;
        background: ${({ theme }) => theme.tertiary};
        position: relative;

        .profile-header-avatar {
            width: 4.5rem;
            height: 4.5rem;
            border-radius: 4.5rem;
            background: ${({ theme }) => theme.primary};
            position: absolute;
            bottom: -2.25rem;
            left: 50%;
            transform: translateX(-50%);

            i {
                font-size: 4.5rem;
                color: ${({ theme }) => theme.transparent_6};
            }
        }
    }

    .profile-body {
        .profile-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 4.5rem 0 3rem;

            span:first-child {
                text-transform: capitalize;
                font-size: .9rem;
                font-weight: 600;
                color: ${({ theme }) => theme.transparent_6};
            }

            span:last-child {
                font-size: .8rem;
                color: ${({ theme }) => theme.transparent_4};
            }
        }

        .profile-menu {
            padding: 0 1.5rem;

            .profile-menu-item {
                padding: .6rem 0;
                font-size: .9rem;
                font-weight: 500;
                display: flex;
                align-items: center;
                cursor: pointer;
                color: ${({ theme }) => theme.transparent_6};

                &:hover {
                    color: ${({ theme }) => theme.transparent_8};
                }

                div {
                    flex: 0.2;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                label {
                    flex: 0.8;
                    cursor: pointer;
                }
            }
        }
    }
`;