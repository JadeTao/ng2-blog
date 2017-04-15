import { Injectable } from '@angular/core';

declare var Bmob: any;

@Injectable()
export class PwdcheckService {
    constructor() { }
    private password: string

    loadPwd(): void {
        Bmob.initialize("25a706e5035ea38d4c6101c294db6b6f", "62b9d39a8365486ff9d07713139a441f");
        let Pwd = Bmob.Object.extend("password");
        let query = new Bmob.Query(Pwd);
        if (!this.password) {
            query.get("AIuH4447", {
                success: (object) => {
                    this.password = object.get('content');
                    console.log(this.password)
                },
                error: (object, error) => {
                    return false;
                }
            })
        }
    }
    checkPwd(input: string): boolean {
        return input === this.password;
    }
}
