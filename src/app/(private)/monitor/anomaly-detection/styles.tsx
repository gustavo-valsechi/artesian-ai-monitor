import styled from 'styled-components'

export const Container = styled.div<{ hasFault: boolean }>`
    border: 1px solid ${({ theme, hasFault }) => hasFault ? theme.negative : "transparent"};
    background-color: ${({ theme }) => theme.transparent_05};
    border-radius: 5px;

    .chart-header {
        display: flex;
        align-items: center;
        padding: 1rem 1.3rem;
        color: ${({ theme, hasFault }) => hasFault ? theme.negative : theme.transparent_6};
        border-bottom: 1px solid ${(props) => props.theme.transparent_05};

        .chart-header-label {
            display: flex;
            align-items: center;
            gap: .5rem;
            font-size: .9rem;
            font-weight: 600;
        }
    }

    .chart-body {
        padding: .5rem 1rem;
    }
`;