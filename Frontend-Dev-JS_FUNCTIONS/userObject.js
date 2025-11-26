const user1 = {
    name: "Jai",
    showName: () => {
        console.log(this.name);
    }
};

user1.showName();

const user2 = {
    name: "Jai",
    showName() {
        console.log(this.name);
    }
};

user2.showName();