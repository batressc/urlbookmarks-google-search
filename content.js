let references = document.getElementsByTagName('cite');
for(let i = 0; i < references.length; i++) {
    references[i].innerHTML = '<svg width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bookmark" class="svg-inline--fa fa-bookmark fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"></path></svg>' + '    ' + references[i].innerHTML;
}