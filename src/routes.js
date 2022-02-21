import Home from './pages/home'
import Help from './pages/help'

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
    }
]


export default parseRoutes(routes);
