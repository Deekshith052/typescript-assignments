// premiumCalculator.ts

class InsuranceFactors {
    constructor(
        public age: number,
        public vehicleType: string,
        public drivingExperience: number,
        public claimHistory: number,
        public location: string
    ) {}

    public getDescription(): string {
        return `Age: ${this.age}, Vehicle Type: ${this.vehicleType}, Driving Experience: ${this.drivingExperience} years, Claim History: ${this.claimHistory} claims, Location: ${this.location}`;
    }
}

class PremiumCalculator {
    private basePremium: number = 500; // Base premium

    constructor(private factors: InsuranceFactors) {}

    public calculatePremium(): number {
        let premium = this.basePremium;

        // Age Factor
        if (this.factors.age < 25) {
            premium += 200; // Higher premium for younger drivers
        } else if (this.factors.age > 60) {
            premium += 100; // Slightly higher for older drivers
        }

        // Vehicle Type Factor
        switch (this.factors.vehicleType) {
            case 'sports':
                premium += 300; // Higher premium for sports cars
                break;
            case 'SUV':
                premium += 150; // Higher for SUVs
                break;
            // Add more vehicle types as needed
            default:
                break;
        }

        // Driving Experience Factor
        if (this.factors.drivingExperience < 2) {
            premium += 250; // Higher premium for new drivers
        } else if (this.factors.drivingExperience > 10) {
            premium -= 100; // Discount for experienced drivers
        }

        // Claim History Factor
        premium += this.factors.claimHistory * 100; // $100 increase per claim

        // Location Factor
        if (this.factors.location === 'urban') {
            premium += 150; // Higher premium for urban areas
        }

        return premium;
    }
}

function main() {
    const factors = new InsuranceFactors(30, 'sedan', 5, 1, 'urban');
    
    console.log(factors.getDescription());

    const calculator = new PremiumCalculator(factors);
    const premium = calculator.calculatePremium();

    console.log(`The calculated insurance premium is: $${premium}`);
}

main();
