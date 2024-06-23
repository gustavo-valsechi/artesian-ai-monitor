import styled from 'styled-components'

export const Container = styled.div`
    width: 25rem;
    padding: 2.5rem 2rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1rem;

    @media(max-width: 757px) {
        width: 100%;
    }

    span:nth-child(1) {
        font-size: .8rem;
        font-weight: 400;
        color: ${({ theme }) => theme.transparent_4};
    }

    span:nth-child(2) {
        font-size: .9rem;
        font-weight: 600;
        color: ${({ theme }) => theme.transparent_6};
    }

    span:nth-child(3) {
        font-size: .9rem;
        font-weight: 500;
        color: ${({ theme }) => theme.transparent_5};
    }
`;