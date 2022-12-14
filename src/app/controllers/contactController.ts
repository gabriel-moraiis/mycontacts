import { Request, Response } from 'express';

class ContactController {
    index(req: Request, res: Response){
        // Listar todos os contatos
        res.send('Hello world');
    }

    show(){
        // Obter um registro
    }

    store(){
        // Criar novo registro
    }

    update(){
        // Editar um registro
    }

    delete(){
        // deletar um registro
    }

}

export default new ContactController();
