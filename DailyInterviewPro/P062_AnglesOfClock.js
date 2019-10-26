/**
 * Microsoft
 * 
 * Given a time in the format of hour and minute, calculate the angle of the hour and minute hand on a clock.
 * Example: 
 *  Input => hour: 3, minute: 30. Output => 75
 *  Input => hour: 12, minute: 30. Output => 165
 */

const calculateAngle = (hour, minute) => {

    // validate the input
    if (hour < 0 || minute < 0 || hour > 12 || minute > 60)
        return;

    if (hour == 12)
        hour = 0;
    if (minute == 60)
        minute = 0;

    // Calculate the angles moved by hour and minute hands w.r.t 12:00
    let hour_angle = 0.5 * (hour * 60 + minute);
    let minute_angle = 6 * minute;

    // Find the difference between two angles
    let angle = Math.abs(hour_angle - minute_angle);

    // smaller angle of two possible angles
    angle = Math.min(360 - angle, angle);

    return angle;
}

console.log(calculateAngle(3, 30));
console.log(calculateAngle(12, 30));