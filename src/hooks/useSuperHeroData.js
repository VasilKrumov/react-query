import { useQuery } from 'react-query'
import axios from 'axios'

// query by Id
const fetchSuperHero = async ({ queryKey }) => {
    const heroId = queryKey[1]
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

export const useSuperHeroeData = (heroId) => {
    return useQuery(['super-hero', heroId], fetchSuperHero)
}