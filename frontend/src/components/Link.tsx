import React from 'react';
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router';

type SmartLinkProps = Omit<MuiLinkProps, 'component' | 'to'> & {
    to?: RouterLinkProps['to']; // optional 'to' for routing
    component?: React.ElementType; // optional override for component
};

const Link = React.forwardRef<HTMLAnchorElement, SmartLinkProps>(
    ({ to, component, ...rest }, ref) => {
        // If `to` is provided and no component override, use react-router Link
        if (to && !component) {
            return <MuiLink ref={ref} component={RouterLink} to={to} {...rest} />;
        }

        // Otherwise, use MUI Link with the provided component or default
        if (component) {
            return <MuiLink ref={ref} component={component} {...rest} />;
        }

        return <MuiLink ref={ref} {...rest} />;
    },
);

export default Link;