import { Header, Title, ContainerCenter, Resume } from './style'

const HeaderMovie = () => (
    <Header style={{ background: `url('./assets/header.png')` }}>
        <ContainerCenter>
            <div>
                <Title>Xepelin Movie Database</Title>
                <Resume>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac accumsan odio. Quisque et felis id magna ultricies.</Resume>
            </div>
        </ContainerCenter>
    </Header>
)

export default HeaderMovie