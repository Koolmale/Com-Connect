import Home from './pages/home'
import Help from './pages/help'
import About from './pages/about'
import Team from './pages/team'

function parseRoutes(routes, base_url = '') {
	return routes
		.map(route => {
			const obj = {
				path: base_url + route.path,
				component: route.component,
			}

			if (!route.subRoutes) return obj

			return [obj, ...parseRoutes(route.subRoutes, base_url + route.path)]
		})
		.flat()
}

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/help',
        component: Help
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/team',
        component: Team
    }
]


export default parseRoutes(routes);
