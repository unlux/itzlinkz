import express from "express";
import Profile from "../models/Profile.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const profile = new Profile(req.body);
        await profile.save();
        res.status(201).send(profile);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get("/", async (req, res) => {
    try {
        const profiles = await Profile.find();
        res.status(200).send(profiles);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const profile = await Profile.findById(req.params.id);
        if (!profile) {
            return res.status(404).send();
        }
        res.status(200).send(profile);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const profile = await Profile.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!profile) {
            return res.status(404).send();
        }
        res.status(200).send(profile);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const profile = await Profile.findByIdAndDelete(req.params.id);
        if (!profile) {
            return res.status(404).send();
        }
        res.status(200).send(profile);
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;
