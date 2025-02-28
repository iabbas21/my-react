const parent = React.createElement(
    'div', 
    {id:'parent'}, 
    [React.createElement(
        'div', 
        {id:'child'}, 
        [
            React.createElement('h1', { id: 'heading' }, 'Iam an h1 tag'), 
            React.createElement('h2', {}, 'Iam an h2 tag')
        ]),
      React.createElement(
        'div', 
        {id:'child-2'}, 
        [
            React.createElement('h1', { id: 'heading' }, 'Iam an h1 tag'), 
            React.createElement('h2', {}, 'Iam an h2 tag')
        ])   
    ])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)