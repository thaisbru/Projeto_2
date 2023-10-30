function toggleRoom(roomId, roomName) {
    const room = document.getElementById(roomId);
    const roomSwitch = document.getElementById(roomId + '-switch');
    const statusText = document.getElementById('status-text');

    if (room.classList.contains('on')) {
        room.classList.remove('on');
        room.style.backgroundColor = '#b3e0ff';
        roomSwitch.textContent = `Ligar Luz da ${roomName}`;
        roomSwitch.style.backgroundColor = 'green';
        statusText.textContent = `Luz da ${roomName} desligada.`;
        statusText.style.color = 'black';
    } else {
        room.classList.add('on');
        room.style.backgroundColor = '#8EDB80';
        roomSwitch.textContent = `Desligar Luz da ${roomName}`;
        roomSwitch.style.backgroundColor = 'red';
        statusText.textContent = `Luz da ${roomName} ligada.`;
        statusText.style.color = 'green';
    }
}

function toggleCircuit(roomId, roomName) {
    const room = document.getElementById(roomId);
    const roomSwitch = document.getElementById(roomId + '-circuit-switch');
    const statusText = document.getElementById('status-text');

    if (room.classList.contains('on')) {
        room.classList.remove('on');
        room.style.backgroundColor = '#b3e0ff';
        roomSwitch.textContent = `Ligar Circuito da ${roomName}`;
        roomSwitch.style.backgroundColor = 'green';
        statusText.textContent = `Circuito de energia da ${roomName} desligado (vermelho).`;
        statusText.style.color = 'red';
    } else {
        room.classList.add('on');
        room.style.backgroundColor = '#Ffff00';
        roomSwitch.textContent = `Desligar Circuito da ${roomName}`;
        roomSwitch.style.backgroundColor = 'red';
        statusText.textContent = `Circuito de energia da ${roomName} ligado (verde).`;
        statusText.style.color = 'black';
    }
}
