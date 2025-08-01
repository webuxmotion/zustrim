import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from '../theme/AppTheme';
import { Outlet } from 'react-router';

export default function DashboardLayout(props: { disableCustomTheme?: boolean }) {
    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme />

            <div>
                <Outlet />
            </div>

        </AppTheme>
    );
}
