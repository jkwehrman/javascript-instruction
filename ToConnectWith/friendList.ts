
export class Friends {
    friend: string;
    age: number;
    email: string;
    bestFriend: boolean;

    constructor(f: string, a: number, e: string, b: boolean) {
this.friend = f;
this.age = a;
this.email = e;
this.bestFriend = b;
    }

about(): string {
return "Friends: friend = "+this.friend+ 
    ", age = "+this.age+
    ", email = "+this.email+
    ", bestFriend = "+this.bestFriend;
}


}
