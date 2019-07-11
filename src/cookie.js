export class Cookie {
    constructor(document) {
        this.document = document;
    }

    read(key) {
        const pairWithNeededKey = this.keyValuePairs().find(pair => pair.key === key);
        return pairWithNeededKey ? pairWithNeededKey.value : undefined;
    }

    keyValuePairs() {
        return this.document.cookie.split('; ').map(piece => {
            const [key, value] = piece.split('=');
            return {key, value};
        });
    }

    write(key, value) {
        this.document.cookie = `${key}=${value}`;
    }
}
