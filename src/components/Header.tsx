import React from 'react';

export const Header: React.FC = () => {
    return (
        <header style={{ textAlign: 'center' }}>
            <h1>Bonus Tax Estimator (Simplified) (2026)</h1>
            <p style={{ color: 'var(--color-text-secondary)', marginTop: 'var(--space-2)' }}>
                Estimate bonus taxes using simplified withholding rules
            </p>
        </header>
    );
};
