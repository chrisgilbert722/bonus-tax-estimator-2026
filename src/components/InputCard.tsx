import React from 'react';
import type { BonusTaxInput, FilingStatus } from '../logic/bonusTaxCalculations';

interface InputCardProps {
    values: BonusTaxInput;
    onChange: (field: keyof BonusTaxInput, value: number | boolean | FilingStatus) => void;
}

export const InputCard: React.FC<InputCardProps> = ({ values, onChange }) => {
    return (
        <div className="card">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {/* Bonus Amount */}
                <div>
                    <label htmlFor="bonusAmount">Bonus Amount ($)</label>
                    <input
                        type="number"
                        id="bonusAmount"
                        value={values.bonusAmount}
                        onChange={(e) => onChange('bonusAmount', parseFloat(e.target.value) || 0)}
                        min="0"
                        step="500"
                    />
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        Your gross bonus amount before taxes
                    </span>
                </div>

                {/* Annual Salary */}
                <div>
                    <label htmlFor="annualSalary">Annual Salary ($)</label>
                    <input
                        type="number"
                        id="annualSalary"
                        value={values.annualSalary}
                        onChange={(e) => onChange('annualSalary', parseFloat(e.target.value) || 0)}
                        min="0"
                        step="1000"
                    />
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        Your regular annual salary (for reference)
                    </span>
                </div>

                {/* Filing Status */}
                <div>
                    <label htmlFor="filingStatus">Filing Status</label>
                    <select
                        id="filingStatus"
                        value={values.filingStatus}
                        onChange={(e) => onChange('filingStatus', e.target.value as FilingStatus)}
                        style={{
                            width: '100%',
                            padding: 'var(--space-3)',
                            fontSize: '1rem',
                            border: '1px solid var(--color-border)',
                            borderRadius: 'var(--radius-md)',
                            background: '#fff'
                        }}
                    >
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                    </select>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        Your tax filing status
                    </span>
                </div>

                {/* Flat Tax Rate */}
                <div>
                    <label htmlFor="flatTaxRate">Flat Bonus Tax Rate (%)</label>
                    <input
                        type="number"
                        id="flatTaxRate"
                        value={values.flatTaxRate}
                        onChange={(e) => onChange('flatTaxRate', parseFloat(e.target.value) || 0)}
                        min="0"
                        max="100"
                        step="1"
                    />
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        Federal supplemental withholding rate (typically 22%)
                    </span>
                </div>
            </div>
        </div>
    );
};
