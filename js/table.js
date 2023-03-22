function renderRow(state, actions) {
    const tr = document.createElement('tr');

    const tdId = document.createElement('td');
    tdId.innerHTML = state.id;
    tr.append(tdId);

    const tdName = document.createElement('td');
    tdName.innerHTML = state.name;
    tr.append(tdName);

    return tr;
}

function renderHeaders() {
    const tr = document.createElement('tr');
    const first = document.createElement('th');
    first.innerHTML = 'id';
    tr.append(first);

    const second = document.createElement('th');
    second.innerHTML = 'name';
    tr.append(second);

    return tr;
}

function renderButton(state, actions) {
    const tr = document.createElement('tr');

    const tdId = document.createElement('td');
    tr.append(tdId);

    const input = document.createElement('input');
    tdId.append(input);

    const tdName = document.createElement('td');
    tr.append(tdName);

    const button = document.createElement('button');
    button.innerHTML = 'add';
    tdName.append(button);
    button.addEventListener('click', () => {
        actions.addClient(input.value);
    });

    return tr;
}

function renderTable(state, actions) {
    const table = document.createElement('table');

    table.append(renderHeaders());

    state.clients.forEach((client) => {
        table.append(renderRow(client, actions));
    });

    table.append(renderButton(state, actions));

    return table;
}
