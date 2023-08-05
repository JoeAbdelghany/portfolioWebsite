const sourses = {
    index: '/',
    assets: {
        index: this.index + 'assets/', 
        js: {
            index: this.assets.index + 'js/',
            client: this.assets.js.index + 'client.js',
            main: this.assets.js.index + 'main.js',
        },
        fonts: {
            index: this.assets.index + 'fonts/',
            Poppins: this.assets.fonts.index + 'Poppins/index.css',
            Bebas_Neue: this.assets.fonts.index + 'Bebas_Neue/index.css',
            Roboto: this.assets.fonts.index + 'Roboto/index.css',
        },
        images: {
            index: this.assets.index + 'images/',
            users: this.images.index + 'users/',
            user: this.images.index + 'user/',
            home: this.images.index + 'home/',
            logo: {
                index: this.images.index + 'logo/',
                icons: {
                    index: this.images.logo.index + 'icons/',
                },
                favicon: this.images.logo.index + 'favicon/favicon.ico',
            },
        },
    },
};

export default sourses;

export  {default as assets} from sourses;
export  {default as js} from sourses;
export  {default as images} from sourses;