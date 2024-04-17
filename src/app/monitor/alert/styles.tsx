import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: .5rem;

    .alert-container {
        position: relative;
        border: 1px solid ${({ theme }) => theme.negative};
        border-radius: 5px;
        color: ${({ theme }) => theme.negative};
        padding: 1rem 1.5rem;
        display: flex;
        flex-direction: column;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: ${({ theme }) => theme.negative};
            opacity: .2;
        }

        span:nth-child(1) {
            font-weight: 600;
            font-size: .9rem;
        }

        span:nth-child(2) {
            font-weight: 500;
            font-size: .8rem;
        }

        div {
            position: absolute;
            top: 0;
            right: 0;
            padding: 1rem 1.3rem;
            font-size: .9rem;
            cursor: pointer;
        }
    }
`;