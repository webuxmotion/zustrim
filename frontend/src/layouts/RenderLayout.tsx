import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from 'react-router';
import AppTheme from '../theme/AppTheme';
import Footer from '../components/Footer';
import TopBar from '@/components/RenderTheme/TopBar';

export default function RenderLayout(props: { disableCustomTheme?: boolean }) {
    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme />

            <TopBar />

            <div>
                <Outlet />
            </div>

            <Footer />
        </AppTheme>
    );
}
