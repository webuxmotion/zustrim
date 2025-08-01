import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from '../theme/AppTheme';
import AppAppBar from '../components/AppAppBar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

export default function MainLayout(props: { disableCustomTheme?: boolean }) {
    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme />

            <AppAppBar />

            <div>
                <Outlet />
            </div>

            <Footer />
        </AppTheme>
    );
}
