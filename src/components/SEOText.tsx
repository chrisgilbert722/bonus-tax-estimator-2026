import React from 'react';

export const SEOText: React.FC = () => {
    return (
        <div className="card" style={{ background: '#F8FAFC' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                This is a simplified estimate of bonus tax withholding using the flat percentage
                method. Actual withholding may vary by employer and depends on factors including
                state taxes, Social Security, Medicare, and other deductions. The default 22%
                rate reflects the federal supplemental wage withholding rate but your employer
                may use different methods. This calculator is for informational purposes only
                and is not tax advice. Consult a tax professional for guidance specific to your situation.
            </p>
        </div>
    );
};
