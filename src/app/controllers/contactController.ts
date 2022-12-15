import { Request, response, Response } from 'express';
import contactsRepository from '../repositories/contactsRepository';

class ContactController {
    async index(req: Request, res: Response){
        // Listar todos os contatos
        const contacts = await contactsRepository.findAll();
        res.send(200).json(contacts);
    }

    async show(req: Request, res: Response){
        // Obter um registro
        const {id} = req.params;

        const contact = await contactsRepository.findById(id);

        if(!contact){
            return response.status(404).json({error: 'User not found'});
        }

        return res.status(200).json(contact);
    }

    store(){
        // Criar novo registro
    }

    update(){
        // Editar um registro
    }

    async delete(req: Request, res: Response){
        // deletar um registro
        const { id } = req.params;

        const contact = await contactsRepository.findById(id);

        if(!contact) {
            return res.status(404).json({error: 'User not found'});
        }

        await contactsRepository.delete(id);

        response.sendStatus(204);
    }

}

export default new ContactController();
