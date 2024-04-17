import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${({ theme }) => theme.transparent_05};
    border-radius: 5px;
    padding: 2rem 1rem .5rem;

    .chart-legend {
        display: flex;
        align-items: center;
        justify-content: space-around;

        .legend {
            display: flex;
            align-items: center;
            gap: .5rem;

            div {
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 5px;
            }

            label {
                font-size: .9rem;
                font-weight: 500;
                color: ${({ theme }) => theme.transparent_6};
            }
        }
    }
`;