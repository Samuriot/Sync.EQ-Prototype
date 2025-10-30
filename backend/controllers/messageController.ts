import Message from "../models/message";
import { Request, Response } from "express";

export async function getUserMessages(req: Request, res: Response): Promise<any> {
    try {
        const user = req.params.username;
        const messages = await Message.find({username: user});
        if(messages.length === 0) {
            return res.status(404).json({error: "no messages found for given user"});
        }
        return res.status(200).json(messages);
    } catch(err: any) {
        return res.status(404).json({error: err.message});
    }
}