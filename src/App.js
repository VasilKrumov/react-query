import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import './App.css'
import { Home } from './components/Home.page'
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page'
import { SuperHeroes } from './components/SuperHeroes.page'
import { RQSuperHero } from './components/RQSuperHero.page'
import { ParallelQueries } from './components/ParallelQueries.page'
import { DynamicParallelPage } from './components/DynamicQueries.page'
import { DependentQueriesPage } from './components/DependantQueries.page'
import { PaginatedQueriesPage } from './components/PaginatedQueries.page'
import { InfiniteQueriesPage } from './components/InfiniteQueries.page'

const queryClient = new QueryClient({})

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/super-heroes">Traditional Super Heroes</Link>
                            </li>
                            <li>
                                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/infinite-query" element={<InfiniteQueriesPage />} />
                        <Route path="/paginated-query" element={<PaginatedQueriesPage />} />
                        <Route path="/rq-dependant" element={<DependentQueriesPage email="vishwas@example.com" />} />
                        <Route path="/rq-dynamic" element={<DynamicParallelPage />} />
                        <Route path="/rq-parallel" element={<ParallelQueries />} />
                        <Route path="/rq-super-heroes/:heroId" element={<RQSuperHero />} />
                        <Route path="/super-heroes" element={<SuperHeroes />} />
                        <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
            </Router>
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
    )
}

export default App
