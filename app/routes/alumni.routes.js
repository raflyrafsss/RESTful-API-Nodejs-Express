const express = require('express');
const router = express.Router();

const Alumni = require('../models/alumni.models');

// POST (CREATE) A ALUMNI
router.post('/', async (req,res) => {
    const alumni = new Alumni({
        name: req.body.name,
        majors: req.body.majors
    });

    try{
        const savedAlumni = await alumni.save();
        res.json(savedAlumni);
    }catch(err){
        res.json({
            message: err
        });
    };
});

// GET ALL ALUMNI
router.get('/', async (req, res) => {
    try{
        const alumni = await Alumni.find();
        res.json(alumni);
    }catch(err){
        res.json({
            message: err
        });
    }
});

// GET ALUMNI BY ID
router.get('/:alumniId', async (req, res) => {
    try{
        const alumni = await Alumni.findById(req.params.alumniId);
        res.json(alumni);
    }catch(err){
        res.json({
            message: err
        });
    }
})

// UPDATE ALUMNI BY ID
router.patch('/:alumniId', async (req, res) => {
    try{
        const updateAlumni = await Alumni.updateOne(
            { _id: req.params.alumniId }, 
            { $set: { name: req.body.name } }
        );
        res.json(updateAlumni);
    }catch(err){
        res.json({
            message: err
        })
    }
})

// DELETE ALUMNI BY ID
router.delete('/:alumniId', async (req, res) => {
    try{
        const removeAlumni = await Alumni.remove({ _id: req.params.alumniId });
        res.json(removeAlumni);
    }catch(err){
        res.json({
            message: err
        });
    }
})

module.exports = router;