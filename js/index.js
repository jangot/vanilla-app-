(()=> {
    const storedState = JSON.parse(localStorage.getItem('state'))

    const state = initState(storedState);
    const actions = initActions(state);

    const root = document.getElementById('root');
    const app = renderApplication(state, actions);
    root.append(app);

    document.addEventListener('state', () => {
        root.innerHTML = '';
        const app = renderApplication(state, actions);
        root.append(app);
        localStorage.setItem('state', JSON.stringify(state));
    });
})()
