import Media from "../models/media";
import { Request, Response } from "express";

export async function getAllMedia(req: Request, res: Response): Promise<any> {
    try {
        const mediaFiles = await Media.find();
        if(mediaFiles.length === 0) {
            return res.status(404).json({error: "No Media In SyncEQ"});
        }
        return res.status(200).json(mediaFiles);
    } catch(err: any) {
        return res.status(400).json({error: err.message});
    }
}

export async function getSpecificMedia(req: Request, res: Response): Promise<any> {
    try {
        const mediaFile = await Media.findById(req.params.mediaID);
        if(!mediaFile) {
            return res.status(404).json({error: "no mediaID found like that"});
        }
        return res.status(200).json(mediaFile);
    } catch(err: any) {
        return res.status(400).json({error: err.message});
    }
}

export async function getUsersMedia(req: Request, res: Response): Promise<any> {
    try {
        const mediaFiles = await Media.find({author: req.params.username});
        if(mediaFiles.length === 0) {
            return res.status(404).json({error: "Provided user has no media"});
        }
        return res.status(200).json(mediaFiles);
    } catch(err: any) {
        return res.status(400).json({error: err.message});
    }
}

