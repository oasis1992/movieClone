import styled from 'styled-components'

export const Title = styled.h3`
    font-weight: bold;
    font-size: ${({ theme }) => theme.rems(38)};
    margin-top: ${({ theme }) => theme.rems(36)};
    margin-bottom: ${({ theme }) => theme.rems(35)};
`

export const Overview = styled.p`
    font-weight: 400;
    font-size: ${({ theme }) => theme.rems(20)};
`