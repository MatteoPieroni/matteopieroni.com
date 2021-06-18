import * as React from 'react';

import { PersonalProjects } from '../components/personal-projects/personal-projects';
import { projects } from '../data/PersonalProjects';

export const PersonalProjectsPage: () => JSX.Element = () => (
	<main>
		<h1>Personal projects and open source</h1>
		<PersonalProjects projects={projects} />
	</main>
);

export default PersonalProjectsPage;
