(()=> {
    const state = initState();
    const actions = initActions(state);

    const root = document.getElementById('root');
    const app = renderApplication(state, actions);

    root.append(app);
})()
