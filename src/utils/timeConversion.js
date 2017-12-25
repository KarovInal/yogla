function timeConversion(millisec) {
    const s = (millisec / 1000).toFixed(1);
    const m = (millisec / (1000 * 60)).toFixed(1);
    const h = (millisec / (1000 * 60 * 60)).toFixed(1);
    const d = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);

    if (s < 60) {
        return s + " сек.";
    } else if (m < 60) {
        return m + " мин.";
    } else if (h < 24) {
        return h + " час.";
    } else {
        return d + " дн."
    }
};

export default timeConversion;
