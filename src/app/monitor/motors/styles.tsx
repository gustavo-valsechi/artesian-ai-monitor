import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;

    .content {
        flex: 1 1 20rem;
        display: flex;
        padding: 1rem;
        background: ${({ theme }) => theme.transparent_05};
        border-radius: 5px;
        width: 100%;

        .content-left {
            width: 10rem;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-right: 1rem;

            img {
                width: 5rem;
                height: 5rem;
                object-fit: contain;
            }
        }

        .content-right {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 1rem;

            .content-header {
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                flex-wrap: wrap;
                gap: 1rem;

                .content-info {
                    display: flex;
                    flex-direction: column;
                    gap: .3rem;
    
                    span:nth-child(1) {
                        font-size: .8rem;
                        font-weight: 500;
                        color: ${({ theme }) => theme.transparent_4};
                    }
    
                    span:nth-child(2) {
                        font-size: 1.1rem;
                        font-weight: 600;
                        color: ${({ theme }) => theme.transparent_6};
                    }
                }

                .content-status {
                    flex-basis: 6rem;
                    padding: .3rem 1rem;
                    border-radius: 5px;
                    position: relative;
                    display: inline-block;
                    gap: .5rem;
                    font-size: .75rem;
                    font-weight: 600;
                    text-transform: capitalize;
                    text-align: center;

                    &::before {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        border-radius: 5px;
                        opacity: .2;
                    }

                    &[data-status="DESATIVADO"] {
                        color: ${({ theme }) => theme.negative};

                        &::before {
                            background: ${({ theme }) => theme.negative};
                        }
                    }

                    &[data-status="ATIVO"] {
                        color: ${({ theme }) => theme.positive};

                        &::before {
                            background: ${({ theme }) => theme.positive};
                        }
                    }
                }
            }

            .content-footer {
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                gap: 1rem;

                .content-params {
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
        }
    }
`;