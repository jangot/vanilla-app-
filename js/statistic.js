function renderStatistic(state, actions) {
    const root = el('div', '<h3>Stat</h3>');
    const ul = el('ul');
    root.append(ul);

    ul.append(el('li', `Clients count: ${state.clients.length}`));
    ul.append(el('li', `Current sort: ${state.sortOrder}`));

    const maxId = state.clients.reduce((max, client) => {
        if (client.id > max) return client.id;
        return max;
    }, 0);
    ul.append(el('li', `Max id: ${maxId}`));

    return root;
}
