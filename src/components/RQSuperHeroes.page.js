import { useSuperHeroesData } from '../hooks/useSuperHeroesData'

export const RQSuperHeroes = () => {
    const onSuccess = (data) => {
        console.log(data)
        console.log('Perform side effects on success')
    }

    const onError = (error) => {
        console.log(error)
        console.log('Perform side effects on error')
    }

    const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData(onSuccess, onError)

    if (isLoading || isFetching) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>Error: {error.message}</h2>
    }

    return (
        <>
            <h2>Hero Names RQ</h2>
            <button onClick={refetch}>Fetch Heroes</button>
            {data?.data.map((hero) => {
                return <div key={hero.id}>{hero.name}</div>
            })}
        </>
    )
}
