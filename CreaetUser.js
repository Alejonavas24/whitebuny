const express = require('express');
const router = express.Router();
const { admin } = require('./config/firebase'); 
const db = admin.firestore();


router.post('/', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password ) {
        return res.status(400).json({
            status: "Bad request",
            message: "Email, password missing"
        });
    }

    try {
        // Crear usuario en Authentication
        const userRecord = await admin.auth().createUser({
            email,
            password,
            displayName: email
        });


        
        await db.collection('/users').doc(userRecord.uid).set({
            email: email,
            password: password
   
            
        });

        res.status(201).json({
            status: "success",
            message: "Usuario creado correctamente en Authentication y Firestore",
            userId: userRecord.uid
        });

    } catch (error) {
        console.error("Error en Firebase:", error); 
        res.status(500).json({
            status: "Internal Server Error",
            message: error.toString() 
        });
    }
});


module.exports = router;
