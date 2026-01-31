import React from 'react';
import type { BonusTaxResult } from '../logic/bonusTaxCalculations';

interface BreakdownTableProps {
    result: BonusTaxResult;
}

const formatMoney = (val: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(val);
};

export const BreakdownTable: React.FC<BreakdownTableProps> = ({ result }) => {
    const bonusRows = [
        { label: 'Gross Bonus Amount', value: formatMoney(result.bonusAmount), isTotal: false },
        { label: 'Flat Withholding Rate', value: `${result.flatTaxRate.toFixed(1)}%`, isTotal: false },
        { label: 'Estimated Tax Withheld', value: `-${formatMoney(result.taxWithheld)}`, isTotal: false, isNegative: true },
        { label: 'Estimated Net Bonus', value: formatMoney(result.netBonus), isTotal: true },
    ];

    const contextRows = [
        { label: 'Filing Status', value: result.filingStatusLabel, isTotal: false },
        { label: 'Annual Salary', value: formatMoney(result.annualSalary), isTotal: false },
        { label: 'Total Compensation', value: formatMoney(result.totalCompensation), isTotal: false },
    ];

    const renderTable = (rows: Array<{ label: string; value: string; isTotal: boolean; isNegative?: boolean }>, isLast = false) => (
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem' }}>
            <tbody>
                {rows.map((row, idx) => (
                    <tr key={idx} style={{
                        borderBottom: (isLast && idx === rows.length - 1) ? 'none' : '1px solid var(--color-border)',
                        backgroundColor: idx % 2 === 0 ? 'transparent' : '#F8FAFC'
                    }}>
                        <td style={{ padding: 'var(--space-3) var(--space-6)', color: 'var(--color-text-secondary)' }}>
                            {row.label}
                        </td>
                        <td style={{
                            padding: 'var(--space-3) var(--space-6)',
                            textAlign: 'right',
                            fontWeight: row.isTotal ? 700 : 400,
                            color: row.isTotal ? '#166534' : (row.isNegative ? '#B91C1C' : 'inherit')
                        }}>
                            {row.value}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <div className="card" style={{ padding: '0' }}>
            {/* Bonus Breakdown Section */}
            <div style={{ padding: 'var(--space-4) var(--space-6)', borderBottom: '1px solid var(--color-border)' }}>
                <h3 style={{ fontSize: '1rem' }}>Estimated Bonus Breakdown</h3>
            </div>
            {renderTable(bonusRows)}

            {/* Context Section */}
            <div style={{ padding: 'var(--space-4) var(--space-6)', borderBottom: '1px solid var(--color-border)', borderTop: '1px solid var(--color-border)', background: '#F8FAFC' }}>
                <h3 style={{ fontSize: '1rem', color: 'var(--color-text-secondary)' }}>Additional Context</h3>
            </div>
            {renderTable(contextRows, true)}
        </div>
    );
};
