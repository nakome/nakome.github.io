const { el, mount, list, setChildren } = redom;

const listOfExternalSites = [
    { name: 'Github', icon: 'fa fa-github', ref: 'https://github.com/nakome' },
    { name: 'Bitbucket', icon: 'fa fa-bitbucket', ref: 'https://bitbucket.com/nakome' },
    { name: 'Soundcloud', icon: 'fa fa-soundcloud', ref: 'https://soundcloud.com/nakome' },
    { name: 'Instagram', icon: 'fa fa-instagram', ref: 'https://instagram.com/monchovarela' },
    { name: 'Twitter', icon: 'fa fa-twitter', ref: 'https://twitter.com/nakome' }
]

class Social {
    constructor() {
        this.el = el('li',
            this.link = el('a',
                this.icon = el('i')
            )
        );
    }
    update(data) {
        this.link.title = data.name;
        this.link.href = data.ref;
        this.icon.className = data.icon;
    }
}


class App {
    constructor() {
        this.el = el('main#root');
        this.header = el('h1', 'Moncho Varela.');
        this.sites = list('ul', Social);
        this.sites.update(listOfExternalSites);
        setChildren(this.el, [this.header,this.sites]);
    }
}

const app = new App();
mount(document.body, app);