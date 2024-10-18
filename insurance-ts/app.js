// premiumCalculator.ts
var InsuranceFactors = /** @class */ (function () {
    function InsuranceFactors(age, vehicleType, drivingExperience, claimHistory, location) {
        this.age = age;
        this.vehicleType = vehicleType;
        this.drivingExperience = drivingExperience;
        this.claimHistory = claimHistory;
        this.location = location;
    }
    InsuranceFactors.prototype.getDescription = function () {
        return "Age: ".concat(this.age, ", Vehicle Type: ").concat(this.vehicleType, ", Driving Experience: ").concat(this.drivingExperience, " years, Claim History: ").concat(this.claimHistory, " claims, Location: ").concat(this.location);
    };
    return InsuranceFactors;
}());
var PremiumCalculator = /** @class */ (function () {
    function PremiumCalculator(factors) {
        this.factors = factors;
        this.basePremium = 500; // Base premium
    }
    PremiumCalculator.prototype.calculatePremium = function () {
        var premium = this.basePremium;
        // Age Factor
        if (this.factors.age < 25) {
            premium += 200; // Higher premium for younger drivers
        }
        else if (this.factors.age > 60) {
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
        }
        else if (this.factors.drivingExperience > 10) {
            premium -= 100; // Discount for experienced drivers
        }
        // Claim History Factor
        premium += this.factors.claimHistory * 100; // $100 increase per claim
        // Location Factor
        if (this.factors.location === 'urban') {
            premium += 150; // Higher premium for urban areas
        }
        return premium;
    };
    return PremiumCalculator;
}());
function main() {
    var factors = new InsuranceFactors(30, 'sedan', 5, 1, 'urban');
    console.log(factors.getDescription());
    var calculator = new PremiumCalculator(factors);
    var premium = calculator.calculatePremium();
    console.log("The calculated insurance premium is: $".concat(premium));
}
main();
