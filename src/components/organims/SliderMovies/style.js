import styled from 'styled-components'
import CardMovie from '../../molecules/CardMovie'

export const ContainerFlex = styled.div`
    display: flex;
    overflow-x: auto;
    scroll-snap-type:  x  proximity;
`

export const CardMovieStyled = styled(CardMovie)`
    margin-right: ${({ theme }) => theme.rems(24)};
    background-color: transparent !important;
    box-shadow: none !important;
`

export const Header = styled.div`
    margin-bottom: ${({ theme }) => theme.rems(34)};
    > h3 {
        font-size: ${({ theme }) => theme.rems(28)};
        margin-bottom: ${({ theme }) => theme.rems(8)};
    }

    > p {
        font-size: ${({ theme }) => theme.rems(18)};
    }
`