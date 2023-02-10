import { useSuperHeroeData } from '../hooks/useSuperHeroData'
import { useParams } from 'react-router-dom'

export const RQSuperHero = () => {
    const { heroId } = useParams()
    const { isLoading, data, isError, error } = useSuperHeroeData(heroId)

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>Error: {error.message}</h2>
    }
    return <div>{data?.data.name}</div>
}
