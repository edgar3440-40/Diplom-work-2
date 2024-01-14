export class Form {
    constructor(page) {

        this.agreeElement = null;
        this.page = page;
        this.processElement = null;

        this.fields = [

            {
                name: 'email',
                id: 'e-mail',
                element: null,
                regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                valid: false,
            },
            {
                name: 'password',
                id: 'password',
                element: null,
                regex: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                valid: false,
            },
        ]
        if(this.page === 'signup') {
            this.fields.unshift(        {
                    name: 'name',
                    id: 'name',
                    element: null,
                    regex: /^[А-Яа-яA-Za-z]+\s*$/,
                    valid: false,
                },
                {
                    name: 'lastName',
                    id: 'lastName',
                    element: null,
                    regex: /^[А-Яа-яA-Za-z]+\s*$/,
                    valid: false,
                },)
        }

    }
}