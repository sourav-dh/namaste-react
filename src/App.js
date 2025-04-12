import React, {lazy, Suspense, useState} from 'react'
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import Teams from './components/Teams';
import Error from './components/Error';
import RestDetails from './components/RestDetails';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/AppStore';
import Cart from './components/Cart';

const AboutComponent = lazy(() => import('./components/About'))

const App = () => {
	const [loggedUser, setLoggedUser] = useState('Guest')

	return (
		<Provider store={appStore}>
			<UserContext.Provider value={{loggedInUser: loggedUser, setLoggedUser}}>
				<Header />
				<Outlet />
				<Footer />
			</UserContext.Provider>
		</Provider>
	)
}

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Body />
			},
			{
				path: '/about',
				element: <Suspense fallback={<h1>Loading...</h1>}><AboutComponent /></Suspense>
			},
			{
				path: '/teams',
				element: <Teams />
			},
			{
				path: 'restaurants/:id',
				element: <RestDetails />
			},
			{
				path: '/cart',
				element: <Cart />
			}
		]
	}
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)