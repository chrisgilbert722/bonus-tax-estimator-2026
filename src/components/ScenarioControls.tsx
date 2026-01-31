import React from 'react';
import type { BonusTaxInput, FilingStatus } from '../logic/bonusTaxCalculations';

interface ScenarioControlsProps {
    values: BonusTaxInput;
    onChange: (field: keyof BonusTaxInput, value: number | boolean | FilingStatus) => void;
}

export const ScenarioControls: React.FC<ScenarioControlsProps> = ({ values, onChange }) => {
    const bonusOptions = [
        { label: '$2,500', value: 2500 },
        { label: '$5,000', value: 5000 },
        { label: '$10,000', value: 10000 },
        { label: '$25,000', value: 25000 },
    ];

    const rateOptions = [
        { label: '22%', value: 22 },
        { label: '25%', value: 25 },
        { label: '30%', value: 30 },
        { label: '37%', value: 37 },
    ];

    return (
        <div className="card">
            <h3 style={{ marginBottom: 'var(--space-4)' }}>Quick Adjustments</h3>

            {/* Bonus Quick Select */}
            <div style={{ marginBottom: 'var(--space-4)' }}>
                <label style={{ marginBottom: 'var(--space-2)' }}>Bonus Amount</label>
                <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                    {bonusOptions.map((option) => (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => onChange('bonusAmount', option.value)}
                            style={{
                                flex: 1,
                                padding: 'var(--space-2) var(--space-3)',
                                fontSize: '0.875rem',
                                fontWeight: 500,
                                border: '1px solid',
                                borderColor: values.bonusAmount === option.value ? 'var(--color-primary)' : 'var(--color-border)',
                                borderRadius: 'var(--radius-md)',
                                background: values.bonusAmount === option.value ? 'var(--color-primary)' : 'transparent',
                                color: values.bonusAmount === option.value ? '#fff' : 'var(--color-text-primary)',
                                cursor: 'pointer'
                            }}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tax Rate Quick Select */}
            <div>
                <label style={{ marginBottom: 'var(--space-2)' }}>Tax Rate</label>
                <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                    {rateOptions.map((option) => (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => onChange('flatTaxRate', option.value)}
                            style={{
                                flex: 1,
                                padding: 'var(--space-2) var(--space-3)',
                                fontSize: '0.875rem',
                                fontWeight: 500,
                                border: '1px solid',
                                borderColor: values.flatTaxRate === option.value ? 'var(--color-primary)' : 'var(--color-border)',
                                borderRadius: 'var(--radius-md)',
                                background: values.flatTaxRate === option.value ? 'var(--color-primary)' : 'transparent',
                                color: values.flatTaxRate === option.value ? '#fff' : 'var(--color-text-primary)',
                                cursor: 'pointer'
                            }}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
