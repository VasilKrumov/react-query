import { useQuery, useQueryClient } from 'react-query'
import axios from 'axios'

// query by Id
const fetchSuperHero = async ({ queryKey }) => {
    const heroId = queryKey[1]
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

export const useSuperHeroeData = (heroId) => {
    const queryClient = useQueryClient()
    return useQuery(['super-hero', heroId], fetchSuperHero, {
        initialData: () => {
            const hero = queryClient.getQueryData('super-heroes')?.data?.find((hero) => hero.id === parseInt(heroId))

            if (hero) {
                return { data: hero }
            } else {
                return undefined
            }
        },
    })
}
