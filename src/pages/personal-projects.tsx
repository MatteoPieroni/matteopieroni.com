import * as React from 'react';

import { PersonalProjects } from '../components/personal-projects/personal-projects';

export const WorkTimeline: () => JSX.Element = () => (
	<main>
		<h1>Personal projects and open source</h1>
		<PersonalProjects />
	</main>
);

export default WorkTimeline;
