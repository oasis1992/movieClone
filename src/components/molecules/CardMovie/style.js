import styled from 'styled-components'

export const Title = styled.p`
    font-size: ${({ theme }) => theme.rems(16)};
    font-weight: bold;
    margin-top: ${({ theme }) => theme.rems(16)};
`

export const Date = styled.p`
    font-size: ${({ theme }) => theme.rems(16)};
    color: ${({ theme }) => theme.colors.textLightGray};
    margin-top: ${({ theme }) => theme.rems(6)};
`