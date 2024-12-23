function divide(numerator, denominator) {
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error("Both arguments must be numbers");
    }
    if (denominator === 0) {
        throw new Error("Denominator cannot be 0");
    }
    return numerator / denominator;
}

// MET FUNC
try {
    console.log(divide(10, 2)); // 5
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Робота завершена");
}

try {
    console.log(divide(10, 0)); // Error
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Робота завершена");
}

try {
    console.log(divide("10", 2)); // Error
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Робота завершена");
}
