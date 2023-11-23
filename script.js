function surprise () {
    let Kvitsi = 'Щовесни ріки охоче течуть навздогін морям в знамення відходу набридливих холодів. Цікаво, чи буде наступна весна звичною нам у цьому?';

    let workspace = document.querySelector('.workspace')
    let navigation = document.querySelector('.main__navigation');
    navigation.style.display = 'none';

    let newDiv = document.createElement('div')
    newDiv.style.border = '1px solid';
    newDiv.style.padding = '8px';
    newDiv.style.width = '1000px';
    newDiv.style.borderRadius = '10px';
    newDiv.textContent = Kvitsi;

    workspace.appendChild(newDiv);
}