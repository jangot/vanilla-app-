function initActions(state) {
    function triggerEvent(name, detail = {}) {
        document.dispatchEvent(new CustomEvent(name, {
            bubbles: true,
            detail,
        }));
        document.dispatchEvent(new CustomEvent('state', {
            bubbles: true,
            detail: state,
        }))
    }

    return {
        addClient: function (name) {
            const maxIdItem = state.clients.reduce((memo, client) => {
                return client.id > memo ? client.id : memo;
            }, 0);
            state.clients.push({
                id: maxIdItem + 1,
                name
            });
            triggerEvent('state:clientAdd');
            this.sortClients(state.sortOrder);
        },
        removeClient: function (id) {
            const lengthBefore = state.clients.length;
            state.clients = state.clients.filter((client) => client.id != id);
            if (lengthBefore !== state.clients.length) {
                triggerEvent('state:clientRemove');
            }
        },
        sortClients: function(fieldName) {
            switch (fieldName) {
                case 'name':
                    state.clients = state.clients.sort((a, b) => {
                        if ( a.name < b.name ){
                            return -1;
                        }
                        if ( a.name > b.name ){
                            return 1;
                        }
                        return 0;
                    });
                    state.sortOrder = 'name';
                    break;
                default:
                    state.clients = state.clients.sort((a, b) => a.id - b.id);
                    state.sortOrder = 'id';
            }
            triggerEvent('state:clientsSort');
        }
    }
}
