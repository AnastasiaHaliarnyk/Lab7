function instruction() {
    console.log("Instruction: ");
    console.log("Open the console and enter your values in function triangle(firstValue, \"typeOfFirstValue\", secondValue, \"typeOfSecondValue\") where:");
    console.log("1. \"firstValue\"/\"secondValue\"  can be a positive value of leg or hypotenuse, or adjacent angle (to the leg, in degrees)," +
        " or opposite angle (to the leg, in degrees) and finally angle (when hypotenuse is or will be entered), in degrees;");
    console.log("2. \"typeOfFirstValue\"/\"typeOfSecondValue\" is a string which can be \"leg\" or \"hypotenuse\" or \"adjacent angle\" or \"opposite angle\" or \"angle\";");
    console.log("Remember:");
    console.log("1. Values can't be negative or equal to zero");
    console.log("2. Leg can't be greater than hypotenuse or equal to hypotenuse");
    console.log("Please read the instructions and enter the correct values");
}

instruction();
const LEG_STRING_VALUE = "leg";
const HYPOTENUSE_STRING_VALUE = "hypotenuse";
const ADJ_ANGLE_STRING_VALUE = "adjacent angle";
const OPP_ANGLE_STRING_VALUE = "opposite angle";
const ANGLE_STRING_VALUE = "angle";

function triangle(firstValue, typeOfFirstValue, secondValue, typeOfSecondValue) {
    function checkEnteredTypes(typeOfValue) {
        let flag = false;
        switch (typeOfValue) {
            case LEG_STRING_VALUE:
            case HYPOTENUSE_STRING_VALUE:
            case ADJ_ANGLE_STRING_VALUE:
            case OPP_ANGLE_STRING_VALUE:
            case ANGLE_STRING_VALUE:
                flag = true;
                break;
            default:
                console.log("Error, there is an error in the type entered. Please check your values!");
        }
        return flag;
    }

    function checkEnteredValues() {
        if (firstValue <= 0 || secondValue <= 0) {
            console.log("Error, values can't be negative or equal to zero. Please check your values!");
            return false;
        }

        if ((typeOfFirstValue === HYPOTENUSE_STRING_VALUE && typeOfSecondValue === LEG_STRING_VALUE && secondValue >= firstValue) ||
            (typeOfFirstValue === LEG_STRING_VALUE && typeOfSecondValue === HYPOTENUSE_STRING_VALUE && firstValue >= secondValue)) {
            console.log("Error, leg can't be greater than hypotenuse or equal to hypotenuse. Please check your values!");
            return false;
        }

        if (((typeOfFirstValue === ADJ_ANGLE_STRING_VALUE || typeOfFirstValue === OPP_ANGLE_STRING_VALUE || typeOfFirstValue === ANGLE_STRING_VALUE)
                && (firstValue <= 0 || firstValue >= 90)) ||
            ((typeOfSecondValue === ADJ_ANGLE_STRING_VALUE || typeOfSecondValue === OPP_ANGLE_STRING_VALUE || typeOfSecondValue === ANGLE_STRING_VALUE)
                && (secondValue <= 0 || secondValue >= 90))) {
            console.log("Error, entered angles are not valid. Please check your values!");
            return false;
        }

        if ((typeOfFirstValue === LEG_STRING_VALUE && typeOfSecondValue === ANGLE_STRING_VALUE) ||
            (typeOfFirstValue === HYPOTENUSE_STRING_VALUE && typeOfSecondValue === HYPOTENUSE_STRING_VALUE) ||
            (typeOfFirstValue === HYPOTENUSE_STRING_VALUE && typeOfSecondValue === ADJ_ANGLE_STRING_VALUE ) ||
            (typeOfFirstValue === HYPOTENUSE_STRING_VALUE && typeOfSecondValue === OPP_ANGLE_STRING_VALUE) ||
            (typeOfFirstValue === ADJ_ANGLE_STRING_VALUE && typeOfSecondValue === HYPOTENUSE_STRING_VALUE) ||
            (typeOfFirstValue === ADJ_ANGLE_STRING_VALUE && typeOfSecondValue === ADJ_ANGLE_STRING_VALUE) ||
            (typeOfFirstValue === ADJ_ANGLE_STRING_VALUE && typeOfSecondValue === OPP_ANGLE_STRING_VALUE) ||
            (typeOfFirstValue === ADJ_ANGLE_STRING_VALUE && typeOfSecondValue === ANGLE_STRING_VALUE) ||
            (typeOfFirstValue === OPP_ANGLE_STRING_VALUE && typeOfSecondValue === HYPOTENUSE_STRING_VALUE) ||
            (typeOfFirstValue === OPP_ANGLE_STRING_VALUE && typeOfSecondValue === ADJ_ANGLE_STRING_VALUE) ||
            (typeOfFirstValue === OPP_ANGLE_STRING_VALUE && typeOfSecondValue === OPP_ANGLE_STRING_VALUE) ||
            (typeOfFirstValue === OPP_ANGLE_STRING_VALUE && typeOfSecondValue === ANGLE_STRING_VALUE) ||
            (typeOfFirstValue === ANGLE_STRING_VALUE && typeOfSecondValue === LEG_STRING_VALUE) ||
            (typeOfFirstValue === ANGLE_STRING_VALUE && typeOfSecondValue === ADJ_ANGLE_STRING_VALUE) ||
            (typeOfFirstValue === ANGLE_STRING_VALUE && typeOfSecondValue === OPP_ANGLE_STRING_VALUE) ||
            (typeOfFirstValue === ANGLE_STRING_VALUE && typeOfSecondValue === ANGLE_STRING_VALUE)) {
            console.log("Error, type incompatibility. Please check your values!");
            return false;
        }

        if (typeof firstValue !== 'number' || typeof typeOfFirstValue !== 'string' ||
            typeof secondValue !== 'number' || typeof typeOfSecondValue !== 'string') {
            console.log("Error, the entered arguments are not correct. Please check your values!");
            return false;
        }

        return true;
    }

    function writeToConsole() {
        console.log("a = " + a);
        console.log("b = " + b);
        console.log("c = " + c);
        console.log("alpha = " + alpha);
        console.log("beta = " + beta);
    }

    function toDegrees(angle) {
        return angle * (180 / Math.PI);
    }

    function toRadians(angle) {
        return angle * (Math.PI / 180);
    }

    function solveWithTwoLegs() {
        c = Math.sqrt(a ** 2 + b ** 2);
        alpha = toDegrees(Math.atan(a / b));
        beta = toDegrees(Math.atan(b / a));
        writeToConsole();
    }

    function solveWithLegAndHypotenuse() {
        b = Math.sqrt(c ** 2 - a ** 2);
        alpha = toDegrees(Math.atan(a / b));
        beta = toDegrees(Math.atan(b / a));
        writeToConsole();
    }

    function solveWithLegAndAdjAngle() {
        c = a / Math.cos(toRadians(beta));
        b = Math.sqrt(c ** 2 - a ** 2);
        alpha = 90 - beta;
        writeToConsole();
    }

    function solveWithLegAndOppAngle() {
        c = a / Math.sin(toRadians(alpha));
        b = Math.sqrt(c ** 2 - a ** 2);
        beta = 90 - alpha;
        writeToConsole();
    }

    function solveWithHypotenuseAndAngle() {
        alpha = 90 - beta;
        a = c * Math.sin(toRadians(alpha));
        b = Math.sqrt(c ** 2 - a ** 2);
        writeToConsole();
    }

    let a, b, c, alpha, beta;

    if (!checkEnteredValues() || !checkEnteredTypes(typeOfFirstValue) || !checkEnteredTypes(typeOfSecondValue)) {
        console.log("Please read the instruction and try again");
        return "failed";
    }

    if (typeOfFirstValue === LEG_STRING_VALUE && typeOfSecondValue === LEG_STRING_VALUE) {
        a = firstValue;
        b = secondValue;
        solveWithTwoLegs();
        return "success";
    }

    if ((typeOfFirstValue === LEG_STRING_VALUE && typeOfSecondValue === HYPOTENUSE_STRING_VALUE)) {
        a = firstValue;
        c = secondValue;
        solveWithLegAndHypotenuse();
        return "success";
    }

    if (typeOfFirstValue === HYPOTENUSE_STRING_VALUE && typeOfSecondValue === LEG_STRING_VALUE) {
        c = firstValue;
        a = secondValue;
        solveWithLegAndHypotenuse();
        return "success";
    }

    if (typeOfFirstValue === LEG_STRING_VALUE && typeOfSecondValue === ADJ_ANGLE_STRING_VALUE) {
        a = firstValue;
        beta = secondValue;
        solveWithLegAndAdjAngle();
        return "success";
    }

    if (typeOfFirstValue === ADJ_ANGLE_STRING_VALUE && typeOfSecondValue === LEG_STRING_VALUE) {
        beta = firstValue;
        a = secondValue;
        solveWithLegAndAdjAngle();
        return "success";
    }

    if (typeOfFirstValue === LEG_STRING_VALUE && typeOfSecondValue === OPP_ANGLE_STRING_VALUE) {
        a = firstValue;
        alpha = secondValue;
        solveWithLegAndOppAngle();
        return "success";
    }

    if (typeOfFirstValue === OPP_ANGLE_STRING_VALUE && typeOfSecondValue === LEG_STRING_VALUE) {
        alpha = firstValue;
        a = secondValue;
        solveWithLegAndOppAngle();
        return "success";
    }

    if (typeOfFirstValue === HYPOTENUSE_STRING_VALUE && typeOfSecondValue === ANGLE_STRING_VALUE) {
        c = firstValue;
        beta = secondValue;
        solveWithHypotenuseAndAngle();
        return "success";
    }

    if (typeOfFirstValue === ANGLE_STRING_VALUE && typeOfSecondValue === HYPOTENUSE_STRING_VALUE) {
        beta = firstValue;
        c = secondValue;
        solveWithHypotenuseAndAngle();
        return "success";
    }
}

