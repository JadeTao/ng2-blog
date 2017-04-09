import { Injectable } from '@angular/core';

declare var Bmob: any;

@Injectable()
export class PwdcheckService {
    checkpwd(input: string): boolean {
        Bmob.initialize("25a706e5035ea38d4c6101c294db6b6f", "62b9d39a8365486ff9d07713139a441f");
        let Pwd = Bmob.Object.extend("password");
        let query = new Bmob.Query(Pwd);
        let key:string='angular';
        if (!key) {
            query.get("AIuH4447", {
                success: (object) => {
                    key = object.get('content');
                },
                error: (object, error) => {
                    return false;
                }
            })
        }
        console.log(key)
        return key === input
    }
}
