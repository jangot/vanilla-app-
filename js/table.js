function renderRow(client, actions) {
    const tr = el('tr');

    const tdId = el('td', client.id);
    tr.append(tdId);

    const tdName = el('td', client.name);
    tr.append(tdName);

    const removeTd = el('td');
    const button = el('button', 'Remove');
    removeTd.append(button);
    tr.append(removeTd);
    button.addEventListener('click', () => {
        actions.removeClient(client.id)
    });

    return tr;
}

function renderHeaders(state, actions) {
    const tr = el('tr');
    const idTh = el('th', 'id');
    tr.append(idTh);
    idTh.addEventListener('click', () => {
        actions.sortClients('id');
    });

    const nameTh = el('th', 'name');
    tr.append(nameTh);
    nameTh.addEventListener('click', () => {
        actions.sortClients('name');
    });

    const actionTh = el('th', 'action');
    tr.append(actionTh);

    switch (state.sortOrder) {
        case 'id':
            idTh.classList.add('sorted');
            break;
        case 'name':
            nameTh.classList.add('sorted');
            break;
    }

    return tr;
}

function renderButton(state, actions) {
    const tr = el('tr');

    tr.append(el('td'));

    const tdId = el('td');
    tr.append(tdId);

    const input = el('input');
    tdId.append(input);

    const tdName = el('td');
    tr.append(tdName);

    const button = el('button', 'add');
    tdName.append(button);
    button.addEventListener('click', () => {
        actions.addClient(input.value);
    });

    return tr;
}

function renderTable(state, actions) {
    const table = el('table');

    table.append(renderHeaders(state, actions));

    const tbody = el('tbody');
    table.append(tbody);

    state.clients.forEach((client) => {
        tbody.append(renderRow(client, actions));
    });

    table.append(renderButton(state, actions));

    return table;
}
