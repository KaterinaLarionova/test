const roomsState = [
    { elementId: 'example0', booked: false },
    { elementId: 'example1', booked: false },
    { elementId: 'example2', booked: false },
];
function updateRoom(index) {
    const room = roomsState[index];
    const elem = document.getElementById(room.elementId);
    if (elem) {
        elem.style.visibility = (room.booked ? 'visible' : 'hidden');
    } else {
        console.log(`No element with id ${room.elementId}`);
    }
}
function book(index) {
    roomsState[index].booked = true;
    updateRoom(index);
}
function unbook(index) {
    roomsState[index].booked = false;
    updateRoom(index);
}