function initActions(state) {
    function triggerEvent(name, detail = {}) {
        const event = new CustomEvent(name, {
            bubbles: true,
            detail,
        });
        document.dispatchEvent(event)
    }

    let count = 0;
    return {
        addClient: (name) => {
            state.clients.push({
                id: count++,
                name
            });
            triggerEvent('client:add');
        }
    }
}
