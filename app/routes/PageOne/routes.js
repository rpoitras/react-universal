// import { Redirect } from 'react-router'
import PageOneA from './components/PageOneA'
import PageOneB from './components/PageOneB'
import NotFound from '../NotFound'

const pageOneRoutes = [
  {
    path: '/pageOne/A',
    exact: true,
    component: PageOneA
  },
  {
    path: '/pageOne/B',
    exact: true,
    component: PageOneB
  },
  {
    path: '/pageOne/*',
    // TODO - looking at how to redirect to "not found" rather than append it
    // render: () => <Redirect to='/notFound' />
    component: NotFound
  }
]

export default pageOneRoutes
