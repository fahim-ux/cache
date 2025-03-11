import { bucket } from "./config";
import { Request, Response } from "express";
import multer from "multer";

const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 /* 5MB */ }
});

export const uploadFile = [
    upload.single("file"),
    async (req: Request, res: Response) => {
        try {
            if (!req.user || !req.file) {
                return res.status(400).json({ error: "Missing file or authentication" });
            }

            const userId = req.user.uid;
            const file = req.file;
            const filePath = `users/${userId}/${file.originalname}`;

            // Upload file to Firebase Storage
            const fileUpload = bucket.file(filePath);
            await fileUpload.save(file.buffer, {
                metadata: { contentType: file.mimetype },
            });

            // Get public URL
            const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURIComponent(filePath)}?alt=media`;

            return res.json({ success: true, url: publicUrl });
        } catch (error) {
            console.error("Upload Error:", error);
            return res.status(500).json({ error: "Upload failed" });
        }
    }
];


export const getSignedUrl = async (req: Request, res: Response) => {
    try {
        if (!req.user) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        const userId = req.user.uid;
        const { filename } = req.query;
        if (!filename) return res.status(400).json({ error: "Filename required" });

        const filePath = `users/${userId}/${filename}`;
        const file = bucket.file(filePath);

        // Generate a signed URL (valid for 15 minutes)
        const [url] = await file.getSignedUrl({
            action: "read",
            expires: Date.now() + 15 * 60 * 1000,
        });

        return res.json({ success: true, signedUrl: url });
    } catch (error) {
        console.error("Signed URL Error:", error);
        return res.status(500).json({ error: "Failed to generate signed URL" });
    }
};