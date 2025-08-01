import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from 'react-router';
import AppTheme from '../theme/AppTheme';
import AppAppBar from '../components/AppAppBar';
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
