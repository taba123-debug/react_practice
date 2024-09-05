const reactElement={
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target : '_blank'
    },
    children: 'Click meto visit Google'
}

function customRender(reactElement , main_element) {
    // const domElement=document.createElement(reactElement.type)
    // domElement.innerHTML=reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
}
const main_element=document.querySelector('#root')
customRender(reactElement , main_element)