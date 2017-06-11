import App from '../containers/App/app'
import Home from '../routes/Home'
import About from '../routes/About'
import PageOne from '../routes/PageOne'
import PageOneRoutes from '../routes/PageOne/routes'
import NotFound from '../routes/NotFound'

const routes = [
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/about',
        exact: true,
        component: About
      },
      {
        path: '/pageOne',
        component: PageOne,
        routes: PageOneRoutes
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
]

export default routes
