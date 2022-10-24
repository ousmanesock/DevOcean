import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardContainer from '../components/DashboardContainer/DashboardContainer';
import routes from './routes';

const AppRoutes = (props) => {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map((route, index) => (
					<Route
						key={index}
						path={route.path}
						element={
							route.requireAuth ? (
								<DashboardContainer>
									<route.component {...props} />
								</DashboardContainer>
							) : (
								<route.component {...props} />
							)
						}
					/>
				))}
			</Routes>
		</BrowserRouter>
	);
};
export default AppRoutes;
