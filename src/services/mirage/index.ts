import { createServer, Factory, Model, Response, ActiveModelSerializer } from 'miragejs';
import { faker } from "@faker-js/faker";


type User = {
    name: string;
    email: string;
    created_at: string;
}

export function makeServer(){
    const server = createServer({
        models: {
            user: Model.extend<Partial<User>>({})
        },

        serializers: {
            application: ActiveModelSerializer,
        },

        factories: {
            user: Factory.extend({
                name(i: number) {
                    return `User ${i + 1}`
                },
                email() {
                    return faker.internet.email().toLocaleLowerCase();
                },
                createdAt() {
                    return  faker.date.recent(10)
                },
            })
        },

        seeds(server){
            server.createList('user', 200)
        },

        routes() {
            this.namespace = 'api';
            this.timing = 750; //delay no mirage

            this.get('/users', function (schema, request){
                const { page = 1, per_page = 10 } = request.queryParams;

                const total = schema.all('user').length;

                const pageStart = (Number(page) - 1) * Number(per_page);
                const pageEnd = pageStart + Number(per_page);

                const users = this.serialize(schema.all('user'))
                .users
                .sort((a, b) => a.title > b.title)
                .slice(pageStart, pageEnd);

                    return new Response(
                        200,
                        { 'x-total-count': String(total) },
                        { users }
                    )
            });
            this.get('/users/:id');
            this.post('/users');

            this.namespace = '';
            this.passthrough();
        },
    })

    return server;
}