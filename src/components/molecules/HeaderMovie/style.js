import styled from 'styled-components'
import devicesBreackpoints from '../../../providers/devicesBreackpoints'

export const Header = styled.header`
    height: 60vh;
    background-position: center !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
}
`

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.rems(54)};
    color: white;
`

export const ContainerCenter = styled.div`
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.rems(96)};
    height: 100%;
    @media ${devicesBreackpoints.laptop} {
        max-width: 768px;
    }
`

export const Resume = styled.div`
    color: white;
    font-size: ${({ theme }) => theme.rems(20)};
`
