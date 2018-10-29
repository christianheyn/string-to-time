const minutesToEstimate = (minutes, hoursPerDay = 8) => {
    const onEmptyMinutes = { d: 0, h: 0, m: 0 };
    const useHourPerDay = (typeof hoursPerDay === 'number')
        ? hoursPerDay
        : 8;

    if (typeof minutes !== 'number' || minutes === 0) {
        return onEmptyMinutes;
    }

    const minutesPerDay = useHourPerDay * 60;

    const d = (minutes - (minutes % minutesPerDay)) / minutesPerDay;
    const h = ((minutes - (minutes % 60)) - (d * minutesPerDay)) / 60;
    const m = parseInt(minutes - (d * minutesPerDay) - (h * 60), 10);

    return {
        d,
        h,
        m,
        hoursPerDay: useHourPerDay,
    };
};

module.exports = { minutesToEstimate };