
function customRender (reactElement, mainContainer){
    const domELement = document.createElement(reactElement.type)
    domELement.innerHTML = reactElement.children;
    domELement.setAttribute('href',reactElement.props.href)
    domELement.setAttribute('target',reactElement.props.target)

    mainContainer.appendChild(domELement);
}

const reactElement = {
    type:'a',
    props: {
        href : 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}


const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)
