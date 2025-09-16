    function validatePassword(password: string): boolean {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const isLongEnough = password.length >= 8;
    const isNotOnlySpaces = password.trim().length > 0;

    return hasUpperCase && hasLowerCase && hasDigit && isLongEnough && isNotOnlySpaces;
}
