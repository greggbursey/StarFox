class MyMap<T> {
    private map: { [key: string]: T } = {};
    setItem(key: string, item: T) {
        this.map[key] = item;// will overwrite
    }
    getItem(key: string) {
        return this.map[key];
    }
    clear() {
        this.map = {};
    }
    printMap() {
        for (let key in this.map) {
            console.log(key, this.map[key]);
        }
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem("asdf", 10);
numberMap.setItem("asdfsdafsdaadsfsdf", 100);
numberMap.getItem("asdf");
numberMap.printMap();
numberMap.clear();

const stringMap = new MyMap<string>();
stringMap.setItem("asdf", "10");
stringMap.setItem("asdfsdafsdaadsfsdf", "100");
stringMap.getItem("asdf");
stringMap.printMap();
stringMap.clear();