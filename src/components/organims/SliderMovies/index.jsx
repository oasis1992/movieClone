import { useCallback, useRef, useEffect } from 'react'
import { ContainerFlex, CardMovieStyled as CardMovie, Header } from './style'

const options = {
	root: null,
	rootMargin: '0px',
	threshold: 1.0
}

const SliderMovies = ({ movies, title, onClick, onNextPage, loading }) => {
    const refs = useRef([])
	const observer = useRef(null)

	const addNode = useCallback(
		(node) => refs.current.push(node)
	,[])

    const handler = useCallback((entries = [])  =>  {
        for  (const  entry  of  entries)  {
            if  (entry.intersectionRatio  >=  1 && !entry.target.nextElementSibling && !loading)  {
                onNextPage()
            }
        }
    }, [onNextPage, loading])

    const getObserver = useCallback((ref)  => {
        let  observer  =  ref.current
        if (observer !== null) {
            return observer
        }
        const newObserver = new IntersectionObserver(handler, options)
        ref.current = newObserver
        return newObserver
    }, [handler])

    useEffect(() => {
		if (observer.current) observer.current.disconnect()
		const newObserver = getObserver(observer)
		
		for (const node of refs.current) {
            if (node) newObserver.observe(node)
		}
		return () => newObserver.disconnect()
	},  [getObserver])

    return (
        <div>
            <Header>
                <h3>{title}</h3>
                <p>Donec eu lobortis</p>
            </Header>
            <ContainerFlex>
                {movies.map((movie) => (
                    <CardMovie ref={addNode} onClick={onClick} key={movie.id} movie={movie} />
                ))}
            </ContainerFlex> 
        </div>
    )
}

export default SliderMovies
