var code = document.getElementsByTagName('textarea')[0].value;
var render = document.getElementById('render');

function update() {
    code = document.getElementsByTagName('textarea')[0].value;
    render.innerHTML = code;
}
u('button').on('click', update);