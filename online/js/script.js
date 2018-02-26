function update() {
    console.log(u("textarea").content[0].value);
    var code = document.getElementsByTagName('textarea')[0].value;
    u("#render").set(code);
}
u('button').on('click', update);