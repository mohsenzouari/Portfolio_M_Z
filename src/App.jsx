import React from "react";
import "./app.scss";
import Layout from "./components/layout/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { lazy } from "react";
import { LocaleProvider } from "./components/LocaleProvider";
import ProjectDetails from "./components/projects/ProjectDetails";

function App() {
	const About = lazy(() => import("./components/about/About"));
	// const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
	const Projects = lazy(() => import("./components/projects/Projects"));
	const Contact = lazy(() => import("./components/contact/Contact"));

	return (
		<React.StrictMode>
			<HelmetProvider>
        <LocaleProvider>
					<div className="app">
						<Router>
							<Routes>
								<Route path="/" element={<Layout />}>
									<Route index element={<About className="children" />} />
									<Route
										path="about"
										element={<About className="children" />}
									/>
									{/* <Route
										path="portfolio"
										element={<Portfolio className="children" />}
									/> */}
									<Route path="projects"	element={<Projects className="children" />}/>
                    
									<Route 
										path="/projects/:projectId" 
										element={<ProjectDetails />} 
									/>
									<Route 
										path="/projects/:*" 
										element={<ProjectDetails />} 
									/>
									<Route
										path="contact"
										element={<Contact className="children" />}
									/>
                  
								</Route>
							</Routes>
						</Router>
					</div>
        </LocaleProvider>
			</HelmetProvider>
		</React.StrictMode>
	);
}

export default App;
