import styled from 'styled-components'

export const Container = styled.div<{ toggle: boolean }>`
    background-color: ${({ theme }) => theme.transparent_05};
    border-radius: 5px;

    .chart-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 1.3rem;
        color: ${({ theme }) => theme.transparent_6};
        border-bottom: 1px solid ${(props) => props.toggle ? props.theme.transparent_05 : 'transparent'};
        cursor: pointer;

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