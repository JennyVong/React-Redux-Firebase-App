const initState = {
    projects: [
        {id: 1, title: 'help find Peach', content: 'something goes here. idk what'},
        {id: 2, title: 'mario escapes Bowsers trap!', content: 'something goes here. idk what'},
        {id: 3, title: 'Bowser gained a little too much weight', content: 'something goes here. idk what'}
    ]
}

const ProjectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('created project error', action.err);
            return state;
        default:
            return state;
    }
}

export default ProjectReducer