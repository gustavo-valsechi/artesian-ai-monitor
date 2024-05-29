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

    span:first-child {
        font-size: 1.3rem;
        font-weight: 500;
        color: ${({ theme }) => theme.transparent_6};
    }

    span:last-child {
        font-size: .9rem;
        font-weight: 400;
        color: ${({ theme }) => theme.transparent_4};
    }
`;