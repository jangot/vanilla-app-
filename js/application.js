function renderApplication(state, actions) {
    const app = el('div',  '<h1>Clients</h1>');
    app.classList.add('app');

    app.append(renderTable(state, actions));
    app.append(renderStatistic(state, actions));

   return app
}
