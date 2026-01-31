import React from 'react';
import type { BonusTaxResult } from '../logic/bonusTaxCalculations';

interface ResultsPanelProps {
    result: BonusTaxResult;
}

const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(val);
};

export const ResultsPanel: React.FC<ResultsPanelProps> = ({ result }) => {
    return (
        <div className="card" style={{
            background: 'linear-gradient(to bottom, #F0FDF4, #DCFCE7)',
            borderColor: '#86EFAC',
            boxShadow: '0 2px 8px -2px rgba(0, 0, 0, 0.1)'
        }}>
            <div className="text-center">
                <h2 style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-2)' }}>
                    Estimated Bonus Take-Home Pay
                </h2>
                <div style={{
                    fontSize: '2.75rem',
                    fontWeight: 800,
                    color: '#166534',
                    lineHeight: 1,
                    letterSpacing: '-0.025em'
                }}>
                    {formatCurrency(result.netBonus)}
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginTop: 'var(--space-2)' }}>
                    {result.message}
                </div>
            </div>

            <hr style={{
                margin: 'var(--space-6) 0',
                border: 'none',
                borderTop: '1px solid #86EFAC'
            }} />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-2)', textAlign: 'center' }}>
                <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>TAX WITHHELD</div>
                    <div style={{ fontWeight: 700, fontSize: '1.125rem', color: '#B91C1C' }}>
                        {formatCurrency(result.taxWithheld)}
                    </div>
                </div>
                <div style={{ borderLeft: '1px solid #86EFAC', borderRight: '1px solid #86EFAC' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>EFFECTIVE RATE</div>
                    <div style={{ fontWeight: 700, fontSize: '1.125rem' }}>
                        {result.effectiveTaxRate.toFixed(1)}%
                    </div>
                </div>
                <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>GROSS BONUS</div>
                    <div style={{ fontWeight: 700, fontSize: '1.125rem' }}>
                        {formatCurrency(result.bonusAmount)}
                    </div>
                </div>
            </div>
        </div>
    );
};
