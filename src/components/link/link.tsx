import { Children, cloneElement, isValidElement } from 'react';
import NextLink, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

export const Link: React.FC<LinkProps> = ({ href, children, ...props }) => {
	const { asPath } = useRouter();
	const child = Children.only(children);

	if (!isValidElement(child)) {
		throw new Error('You must pass only one child to this component');
	}

	const isActive = asPath === href;

	return (
		<NextLink href={href} {...props}>
			{cloneElement(child, {
				...(isActive && { ['aria-current']: true })
			})}
		</NextLink>
	);
}