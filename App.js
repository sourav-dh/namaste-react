const element = React.createElement('div', {className: 'parent'}, React.createElement('div', {className: 'child'}, 
	[React.createElement('h1', {className: 'heading-1', key: '1'}, 'Heading 1'), 
		React.createElement('h1', {className: 'heading-2', key: '2'}, 'Heading 1')]))
const rootEl = document.getElementById('root')
const root = ReactDOM.createRoot(rootEl)
root.render(element)