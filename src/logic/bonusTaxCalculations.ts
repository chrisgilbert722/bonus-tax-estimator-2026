export type FilingStatus = 'single' | 'married';

export interface BonusTaxInput {
    bonusAmount: number;
    annualSalary: number;
    filingStatus: FilingStatus;
    flatTaxRate: number;
}

export interface BonusTaxResult {
    bonusAmount: number;
    taxWithheld: number;
    netBonus: number;
    effectiveTaxRate: number;
    flatTaxRate: number;
    annualSalary: number;
    filingStatus: FilingStatus;
    filingStatusLabel: string;
    totalCompensation: number;
    message: string;
}

export function calculateBonusTax(input: BonusTaxInput): BonusTaxResult {
    const bonusAmount = Math.max(0, input.bonusAmount);
    const annualSalary = Math.max(0, input.annualSalary);
    const filingStatus = input.filingStatus;
    const flatTaxRate = Math.max(0, Math.min(100, input.flatTaxRate));

    const filingStatusLabel = filingStatus === 'single' ? 'Single' : 'Married';

    // Calculate tax using flat percentage method (simplified)
    const taxWithheld = bonusAmount * (flatTaxRate / 100);
    const netBonus = bonusAmount - taxWithheld;

    // Calculate effective tax rate
    const effectiveTaxRate = bonusAmount > 0 ? (taxWithheld / bonusAmount) * 100 : 0;

    const totalCompensation = annualSalary + bonusAmount;

    // Generate message
    let message: string;
    if (bonusAmount === 0) {
        message = 'Enter your bonus amount to calculate';
    } else if (flatTaxRate === 22) {
        message = 'Using standard 22% federal supplemental rate';
    } else if (flatTaxRate < 22) {
        message = `Using ${flatTaxRate}% flat withholding rate`;
    } else {
        message = `Using ${flatTaxRate}% flat withholding rate`;
    }

    return {
        bonusAmount,
        taxWithheld,
        netBonus,
        effectiveTaxRate,
        flatTaxRate,
        annualSalary,
        filingStatus,
        filingStatusLabel,
        totalCompensation,
        message
    };
}
