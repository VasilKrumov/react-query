/* eslint-disable no-unused-expressions */

import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeroes = async () => {
    return axios.get('http://localhost:4000/superheroes')
}

export const useSuperHeroesData = (onSuccess, onError) => {
    return useQuery('super-heroes', fetchSuperHeroes, {
        // cacheTime: 5000, -> how long the cache is valid
        // staleTime: 30000, -> time to refetch data
        // refetchOnMount: true, // -> refetch data on mount
        // refetchOnWindowFocus: true, // -> refetch data on window focus
        // refetchInterval: 5000, // -> refetch data every 5 seconds
        // refetchIntervalInBackground: true, // -> refetch data in background (when the browser is not focused)
        // enabled: false, // -> enable/disable the query on component mount (used when you want to fetch with a button click)
        onSuccess: onSuccess, // handler on success
        onError: onError, // handler on error
        // select: (data) => {
        //     const superheroNames = data.data.map((hero) => {
        //         hero.name
        //     })
        //     return superheroNames
        // }, // -> select data from response and transform it
    })
}
