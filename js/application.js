function renderApplication(state, actions) {
    const app = document.createElement('div');
    app.innerHTML = '<h1>Clients</h1>';
    app.classList.add('app');

    app.append(renderTable(state, actions));

    document.addEventListener('client:add', () => {
        app.innerHTML = '<h1>Clients</h1>';
        app.classList.add('app');

        app.append(renderTable(state, actions));
    });

   return app
}
