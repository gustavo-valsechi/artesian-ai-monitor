import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;

    .content {
        flex: 1;
        display: flex;
        padding: 1rem;
        background: ${({ theme }) => theme.transparent_05};
        border-radius: 5px;
        width: 100%;

        .content-left {
            flex: .3;
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
            flex: .7;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
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
                padding: .5rem 1.5rem;
                border-radius: 5px;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: .5rem;
                font-size: .9rem;
                font-weight: 500;
                text-transform: capitalize;

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

                &[data-status="INSTAVEL"] {
                    color: ${({ theme }) => theme.negative};

                    &::before {
                        background: ${({ theme }) => theme.negative};
                    }
                }

                &[data-status="ESTAVEL"] {
                    color: ${({ theme }) => theme.positive};

                    &::before {
                        background: ${({ theme }) => theme.positive};
                    }
                }
            }
        }
    }
`;