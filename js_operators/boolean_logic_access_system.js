let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

let access;

if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
    access = "Secure";
} else {
    access = "Unsafe";
}

console.log(access);

isOwnerInside = false;

if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
    access = "Secure";
} else {
    access = "Unsafe";
}

console.log(access);